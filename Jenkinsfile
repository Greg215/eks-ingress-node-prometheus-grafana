#!/usr/bin/env groovy

def notify_channel = "#jenkins-notify"
def aws_region = "ap-southeast-1"
def resource_name = "comapp"
def cluster_name = "greg-eks-demo"
def ecr_repo = "545573948854.dkr.ecr.ap-southeast-1.amazonaws.com"
def aws_credential = "aws-secret-key-devops-training"

if(currentBuild.getPreviousBuild()){
    env.PREVIOUS_BUILD_RESULT = currentBuild.getPreviousBuild().getResult()
    echo "PREVIOUS BUILD RESULT: ${env.PREVIOUS_BUILD_RESULT}"
} else {
    env.PREVIOUS_BUILD_RESULT = "NONE"
}

String getChangeSet(String input){
    def var1 = sh(script: "git whatchanged -n 1  | cut -f2 | grep '^${input}' | wc -l", returnStdout: true).trim()
    var1
}

int getChangeSetOnLocalFolder(String input){
    def var1 = sh(script: "find ${input} 2>/dev/null | wc -l", returnStdout: true).trim()
    var1.toInteger()
}

def build_info = "Job: ${env.JOB_NAME}, Build: #${env.BUILD_NUMBER}."

def build_push_image(ecr_repo, aws_region, resource_name) {
    sh "docker build --network=host -t ${resource_name}:${env.tag_prix}-${env.BUILD_NUMBER} ."
    sh 'docker image ls'
    docker.withRegistry("https://${ecr_repo}/${resource_name}", "ecr:${aws_region}:aws-secret-key-devops-training") {
        sh "docker tag ${resource_name}:${env.tag_prix}-${env.BUILD_NUMBER} ${ecr_repo}/${resource_name}:${env.tag_prix}-${env.BUILD_NUMBER}"
        sh "docker push ${ecr_repo}/${resource_name}:${env.tag_prix}-${env.BUILD_NUMBER}"
    }
}

def deploy(resource_name, ecr_repo) {
    sh(returnStdout: true,
            script: """cat deployment.yaml |\\
                      sed "s|IMAGE_NAME|${ecr_repo}/${resource_name}:${env.tag_prix}-${env.BUILD_NUMBER}|g" >\\
                      ${resource_name}.yaml""").trim()
    sh "cat ${resource_name}.yaml"
    sh(returnStdout: true, script: "kubectl apply -f ${resource_name}.yaml -n ${env.namespace}").trim()
}

properties([parameters([
        choice(choices: ["create", "destroy"].join("\n"), description: "Create or remove cluster", name: "terraform_action")
])])

def label1 = "jenkins-agent-1"
def label2 = "jenkins-agent-2"
def label3 = "jenkins-agent-3"
podTemplate(label: label1, containers: [
        containerTemplate(name: 'jenkins-agent-1',
                image: "greghu/terraform-0.12.31:latest",
                ttyEnabled: true,
                command: 'cat')
]) {
    node(label1) {
        withAWS(credentials: "$aws_credential", region: 'ap-southeast-1') {
            stage('Notify Terraform infra started') {
                slackSend channel: "${notify_channel}", color: "warning", message: "EKS cluster updating ${build_info} (<${env.BUILD_URL}|see details>)"
            }

            container('jenkins-agent-1') {
                stage('Checkout Terraform infra') {
                    git branch: "main",
                        url: "https://github.com/Greg215/terraform-aws-eks.git"
                }

                sshagent(credentials : ['jenkins-bitbucket-key']) {
                    stage('Set Up Bitbucket ssh key') {
                        sh """
                           mkdir -p ~/.ssh
                           ssh-keyscan -t rsa bitbucket.org >> ~/.ssh/known_hosts
                           """
                    }

                    stage('Terraform Init') {
                        sh 'terraform init -input=false'
                    }

                    stage('Terraform Validate') {
                        sh 'terraform validate'
                    }

                    stage('Terraform Fmt') {
                        sh 'terraform fmt'
                    }

                    stage('Terraform Plan') {
                        sh 'terraform plan -out=tfplan -input=false'
                    }

                    stage('Terraform Apply') {
                        if (env.terraform_action == "create") {
                            sh 'terraform apply -input=false tfplan'
                        } else {
                            echo "Skip Apply due to not match."
                        }
                    }

                    stage('Terraform Destroy Plan') {
                        if (env.terraform_action == "destroy") {
                            sh 'terraform plan -destroy'
                        } else {
                            echo "Skip Destroy due to not match."
                        }
                    }

                    stage('Terraform Destroy Confirm') {
                        if (env.terraform_action == "destroy") {
                            sh 'terraform destroy -auto-approve'
                        } else {
                            echo "Skip Destroy due to not match."
                        }
                    }

                    stage('Notify Terraform infra completed') {
                        slackSend channel: "${notify_channel}", color: "good", message: "EKS cluster updated ${build_info} (<${env.BUILD_URL}|see details>)"
                    }
                }
            }
        }
    }
}

if (env.terraform_action == "create") {
    podTemplate(label: label2, yaml: """
        apiVersion: v1
        kind: Pod
        metadata:
          name: "jenkins-agent-2"
          labels:
            app: jenkins-agent-2
        spec:
          containers:
          - name: jenkins-agent
            image: greghu/jenkins-agent:latest
            command: ['cat']
            tty: true
            volumeMounts:
            - name: dockersock
              mountPath: /var/run/docker.sock
          nodeSelector:
                beta.kubernetes.io/instance-type: "t3.medium"
          volumes:
          - name: dockersock
            hostPath:
              path: /var/run/docker.sock
        """
    ) {
        node(label2) {
            withAWS(credentials: "$aws_credential", region: 'ap-southeast-1') {
                stage('Notify App deploy Start') {
                    slackSend channel: "${notify_channel}", color: "warning", message: "Start ${resource_name} deployment ${build_info} (<${env.BUILD_URL}|see details>)"
                }

                container('jenkins-agent') {
                    stage('Prepare Envs') {
                        cleanWs()
                        env.tag_prix = "dev"
                        env.namespace = "comapp"
                    }

                    stage('Checkout Comapp code') {
                        checkout scm
                    }

                    stage('Update Config') {
                        sh "aws eks --region $AWS_DEFAULT_REGION update-kubeconfig --name $cluster_name"
                    }

                    stage('Create Namespace') {
                        sh "kubectl create namespace $namespace --dry-run=client -o yaml | kubectl apply -f -"
                    }

                    stage('Verify Ingress Namespace') {
                        sh "kubectl get ns"
                    }

                    stage('Build And Push Image to ECR') {
                        build_push_image("${ecr_repo}", "${aws_region}", "${resource_name}")
                    }

                    stage('Yarn Install') {
                        sh 'yarn install --pure-lockfile'
                    }

                    stage('Yarn Test') {
                        sh 'yarn test'
                    }

                    stage('Checkout Ingress') {
                        cleanWs()
                        git branch: "master",
                                url: "https://github.com/Greg215/nginx-ingress.git"
                    }

                    stage('Deploy to EKS') {
                        deploy("${resource_name}", "${ecr_repo}")
                    }

                    stage('Clean up ENV') {
                        sh 'docker image prune -a -f'
                        sh 'docker image ls'
                    }

                    stage('Deploy Operator') {
                        sh "kubectl apply -f 01-operator-deployment.yaml"
                    }

                    stage('Deploy Operator crds') {
                        sh "kubectl apply -f 02-operator-crds.yaml"
                    }

                    stage('Deploy Operator rbac') {
                        sh "kubectl apply -f 03-operator-rbac.yaml"
                    }

                    stage('Deploy Nginx Operator') {
                        sh "kubectl apply -f 04-nginx-ingress.yaml"
                    }

                    stage('Verify Ingress Namespace') {
                        sh "kubectl get ns"
                    }

                    stage('Verify Ingress') {
                        sleep 20
                        sh "kubectl get pods -n ingress-nginx"
                    }

                    stage('Notify Complete of Deployment') {
                        slackSend channel: "${notify_channel}", color: "good", message: "Finish ${resource_name} deployment on branch ${env.BRANCH_NAME}, image tag ${env.tag_prix}-${env.BUILD_NUMBER}"
                    }
                }
            }
        }
    }
}

if (env.terraform_action == "create") {
    podTemplate(label: label3, containers: [
            containerTemplate(name: 'jenkins-agent-3',
                    image: 'greghu/jenkins-agent-helm:latest',
                    ttyEnabled: true,
                    command: 'cat')
    ]) {
        node(label3) {
            withAWS(credentials: "$aws_credential", region: 'ap-southeast-1') {
                stage('Start deploy Prometheus and Grafana') {
                    slackSend channel: "${notify_channel}", color: "warning", message: "Start Prometheus and Grafana installation ${build_info} (<${env.BUILD_URL}|see details>)"
                }

                container('jenkins-agent-3') {
                    stage('Update KubeConfig') {
                        sh "aws eks --region $AWS_DEFAULT_REGION update-kubeconfig --name $cluster_name"
                    }

                    stage('Create Monitoring Namespace') {
                        sh "kubectl create namespace monitoring --dry-run=client -o yaml | kubectl apply -f -"
                    }

                    stage('Add Promethus Helm repo') {
                        sh "helm repo add prometheus-community https://prometheus-community.github.io/helm-charts"
                    }

                    stage('Verify Helm repo') {
                        sh "helm repo list"
                    }

                    stage('Helm Install Promethus') {
                        sh "helm install prometheus prometheus-community/prometheus -n monitoring"
                    }

                    stage('Add Grafana Helm repo') {
                        sh "helm repo add grafana https://grafana.github.io/helm-charts"
                    }

                    stage('Verify Helm repo') {
                        sh "helm repo list"
                    }

                    stage('Helm Install Grafana') {
                        sh "helm install grafana grafana/grafana -n monitoring"
                    }

                    stage('Check the pods status') {
                        sleep 30
                        sh 'kubectl get pods -n monitoring'
                    }
                }

                stage('Complete deploy Prometheus and Grafana') {
                    slackSend channel: "${notify_channel}", color: "warning", message: "Start Prometheus and Grafana installation. (<${env.BUILD_URL}|see details>)"
                }
            }
        }
    }
}