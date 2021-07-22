Started by user Greg Hu
Obtained Jenkinsfile from *****************
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] echo
PREVIOUS BUILD RESULT: SUCCESS
[Pipeline] properties
[Pipeline] podTemplate
[Pipeline] {
[Pipeline] node
Created Pod: kubernetes jenkins/jenkins-agent-1-njpgp-jsfx0
[Normal][jenkins/jenkins-agent-1-njpgp-jsfx0][Scheduled] Successfully assigned jenkins/jenkins-agent-1-njpgp-jsfx0 to ip-172-31-237-140.ap-southeast-1.compute.internal
[Normal][jenkins/jenkins-agent-1-njpgp-jsfx0][Pulled] Container image "greghu/terraform-0.12.31:latest" already present on machine
[Normal][jenkins/jenkins-agent-1-njpgp-jsfx0][Created] Created container jenkins-agent-1
[Normal][jenkins/jenkins-agent-1-njpgp-jsfx0][Started] Started container jenkins-agent-1
[Normal][jenkins/jenkins-agent-1-njpgp-jsfx0][Pulled] Container image "jenkins/inbound-agent:4.3-4" already present on machine
[Normal][jenkins/jenkins-agent-1-njpgp-jsfx0][Created] Created container jnlp
[Normal][jenkins/jenkins-agent-1-njpgp-jsfx0][Started] Started container jnlp
Agent jenkins-agent-1-njpgp-jsfx0 is provisioned from template jenkins-agent-1-njpgp
---
apiVersion: "v1"
kind: "Pod"
metadata:
  annotations:
    buildUrl: "http://jenkins:443/job/full-job/40/"
    runUrl: "job/full-job/40/"
  labels:
    jenkins/jenkins-jenkins-agent: "true"
    jenkins/label-digest: "acc9093c3172cf77e138ed7ea31bb951001e2ba1"
    jenkins/label: "jenkins-agent-1"
  name: "jenkins-agent-1-njpgp-jsfx0"
spec:
  containers:
  - command:
    - "cat"
    image: "greghu/terraform-0.12.31:latest"
    imagePullPolicy: "IfNotPresent"
    name: "jenkins-agent-1"
    resources:
      limits: {}
      requests: {}
    tty: true
    volumeMounts:
    - mountPath: "/home/jenkins/agent"
      name: "workspace-volume"
      readOnly: false
  - env:
    - name: "JENKINS_SECRET"
      value: "********"
    - name: "JENKINS_TUNNEL"
      value: "jenkins-agent:31000"
    - name: "JENKINS_AGENT_NAME"
      value: "jenkins-agent-1-njpgp-jsfx0"
    - name: "JENKINS_NAME"
      value: "jenkins-agent-1-njpgp-jsfx0"
    - name: "JENKINS_AGENT_WORKDIR"
      value: "/home/jenkins/agent"
    - name: "JENKINS_URL"
      value: "http://jenkins:443/"
    image: "jenkins/inbound-agent:4.3-4"
    name: "jnlp"
    resources:
      limits: {}
      requests:
        memory: "256Mi"
        cpu: "100m"
    volumeMounts:
    - mountPath: "/home/jenkins/agent"
      name: "workspace-volume"
      readOnly: false
  nodeSelector:
    kubernetes.io/os: "linux"
  restartPolicy: "Never"
  volumes:
  - emptyDir:
      medium: ""
    name: "workspace-volume"

Running on jenkins-agent-1-njpgp-jsfx0 in /home/jenkins/agent/workspace/full-job
[Pipeline] {
[Pipeline] withAWS
Constructing AWS CredentialsSetting AWS region ap-southeast-1 
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Notify Terraform infra started)
[Pipeline] slackSend
Slack Send Pipeline step running, values are - baseUrl: <empty>, teamDomain: ***, channel: #jenkins-notify, color: warning, botUser: false, tokenCredentialId: jenkins-slack-token, notifyCommitters: false, iconEmoji: <empty>, username: <empty>, timestamp: <empty>
[Pipeline] }
[Pipeline] // stage
[Pipeline] container
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Checkout Terraform infra)
[Pipeline] git
The recommended git tool is: NONE
No credentials specified
Warning: JENKINS-30600: special launcher org.csanchez.jenkins.plugins.kubernetes.pipeline.ContainerExecDecorator$1@760d6b5d; decorates RemoteLauncher[hudson.remoting.Channel@16043425:JNLP4-connect connection from ip-172-31-237-40.ap-southeast-1.compute.internal/172.31.237.40:53056] will be ignored (a typical symptom is the Git executable not being run inside a designated container)
Cloning the remote Git repository
Cloning repository https://github.com/Greg215/terraform-aws-eks.git
 > git init /home/jenkins/agent/workspace/full-job # timeout=10
Fetching upstream changes from https://github.com/Greg215/terraform-aws-eks.git
 > git --version # timeout=10
 > git --version # 'git version 2.20.1'
 > git fetch --tags --force --progress -- https://github.com/Greg215/terraform-aws-eks.git +refs/heads/*:refs/remotes/origin/* # timeout=10
Avoid second fetch
Checking out Revision 121c7eb34e953b0c6cb45f37565783c46951a069 (refs/remotes/origin/main)
 > git config remote.origin.url https://github.com/Greg215/terraform-aws-eks.git # timeout=10
 > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/main^{commit} # timeout=10
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 121c7eb34e953b0c6cb45f37565783c46951a069 # timeout=10
 > git branch -a -v --no-abbrev # timeout=10
 > git checkout -b main 121c7eb34e953b0c6cb45f37565783c46951a069 # timeout=10
Commit message: "update vpc name"
 > git rev-list --no-walk 121c7eb34e953b0c6cb45f37565783c46951a069 # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] sshagent
[ssh-agent] Using credentials greg215 (SSH key for jenkinsci user on Bitbucket)
[ssh-agent] Looking for ssh-agent implementation...
[ssh-agent]   Exec ssh-agent (binary ssh-agent on a remote machine)
Executing sh script inside container jenkins-agent-1 of pod jenkins-agent-1-njpgp-jsfx0
Executing command: "ssh-agent" 
exit
SSH_AUTH_SOCK=/tmp/ssh-XXXXXXBekHBn/agent.22; export SSH_AUTH_SOCK;
SSH_AGENT_PID=23; export SSH_AGENT_PID;
echo Agent pid 23;
SSH_AUTH_SOCK=/tmp/ssh-XXXXXXBekHBn/agent.22
SSH_AGENT_PID=23
Running ssh-add (command line suppressed)
Identity added: /home/jenkins/agent/workspace/full-job@tmp/private_key_2488016352336973295.key (guangyuehu@guangyues-MacBook-Pro.local)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Set Up Bitbucket ssh key)
[Pipeline] sh
+ mkdir -p /root/.ssh
+ ssh-keyscan -t rsa bitbucket.org
# bitbucket.org:22 SSH-2.0-conker_fc29489382 009850203efc
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Terraform Init)
[Pipeline] sh
+ terraform init '-input=false'
[0m[1mInitializing modules...[0m
- eks_cluster in eks-cluster
- eks_workers in eks-worker
- eks_workers.autoscale_group in asg
- network_loadbalancer in nlb
- route53 in route53-records
- subnets in subnet
- vpc in vpc

[0m[1mInitializing the backend...[0m
[0m[32m
Successfully configured the backend "s3"! Terraform will automatically
use this backend unless the backend configuration changes.[0m

[0m[1mInitializing provider plugins...[0m
- Checking for available provider plugins...
- Downloading plugin for provider "kubernetes" (hashicorp/kubernetes) 2.3.2...
- Downloading plugin for provider "aws" (hashicorp/aws) 3.50.0...
- Downloading plugin for provider "null" (hashicorp/null) 3.1.0...
- Downloading plugin for provider "template" (hashicorp/template) 2.2.0...

The following providers do not have any version constraints in configuration,
so the latest version was installed.

To prevent automatic upgrades to new major versions that may contain breaking
changes, it is recommended to add version = "..." constraints to the
corresponding provider blocks in configuration, with the constraint strings
suggested below.

* provider.aws: version = "~> 3.50"
* provider.kubernetes: version = "~> 2.3"
* provider.null: version = "~> 3.1"
* provider.template: version = "~> 2.2"

[0m[1m[32mTerraform has been successfully initialized![0m[32m[0m
[0m[32m
You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.[0m
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Terraform Validate)
[Pipeline] sh
+ terraform validate
[32m[1mSuccess![0m The configuration is valid.
[0m
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Terraform Fmt)
[Pipeline] sh
+ terraform fmt
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Terraform Plan)
[Pipeline] sh
+ terraform plan '-out=tfplan' '-input=false'
[0m[1mRefreshing Terraform state in-memory prior to plan...[0m
The refreshed state will be used to calculate this plan, but will not be
persisted to local or remote state storage.
[0m
[0m[1mmodule.eks_workers.data.aws_iam_policy_document.assume_role[0]: Refreshing state...[0m
[0m[1mmodule.subnets.data.aws_availability_zones.available: Refreshing state...[0m
[0m[1mmodule.eks_cluster.data.aws_iam_policy_document.assume_role[0]: Refreshing state...[0m

------------------------------------------------------------------------

An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
  [32m+[0m create
 [36m<=[0m read (data resources)
[0m
Terraform will perform the following actions:

[1m  # module.eks_cluster.data.aws_eks_cluster.eks[0][0m will be read during apply
  # (config refers to values not yet known)[0m[0m
[0m [36m<=[0m[0m data "aws_eks_cluster" "eks"  {
      [32m+[0m [0m[1m[0marn[0m[0m                       = (known after apply)
      [32m+[0m [0m[1m[0mcertificate_authority[0m[0m     = (known after apply)
      [32m+[0m [0m[1m[0mcreated_at[0m[0m                = (known after apply)
      [32m+[0m [0m[1m[0menabled_cluster_log_types[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mendpoint[0m[0m                  = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m                        = (known after apply)
      [32m+[0m [0m[1m[0midentity[0m[0m                  = (known after apply)
      [32m+[0m [0m[1m[0mkubernetes_network_config[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mname[0m[0m                      = (known after apply)
      [32m+[0m [0m[1m[0mplatform_version[0m[0m          = (known after apply)
      [32m+[0m [0m[1m[0mrole_arn[0m[0m                  = (known after apply)
      [32m+[0m [0m[1m[0mstatus[0m[0m                    = (known after apply)
      [32m+[0m [0m[1m[0mtags[0m[0m                      = (known after apply)
      [32m+[0m [0m[1m[0mversion[0m[0m                   = (known after apply)
      [32m+[0m [0m[1m[0mvpc_config[0m[0m                = (known after apply)
    }

[1m  # module.eks_cluster.data.aws_eks_cluster_auth.eks[0][0m will be read during apply
  # (config refers to values not yet known)[0m[0m
[0m [36m<=[0m[0m data "aws_eks_cluster_auth" "eks"  {
      [32m+[0m [0m[1m[0mid[0m[0m    = (known after apply)
      [32m+[0m [0m[1m[0mname[0m[0m  = (known after apply)
      [32m+[0m [0m[1m[0mtoken[0m[0m = (sensitive value)
    }

[1m  # module.eks_cluster.aws_eks_cluster.default[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_eks_cluster" "default" {
      [32m+[0m [0m[1m[0marn[0m[0m                   = (known after apply)
      [32m+[0m [0m[1m[0mcertificate_authority[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mcreated_at[0m[0m            = (known after apply)
      [32m+[0m [0m[1m[0mendpoint[0m[0m              = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m                    = (known after apply)
      [32m+[0m [0m[1m[0midentity[0m[0m              = (known after apply)
      [32m+[0m [0m[1m[0mname[0m[0m                  = "greg-eks-demo"
      [32m+[0m [0m[1m[0mplatform_version[0m[0m      = (known after apply)
      [32m+[0m [0m[1m[0mrole_arn[0m[0m              = (known after apply)
      [32m+[0m [0m[1m[0mstatus[0m[0m                = (known after apply)
      [32m+[0m [0m[1m[0mtags[0m[0m                  = {
          [32m+[0m [0m"Name"       = "greg-eks-demo"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m              = {
          [32m+[0m [0m"Name"       = "greg-eks-demo"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mversion[0m[0m               = "1.18"

      [32m+[0m [0mkubernetes_network_config {
          [32m+[0m [0m[1m[0mservice_ipv4_cidr[0m[0m = (known after apply)
        }

      [32m+[0m [0mvpc_config {
          [32m+[0m [0m[1m[0mcluster_security_group_id[0m[0m = (known after apply)
          [32m+[0m [0m[1m[0mendpoint_private_access[0m[0m   = false
          [32m+[0m [0m[1m[0mendpoint_public_access[0m[0m    = true
          [32m+[0m [0m[1m[0mpublic_access_cidrs[0m[0m       = [
              [32m+[0m [0m"0.0.0.0/0",
            ]
          [32m+[0m [0m[1m[0msecurity_group_ids[0m[0m        = (known after apply)
          [32m+[0m [0m[1m[0msubnet_ids[0m[0m                = (known after apply)
          [32m+[0m [0m[1m[0mvpc_id[0m[0m                    = (known after apply)
        }
    }

[1m  # module.eks_cluster.aws_iam_role.default[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_iam_role" "default" {
      [32m+[0m [0m[1m[0marn[0m[0m                   = (known after apply)
      [32m+[0m [0m[1m[0massume_role_policy[0m[0m    = jsonencode(
            {
              [32m+[0m [0mStatement = [
                  [32m+[0m [0m{
                      [32m+[0m [0mAction    = "sts:AssumeRole"
                      [32m+[0m [0mEffect    = "Allow"
                      [32m+[0m [0mPrincipal = {
                          [32m+[0m [0mService = "eks.amazonaws.com"
                        }
                      [32m+[0m [0mSid       = ""
                    },
                ]
              [32m+[0m [0mVersion   = "2012-10-17"
            }
        )
      [32m+[0m [0m[1m[0mcreate_date[0m[0m           = (known after apply)
      [32m+[0m [0m[1m[0mforce_detach_policies[0m[0m = false
      [32m+[0m [0m[1m[0mid[0m[0m                    = (known after apply)
      [32m+[0m [0m[1m[0mmanaged_policy_arns[0m[0m   = (known after apply)
      [32m+[0m [0m[1m[0mmax_session_duration[0m[0m  = 3600
      [32m+[0m [0m[1m[0mname[0m[0m                  = "iam-role-cluster-greg-eks-demo"
      [32m+[0m [0m[1m[0mpath[0m[0m                  = "/"
      [32m+[0m [0m[1m[0mtags[0m[0m                  = {
          [32m+[0m [0m"Name"       = "iam-role-cluster-greg-eks-demo"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m              = {
          [32m+[0m [0m"Name"       = "iam-role-cluster-greg-eks-demo"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0munique_id[0m[0m             = (known after apply)

      [32m+[0m [0minline_policy {
          [32m+[0m [0m[1m[0mname[0m[0m   = (known after apply)
          [32m+[0m [0m[1m[0mpolicy[0m[0m = (known after apply)
        }
    }

[1m  # module.eks_cluster.aws_iam_role_policy_attachment.amazon_eks_cluster_policy[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_iam_role_policy_attachment" "amazon_eks_cluster_policy" {
      [32m+[0m [0m[1m[0mid[0m[0m         = (known after apply)
      [32m+[0m [0m[1m[0mpolicy_arn[0m[0m = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
      [32m+[0m [0m[1m[0mrole[0m[0m       = "iam-role-cluster-greg-eks-demo"
    }

[1m  # module.eks_cluster.aws_iam_role_policy_attachment.amazon_eks_service_policy[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_iam_role_policy_attachment" "amazon_eks_service_policy" {
      [32m+[0m [0m[1m[0mid[0m[0m         = (known after apply)
      [32m+[0m [0m[1m[0mpolicy_arn[0m[0m = "arn:aws:iam::aws:policy/AmazonEKSServicePolicy"
      [32m+[0m [0m[1m[0mrole[0m[0m       = "iam-role-cluster-greg-eks-demo"
    }

[1m  # module.eks_cluster.aws_security_group.default[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_security_group" "default" {
      [32m+[0m [0m[1m[0marn[0m[0m                    = (known after apply)
      [32m+[0m [0m[1m[0mdescription[0m[0m            = "Security Group for EKS cluster"
      [32m+[0m [0m[1m[0megress[0m[0m                 = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m                     = (known after apply)
      [32m+[0m [0m[1m[0mingress[0m[0m                = (known after apply)
      [32m+[0m [0m[1m[0mname[0m[0m                   = "eks-cluster-sg-greg-eks-demo"
      [32m+[0m [0m[1m[0mname_prefix[0m[0m            = (known after apply)
      [32m+[0m [0m[1m[0mowner_id[0m[0m               = (known after apply)
      [32m+[0m [0m[1m[0mrevoke_rules_on_delete[0m[0m = false
      [32m+[0m [0m[1m[0mtags[0m[0m                   = {
          [32m+[0m [0m"Name"       = "eks-cluster-sg-greg-eks-demo"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m               = {
          [32m+[0m [0m"Name"       = "eks-cluster-sg-greg-eks-demo"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mvpc_id[0m[0m                 = (known after apply)
    }

[1m  # module.eks_cluster.aws_security_group_rule.egress[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_security_group_rule" "egress" {
      [32m+[0m [0m[1m[0mcidr_blocks[0m[0m              = [
          [32m+[0m [0m"0.0.0.0/0",
        ]
      [32m+[0m [0m[1m[0mdescription[0m[0m              = "Allow all egress traffic"
      [32m+[0m [0m[1m[0mfrom_port[0m[0m                = 0
      [32m+[0m [0m[1m[0mid[0m[0m                       = (known after apply)
      [32m+[0m [0m[1m[0mprotocol[0m[0m                 = "-1"
      [32m+[0m [0m[1m[0msecurity_group_id[0m[0m        = (known after apply)
      [32m+[0m [0m[1m[0mself[0m[0m                     = false
      [32m+[0m [0m[1m[0msource_security_group_id[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mto_port[0m[0m                  = 0
      [32m+[0m [0m[1m[0mtype[0m[0m                     = "egress"
    }

[1m  # module.eks_cluster.aws_security_group_rule.ingress_workers[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_security_group_rule" "ingress_workers" {
      [32m+[0m [0m[1m[0mdescription[0m[0m              = "Allow the cluster to receive communication from the worker nodes"
      [32m+[0m [0m[1m[0mfrom_port[0m[0m                = 0
      [32m+[0m [0m[1m[0mid[0m[0m                       = (known after apply)
      [32m+[0m [0m[1m[0mprotocol[0m[0m                 = "-1"
      [32m+[0m [0m[1m[0msecurity_group_id[0m[0m        = (known after apply)
      [32m+[0m [0m[1m[0mself[0m[0m                     = false
      [32m+[0m [0m[1m[0msource_security_group_id[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mto_port[0m[0m                  = 65535
      [32m+[0m [0m[1m[0mtype[0m[0m                     = "ingress"
    }

[1m  # module.eks_cluster.kubernetes_config_map.aws_auth_ignore_changes[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "kubernetes_config_map" "aws_auth_ignore_changes" {
      [32m+[0m [0m[1m[0mdata[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m   = (known after apply)

      [32m+[0m [0mmetadata {
          [32m+[0m [0m[1m[0mgeneration[0m[0m       = (known after apply)
          [32m+[0m [0m[1m[0mname[0m[0m             = "aws-auth"
          [32m+[0m [0m[1m[0mnamespace[0m[0m        = "kube-system"
          [32m+[0m [0m[1m[0mresource_version[0m[0m = (known after apply)
          [32m+[0m [0m[1m[0muid[0m[0m              = (known after apply)
        }
    }

[1m  # module.eks_cluster.null_resource.wait_for_cluster[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "null_resource" "wait_for_cluster" {
      [32m+[0m [0m[1m[0mid[0m[0m = (known after apply)
    }

[1m  # module.eks_workers.data.template_file.userdata[0][0m will be read during apply
  # (config refers to values not yet known)[0m[0m
[0m [36m<=[0m[0m data "template_file" "userdata"  {
      [32m+[0m [0m[1m[0mid[0m[0m       = (known after apply)
      [32m+[0m [0m[1m[0mrendered[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mtemplate[0m[0m = <<~EOT
            #!/bin/bash
            
            # userdata for EKS worker nodes to properly configure Kubernetes applications on EC2 instances
            # https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html
            # https://aws.amazon.com/blogs/opensource/improvements-eks-worker-node-provisioning/
            # https://github.com/awslabs/amazon-eks-ami/blob/master/files/bootstrap.sh#L97
            
            ${before_cluster_joining_userdata}
            
            export KUBELET_EXTRA_ARGS="${kubelet_extra_args}"
            
            /etc/eks/bootstrap.sh \
                  --apiserver-endpoint "${cluster_endpoint}" \
                  --b64-cluster-ca "${certificate_authority_data}" \
                  "${cluster_name}"
            
            ${after_cluster_joining_userdata}
        EOT
      [32m+[0m [0m[1m[0mvars[0m[0m     = {
          [32m+[0m [0m"after_cluster_joining_userdata"  = ""
          [32m+[0m [0m"before_cluster_joining_userdata" = ""
          [32m+[0m [0m"bootstrap_extra_args"            = ""
          [32m+[0m [0m"certificate_authority_data"      = (known after apply)
          [32m+[0m [0m"cluster_endpoint"                = (known after apply)
          [32m+[0m [0m"cluster_name"                    = (known after apply)
          [32m+[0m [0m"kubelet_extra_args"              = ""
        }
    }

[1m  # module.eks_workers.aws_iam_instance_profile.default[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_iam_instance_profile" "default" {
      [32m+[0m [0m[1m[0marn[0m[0m         = (known after apply)
      [32m+[0m [0m[1m[0mcreate_date[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m          = (known after apply)
      [32m+[0m [0m[1m[0mname[0m[0m        = (known after apply)
      [32m+[0m [0m[1m[0mpath[0m[0m        = "/"
      [32m+[0m [0m[1m[0mrole[0m[0m        = (known after apply)
      [32m+[0m [0m[1m[0mtags_all[0m[0m    = (known after apply)
      [32m+[0m [0m[1m[0munique_id[0m[0m   = (known after apply)
    }

[1m  # module.eks_workers.aws_iam_role.default[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_iam_role" "default" {
      [32m+[0m [0m[1m[0marn[0m[0m                   = (known after apply)
      [32m+[0m [0m[1m[0massume_role_policy[0m[0m    = jsonencode(
            {
              [32m+[0m [0mStatement = [
                  [32m+[0m [0m{
                      [32m+[0m [0mAction    = "sts:AssumeRole"
                      [32m+[0m [0mEffect    = "Allow"
                      [32m+[0m [0mPrincipal = {
                          [32m+[0m [0mService = "ec2.amazonaws.com"
                        }
                      [32m+[0m [0mSid       = ""
                    },
                ]
              [32m+[0m [0mVersion   = "2012-10-17"
            }
        )
      [32m+[0m [0m[1m[0mcreate_date[0m[0m           = (known after apply)
      [32m+[0m [0m[1m[0mforce_detach_policies[0m[0m = false
      [32m+[0m [0m[1m[0mid[0m[0m                    = (known after apply)
      [32m+[0m [0m[1m[0mmanaged_policy_arns[0m[0m   = (known after apply)
      [32m+[0m [0m[1m[0mmax_session_duration[0m[0m  = 3600
      [32m+[0m [0m[1m[0mname[0m[0m                  = (known after apply)
      [32m+[0m [0m[1m[0mpath[0m[0m                  = "/"
      [32m+[0m [0m[1m[0mtags[0m[0m                  = (known after apply)
      [32m+[0m [0m[1m[0mtags_all[0m[0m              = (known after apply)
      [32m+[0m [0m[1m[0munique_id[0m[0m             = (known after apply)

      [32m+[0m [0minline_policy {
          [32m+[0m [0m[1m[0mname[0m[0m   = (known after apply)
          [32m+[0m [0m[1m[0mpolicy[0m[0m = (known after apply)
        }
    }

[1m  # module.eks_workers.aws_iam_role_policy_attachment.amazon_ec2_container_registry_read_only[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_iam_role_policy_attachment" "amazon_ec2_container_registry_read_only" {
      [32m+[0m [0m[1m[0mid[0m[0m         = (known after apply)
      [32m+[0m [0m[1m[0mpolicy_arn[0m[0m = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
      [32m+[0m [0m[1m[0mrole[0m[0m       = (known after apply)
    }

[1m  # module.eks_workers.aws_iam_role_policy_attachment.amazon_eks_cni_policy[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_iam_role_policy_attachment" "amazon_eks_cni_policy" {
      [32m+[0m [0m[1m[0mid[0m[0m         = (known after apply)
      [32m+[0m [0m[1m[0mpolicy_arn[0m[0m = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
      [32m+[0m [0m[1m[0mrole[0m[0m       = (known after apply)
    }

[1m  # module.eks_workers.aws_iam_role_policy_attachment.amazon_eks_worker_node_policy[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_iam_role_policy_attachment" "amazon_eks_worker_node_policy" {
      [32m+[0m [0m[1m[0mid[0m[0m         = (known after apply)
      [32m+[0m [0m[1m[0mpolicy_arn[0m[0m = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
      [32m+[0m [0m[1m[0mrole[0m[0m       = (known after apply)
    }

[1m  # module.eks_workers.aws_security_group.default[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_security_group" "default" {
      [32m+[0m [0m[1m[0marn[0m[0m                    = (known after apply)
      [32m+[0m [0m[1m[0mdescription[0m[0m            = "Security Group for EKS worker nodes"
      [32m+[0m [0m[1m[0megress[0m[0m                 = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m                     = (known after apply)
      [32m+[0m [0m[1m[0mingress[0m[0m                = (known after apply)
      [32m+[0m [0m[1m[0mname[0m[0m                   = (known after apply)
      [32m+[0m [0m[1m[0mname_prefix[0m[0m            = (known after apply)
      [32m+[0m [0m[1m[0mowner_id[0m[0m               = (known after apply)
      [32m+[0m [0m[1m[0mrevoke_rules_on_delete[0m[0m = false
      [32m+[0m [0m[1m[0mtags[0m[0m                   = (known after apply)
      [32m+[0m [0m[1m[0mtags_all[0m[0m               = (known after apply)
      [32m+[0m [0m[1m[0mvpc_id[0m[0m                 = (known after apply)
    }

[1m  # module.eks_workers.aws_security_group_rule.egress[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_security_group_rule" "egress" {
      [32m+[0m [0m[1m[0mcidr_blocks[0m[0m              = [
          [32m+[0m [0m"0.0.0.0/0",
        ]
      [32m+[0m [0m[1m[0mdescription[0m[0m              = "Allow all egress traffic"
      [32m+[0m [0m[1m[0mfrom_port[0m[0m                = 0
      [32m+[0m [0m[1m[0mid[0m[0m                       = (known after apply)
      [32m+[0m [0m[1m[0mprotocol[0m[0m                 = "-1"
      [32m+[0m [0m[1m[0msecurity_group_id[0m[0m        = (known after apply)
      [32m+[0m [0m[1m[0mself[0m[0m                     = false
      [32m+[0m [0m[1m[0msource_security_group_id[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mto_port[0m[0m                  = 0
      [32m+[0m [0m[1m[0mtype[0m[0m                     = "egress"
    }

[1m  # module.eks_workers.aws_security_group_rule.ingress_self[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_security_group_rule" "ingress_self" {
      [32m+[0m [0m[1m[0mdescription[0m[0m              = "Allow nodes to communicate with each other"
      [32m+[0m [0m[1m[0mfrom_port[0m[0m                = 0
      [32m+[0m [0m[1m[0mid[0m[0m                       = (known after apply)
      [32m+[0m [0m[1m[0mprotocol[0m[0m                 = "-1"
      [32m+[0m [0m[1m[0msecurity_group_id[0m[0m        = (known after apply)
      [32m+[0m [0m[1m[0mself[0m[0m                     = false
      [32m+[0m [0m[1m[0msource_security_group_id[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mto_port[0m[0m                  = 65535
      [32m+[0m [0m[1m[0mtype[0m[0m                     = "ingress"
    }

[1m  # module.network_loadbalancer.aws_lb.nlb[0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_lb" "nlb" {
      [32m+[0m [0m[1m[0marn[0m[0m                              = (known after apply)
      [32m+[0m [0m[1m[0marn_suffix[0m[0m                       = (known after apply)
      [32m+[0m [0m[1m[0mdns_name[0m[0m                         = (known after apply)
      [32m+[0m [0m[1m[0menable_cross_zone_load_balancing[0m[0m = false
      [32m+[0m [0m[1m[0menable_deletion_protection[0m[0m       = false
      [32m+[0m [0m[1m[0mid[0m[0m                               = (known after apply)
      [32m+[0m [0m[1m[0minternal[0m[0m                         = false
      [32m+[0m [0m[1m[0mip_address_type[0m[0m                  = (known after apply)
      [32m+[0m [0m[1m[0mload_balancer_type[0m[0m               = "network"
      [32m+[0m [0m[1m[0mname[0m[0m                             = "nlb-greg-eks-demo"
      [32m+[0m [0m[1m[0msecurity_groups[0m[0m                  = (known after apply)
      [32m+[0m [0m[1m[0msubnets[0m[0m                          = (known after apply)
      [32m+[0m [0m[1m[0mtags_all[0m[0m                         = (known after apply)
      [32m+[0m [0m[1m[0mvpc_id[0m[0m                           = (known after apply)
      [32m+[0m [0m[1m[0mzone_id[0m[0m                          = (known after apply)

      [32m+[0m [0msubnet_mapping {
          [32m+[0m [0m[1m[0mallocation_id[0m[0m        = (known after apply)
          [32m+[0m [0m[1m[0mipv6_address[0m[0m         = (known after apply)
          [32m+[0m [0m[1m[0moutpost_id[0m[0m           = (known after apply)
          [32m+[0m [0m[1m[0mprivate_ipv4_address[0m[0m = (known after apply)
          [32m+[0m [0m[1m[0msubnet_id[0m[0m            = (known after apply)
        }
    }

[1m  # module.network_loadbalancer.aws_lb_listener.nlb_listeners[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_lb_listener" "nlb_listeners" {
      [32m+[0m [0m[1m[0marn[0m[0m               = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m                = (known after apply)
      [32m+[0m [0m[1m[0mload_balancer_arn[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mport[0m[0m              = 80
      [32m+[0m [0m[1m[0mprotocol[0m[0m          = "TCP"
      [32m+[0m [0m[1m[0mssl_policy[0m[0m        = (known after apply)
      [32m+[0m [0m[1m[0mtags_all[0m[0m          = (known after apply)

      [32m+[0m [0mdefault_action {
          [32m+[0m [0m[1m[0morder[0m[0m            = (known after apply)
          [32m+[0m [0m[1m[0mtarget_group_arn[0m[0m = (known after apply)
          [32m+[0m [0m[1m[0mtype[0m[0m             = "forward"
        }
    }

[1m  # module.network_loadbalancer.aws_lb_target_group.target_groups[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_lb_target_group" "target_groups" {
      [32m+[0m [0m[1m[0marn[0m[0m                                = (known after apply)
      [32m+[0m [0m[1m[0marn_suffix[0m[0m                         = (known after apply)
      [32m+[0m [0m[1m[0mderegistration_delay[0m[0m               = 300
      [32m+[0m [0m[1m[0mid[0m[0m                                 = (known after apply)
      [32m+[0m [0m[1m[0mlambda_multi_value_headers_enabled[0m[0m = false
      [32m+[0m [0m[1m[0mload_balancing_algorithm_type[0m[0m      = (known after apply)
      [32m+[0m [0m[1m[0mname[0m[0m                               = "tg-greg-eks-demo-to-30080"
      [32m+[0m [0m[1m[0mport[0m[0m                               = 30080
      [32m+[0m [0m[1m[0mpreserve_client_ip[0m[0m                 = (known after apply)
      [32m+[0m [0m[1m[0mprotocol[0m[0m                           = "TCP"
      [32m+[0m [0m[1m[0mprotocol_version[0m[0m                   = (known after apply)
      [32m+[0m [0m[1m[0mproxy_protocol_v2[0m[0m                  = false
      [32m+[0m [0m[1m[0mslow_start[0m[0m                         = 0
      [32m+[0m [0m[1m[0mtags_all[0m[0m                           = (known after apply)
      [32m+[0m [0m[1m[0mtarget_type[0m[0m                        = "instance"
      [32m+[0m [0m[1m[0mvpc_id[0m[0m                             = (known after apply)

      [32m+[0m [0mhealth_check {
          [32m+[0m [0m[1m[0menabled[0m[0m             = true
          [32m+[0m [0m[1m[0mhealthy_threshold[0m[0m   = 3
          [32m+[0m [0m[1m[0minterval[0m[0m            = 30
          [32m+[0m [0m[1m[0mmatcher[0m[0m             = (known after apply)
          [32m+[0m [0m[1m[0mpath[0m[0m                = (known after apply)
          [32m+[0m [0m[1m[0mport[0m[0m                = "traffic-port"
          [32m+[0m [0m[1m[0mprotocol[0m[0m            = "TCP"
          [32m+[0m [0m[1m[0mtimeout[0m[0m             = (known after apply)
          [32m+[0m [0m[1m[0munhealthy_threshold[0m[0m = 3
        }

      [32m+[0m [0mstickiness {
          [32m+[0m [0m[1m[0mcookie_duration[0m[0m = (known after apply)
          [32m+[0m [0m[1m[0mcookie_name[0m[0m     = (known after apply)
          [32m+[0m [0m[1m[0menabled[0m[0m         = (known after apply)
          [32m+[0m [0m[1m[0mtype[0m[0m            = (known after apply)
        }
    }

[1m  # module.network_loadbalancer.aws_security_group.sg_nlb_k8s[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_security_group" "sg_nlb_k8s" {
      [32m+[0m [0m[1m[0marn[0m[0m                    = (known after apply)
      [32m+[0m [0m[1m[0mdescription[0m[0m            = "Allow traffic from NLB to reach K8S instances"
      [32m+[0m [0m[1m[0megress[0m[0m                 = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m                     = (known after apply)
      [32m+[0m [0m[1m[0mingress[0m[0m                = (known after apply)
      [32m+[0m [0m[1m[0mname[0m[0m                   = "greg-eks-demo-nlb-worker-access"
      [32m+[0m [0m[1m[0mname_prefix[0m[0m            = (known after apply)
      [32m+[0m [0m[1m[0mowner_id[0m[0m               = (known after apply)
      [32m+[0m [0m[1m[0mrevoke_rules_on_delete[0m[0m = true
      [32m+[0m [0m[1m[0mtags_all[0m[0m               = (known after apply)
      [32m+[0m [0m[1m[0mvpc_id[0m[0m                 = (known after apply)
    }

[1m  # module.network_loadbalancer.aws_security_group_rule.allow_inbound_from_target_groups[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_security_group_rule" "allow_inbound_from_target_groups" {
      [32m+[0m [0m[1m[0mcidr_blocks[0m[0m              = [
          [32m+[0m [0m"0.0.0.0/0",
        ]
      [32m+[0m [0m[1m[0mdescription[0m[0m              = "Allow Worker nodes to accept request from LB"
      [32m+[0m [0m[1m[0mfrom_port[0m[0m                = 0
      [32m+[0m [0m[1m[0mid[0m[0m                       = (known after apply)
      [32m+[0m [0m[1m[0mprotocol[0m[0m                 = "tcp"
      [32m+[0m [0m[1m[0msecurity_group_id[0m[0m        = (known after apply)
      [32m+[0m [0m[1m[0mself[0m[0m                     = false
      [32m+[0m [0m[1m[0msource_security_group_id[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mto_port[0m[0m                  = 65535
      [32m+[0m [0m[1m[0mtype[0m[0m                     = "ingress"
    }

[1m  # module.route53.aws_route53_record.records[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_route53_record" "records" {
      [32m+[0m [0m[1m[0mallow_overwrite[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mfqdn[0m[0m            = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m              = (known after apply)
      [32m+[0m [0m[1m[0mname[0m[0m            = "greg215.********"
      [32m+[0m [0m[1m[0mrecords[0m[0m         = (known after apply)
      [32m+[0m [0m[1m[0mttl[0m[0m             = 300
      [32m+[0m [0m[1m[0mtype[0m[0m            = "CNAME"
      [32m+[0m [0m[1m[0mzone_id[0m[0m         = "Z07374591FC76OBQXEXUL"
    }

[1m  # module.subnets.data.aws_vpc.default[0m will be read during apply
  # (config refers to values not yet known)[0m[0m
[0m [36m<=[0m[0m data "aws_vpc" "default"  {
      [32m+[0m [0m[1m[0marn[0m[0m                     = (known after apply)
      [32m+[0m [0m[1m[0mcidr_block[0m[0m              = (known after apply)
      [32m+[0m [0m[1m[0mcidr_block_associations[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mdefault[0m[0m                 = (known after apply)
      [32m+[0m [0m[1m[0mdhcp_options_id[0m[0m         = (known after apply)
      [32m+[0m [0m[1m[0menable_dns_hostnames[0m[0m    = (known after apply)
      [32m+[0m [0m[1m[0menable_dns_support[0m[0m      = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m                      = (known after apply)
      [32m+[0m [0m[1m[0minstance_tenancy[0m[0m        = (known after apply)
      [32m+[0m [0m[1m[0mipv6_association_id[0m[0m     = (known after apply)
      [32m+[0m [0m[1m[0mipv6_cidr_block[0m[0m         = (known after apply)
      [32m+[0m [0m[1m[0mmain_route_table_id[0m[0m     = (known after apply)
      [32m+[0m [0m[1m[0mowner_id[0m[0m                = (known after apply)
      [32m+[0m [0m[1m[0mstate[0m[0m                   = (known after apply)
      [32m+[0m [0m[1m[0mtags[0m[0m                    = (known after apply)
    }

[1m  # module.subnets.aws_network_acl.private[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_network_acl" "private" {
      [32m+[0m [0m[1m[0marn[0m[0m        = (known after apply)
      [32m+[0m [0m[1m[0megress[0m[0m     = [
          [32m+[0m [0m{
              [32m+[0m [0maction          = "allow"
              [32m+[0m [0mcidr_block      = "0.0.0.0/0"
              [32m+[0m [0mfrom_port       = 0
              [32m+[0m [0micmp_code       = [90mnull[0m[0m
              [32m+[0m [0micmp_type       = [90mnull[0m[0m
              [32m+[0m [0mipv6_cidr_block = ""
              [32m+[0m [0mprotocol        = "-1"
              [32m+[0m [0mrule_no         = 100
              [32m+[0m [0mto_port         = 0
            },
        ]
      [32m+[0m [0m[1m[0mid[0m[0m         = (known after apply)
      [32m+[0m [0m[1m[0mingress[0m[0m    = [
          [32m+[0m [0m{
              [32m+[0m [0maction          = "allow"
              [32m+[0m [0mcidr_block      = "0.0.0.0/0"
              [32m+[0m [0mfrom_port       = 0
              [32m+[0m [0micmp_code       = [90mnull[0m[0m
              [32m+[0m [0micmp_type       = [90mnull[0m[0m
              [32m+[0m [0mipv6_cidr_block = ""
              [32m+[0m [0mprotocol        = "-1"
              [32m+[0m [0mrule_no         = 100
              [32m+[0m [0mto_port         = 0
            },
        ]
      [32m+[0m [0m[1m[0mowner_id[0m[0m   = (known after apply)
      [32m+[0m [0m[1m[0msubnet_ids[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mtags[0m[0m       = {
          [32m+[0m [0m"Name"       = "eks-subnet-private-acl"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m   = {
          [32m+[0m [0m"Name"       = "eks-subnet-private-acl"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mvpc_id[0m[0m     = (known after apply)
    }

[1m  # module.subnets.aws_network_acl.public[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_network_acl" "public" {
      [32m+[0m [0m[1m[0marn[0m[0m        = (known after apply)
      [32m+[0m [0m[1m[0megress[0m[0m     = [
          [32m+[0m [0m{
              [32m+[0m [0maction          = "allow"
              [32m+[0m [0mcidr_block      = "0.0.0.0/0"
              [32m+[0m [0mfrom_port       = 0
              [32m+[0m [0micmp_code       = [90mnull[0m[0m
              [32m+[0m [0micmp_type       = [90mnull[0m[0m
              [32m+[0m [0mipv6_cidr_block = ""
              [32m+[0m [0mprotocol        = "-1"
              [32m+[0m [0mrule_no         = 100
              [32m+[0m [0mto_port         = 0
            },
        ]
      [32m+[0m [0m[1m[0mid[0m[0m         = (known after apply)
      [32m+[0m [0m[1m[0mingress[0m[0m    = [
          [32m+[0m [0m{
              [32m+[0m [0maction          = "allow"
              [32m+[0m [0mcidr_block      = "0.0.0.0/0"
              [32m+[0m [0mfrom_port       = 0
              [32m+[0m [0micmp_code       = [90mnull[0m[0m
              [32m+[0m [0micmp_type       = [90mnull[0m[0m
              [32m+[0m [0mipv6_cidr_block = ""
              [32m+[0m [0mprotocol        = "-1"
              [32m+[0m [0mrule_no         = 100
              [32m+[0m [0mto_port         = 0
            },
        ]
      [32m+[0m [0m[1m[0mowner_id[0m[0m   = (known after apply)
      [32m+[0m [0m[1m[0msubnet_ids[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mtags[0m[0m       = {
          [32m+[0m [0m"Name"       = "eks-subnet-public-acl"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m   = {
          [32m+[0m [0m"Name"       = "eks-subnet-public-acl"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mvpc_id[0m[0m     = (known after apply)
    }

[1m  # module.subnets.aws_route.public[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_route" "public" {
      [32m+[0m [0m[1m[0mdestination_cidr_block[0m[0m = "0.0.0.0/0"
      [32m+[0m [0m[1m[0mgateway_id[0m[0m             = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m                     = (known after apply)
      [32m+[0m [0m[1m[0minstance_id[0m[0m            = (known after apply)
      [32m+[0m [0m[1m[0minstance_owner_id[0m[0m      = (known after apply)
      [32m+[0m [0m[1m[0mnetwork_interface_id[0m[0m   = (known after apply)
      [32m+[0m [0m[1m[0morigin[0m[0m                 = (known after apply)
      [32m+[0m [0m[1m[0mroute_table_id[0m[0m         = (known after apply)
      [32m+[0m [0m[1m[0mstate[0m[0m                  = (known after apply)
    }

[1m  # module.subnets.aws_route_table.private[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_route_table" "private" {
      [32m+[0m [0m[1m[0marn[0m[0m              = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m               = (known after apply)
      [32m+[0m [0m[1m[0mowner_id[0m[0m         = (known after apply)
      [32m+[0m [0m[1m[0mpropagating_vgws[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mroute[0m[0m            = (known after apply)
      [32m+[0m [0m[1m[0mtags[0m[0m             = {
          [32m+[0m [0m"Name"                                = "eks-subnet-private-route-table"
          [32m+[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [32m+[0m [0m"managed_by"                          = "terraform"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m         = {
          [32m+[0m [0m"Name"                                = "eks-subnet-private-route-table"
          [32m+[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [32m+[0m [0m"managed_by"                          = "terraform"
        }
      [32m+[0m [0m[1m[0mvpc_id[0m[0m           = (known after apply)
    }

[1m  # module.subnets.aws_route_table.private[1][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_route_table" "private" {
      [32m+[0m [0m[1m[0marn[0m[0m              = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m               = (known after apply)
      [32m+[0m [0m[1m[0mowner_id[0m[0m         = (known after apply)
      [32m+[0m [0m[1m[0mpropagating_vgws[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mroute[0m[0m            = (known after apply)
      [32m+[0m [0m[1m[0mtags[0m[0m             = {
          [32m+[0m [0m"Name"                                = "eks-subnet-private-route-table"
          [32m+[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [32m+[0m [0m"managed_by"                          = "terraform"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m         = {
          [32m+[0m [0m"Name"                                = "eks-subnet-private-route-table"
          [32m+[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [32m+[0m [0m"managed_by"                          = "terraform"
        }
      [32m+[0m [0m[1m[0mvpc_id[0m[0m           = (known after apply)
    }

[1m  # module.subnets.aws_route_table.private[2][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_route_table" "private" {
      [32m+[0m [0m[1m[0marn[0m[0m              = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m               = (known after apply)
      [32m+[0m [0m[1m[0mowner_id[0m[0m         = (known after apply)
      [32m+[0m [0m[1m[0mpropagating_vgws[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mroute[0m[0m            = (known after apply)
      [32m+[0m [0m[1m[0mtags[0m[0m             = {
          [32m+[0m [0m"Name"                                = "eks-subnet-private-route-table"
          [32m+[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [32m+[0m [0m"managed_by"                          = "terraform"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m         = {
          [32m+[0m [0m"Name"                                = "eks-subnet-private-route-table"
          [32m+[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [32m+[0m [0m"managed_by"                          = "terraform"
        }
      [32m+[0m [0m[1m[0mvpc_id[0m[0m           = (known after apply)
    }

[1m  # module.subnets.aws_route_table.public[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_route_table" "public" {
      [32m+[0m [0m[1m[0marn[0m[0m              = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m               = (known after apply)
      [32m+[0m [0m[1m[0mowner_id[0m[0m         = (known after apply)
      [32m+[0m [0m[1m[0mpropagating_vgws[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mroute[0m[0m            = (known after apply)
      [32m+[0m [0m[1m[0mtags[0m[0m             = {
          [32m+[0m [0m"Name"       = "eks-subnet-public-route-table"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m         = {
          [32m+[0m [0m"Name"       = "eks-subnet-public-route-table"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mvpc_id[0m[0m           = (known after apply)
    }

[1m  # module.subnets.aws_route_table_association.private[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_route_table_association" "private" {
      [32m+[0m [0m[1m[0mid[0m[0m             = (known after apply)
      [32m+[0m [0m[1m[0mroute_table_id[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0msubnet_id[0m[0m      = (known after apply)
    }

[1m  # module.subnets.aws_route_table_association.private[1][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_route_table_association" "private" {
      [32m+[0m [0m[1m[0mid[0m[0m             = (known after apply)
      [32m+[0m [0m[1m[0mroute_table_id[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0msubnet_id[0m[0m      = (known after apply)
    }

[1m  # module.subnets.aws_route_table_association.private[2][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_route_table_association" "private" {
      [32m+[0m [0m[1m[0mid[0m[0m             = (known after apply)
      [32m+[0m [0m[1m[0mroute_table_id[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0msubnet_id[0m[0m      = (known after apply)
    }

[1m  # module.subnets.aws_route_table_association.public[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_route_table_association" "public" {
      [32m+[0m [0m[1m[0mid[0m[0m             = (known after apply)
      [32m+[0m [0m[1m[0mroute_table_id[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0msubnet_id[0m[0m      = (known after apply)
    }

[1m  # module.subnets.aws_route_table_association.public[1][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_route_table_association" "public" {
      [32m+[0m [0m[1m[0mid[0m[0m             = (known after apply)
      [32m+[0m [0m[1m[0mroute_table_id[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0msubnet_id[0m[0m      = (known after apply)
    }

[1m  # module.subnets.aws_route_table_association.public[2][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_route_table_association" "public" {
      [32m+[0m [0m[1m[0mid[0m[0m             = (known after apply)
      [32m+[0m [0m[1m[0mroute_table_id[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0msubnet_id[0m[0m      = (known after apply)
    }

[1m  # module.subnets.aws_subnet.private[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_subnet" "private" {
      [32m+[0m [0m[1m[0marn[0m[0m                             = (known after apply)
      [32m+[0m [0m[1m[0massign_ipv6_address_on_creation[0m[0m = false
      [32m+[0m [0m[1m[0mavailability_zone[0m[0m               = "ap-southeast-1a"
      [32m+[0m [0m[1m[0mavailability_zone_id[0m[0m            = (known after apply)
      [32m+[0m [0m[1m[0mcidr_block[0m[0m                      = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m                              = (known after apply)
      [32m+[0m [0m[1m[0mipv6_cidr_block_association_id[0m[0m  = (known after apply)
      [32m+[0m [0m[1m[0mmap_public_ip_on_launch[0m[0m         = false
      [32m+[0m [0m[1m[0mowner_id[0m[0m                        = (known after apply)
      [32m+[0m [0m[1m[0mtags[0m[0m                            = {
          [32m+[0m [0m"Name"       = "eks-subnet-private"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m                        = {
          [32m+[0m [0m"Name"       = "eks-subnet-private"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mvpc_id[0m[0m                          = (known after apply)
    }

[1m  # module.subnets.aws_subnet.private[1][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_subnet" "private" {
      [32m+[0m [0m[1m[0marn[0m[0m                             = (known after apply)
      [32m+[0m [0m[1m[0massign_ipv6_address_on_creation[0m[0m = false
      [32m+[0m [0m[1m[0mavailability_zone[0m[0m               = "ap-southeast-1b"
      [32m+[0m [0m[1m[0mavailability_zone_id[0m[0m            = (known after apply)
      [32m+[0m [0m[1m[0mcidr_block[0m[0m                      = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m                              = (known after apply)
      [32m+[0m [0m[1m[0mipv6_cidr_block_association_id[0m[0m  = (known after apply)
      [32m+[0m [0m[1m[0mmap_public_ip_on_launch[0m[0m         = false
      [32m+[0m [0m[1m[0mowner_id[0m[0m                        = (known after apply)
      [32m+[0m [0m[1m[0mtags[0m[0m                            = {
          [32m+[0m [0m"Name"       = "eks-subnet-private"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m                        = {
          [32m+[0m [0m"Name"       = "eks-subnet-private"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mvpc_id[0m[0m                          = (known after apply)
    }

[1m  # module.subnets.aws_subnet.private[2][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_subnet" "private" {
      [32m+[0m [0m[1m[0marn[0m[0m                             = (known after apply)
      [32m+[0m [0m[1m[0massign_ipv6_address_on_creation[0m[0m = false
      [32m+[0m [0m[1m[0mavailability_zone[0m[0m               = "ap-southeast-1c"
      [32m+[0m [0m[1m[0mavailability_zone_id[0m[0m            = (known after apply)
      [32m+[0m [0m[1m[0mcidr_block[0m[0m                      = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m                              = (known after apply)
      [32m+[0m [0m[1m[0mipv6_cidr_block_association_id[0m[0m  = (known after apply)
      [32m+[0m [0m[1m[0mmap_public_ip_on_launch[0m[0m         = false
      [32m+[0m [0m[1m[0mowner_id[0m[0m                        = (known after apply)
      [32m+[0m [0m[1m[0mtags[0m[0m                            = {
          [32m+[0m [0m"Name"       = "eks-subnet-private"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m                        = {
          [32m+[0m [0m"Name"       = "eks-subnet-private"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mvpc_id[0m[0m                          = (known after apply)
    }

[1m  # module.subnets.aws_subnet.public[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_subnet" "public" {
      [32m+[0m [0m[1m[0marn[0m[0m                             = (known after apply)
      [32m+[0m [0m[1m[0massign_ipv6_address_on_creation[0m[0m = false
      [32m+[0m [0m[1m[0mavailability_zone[0m[0m               = "ap-southeast-1a"
      [32m+[0m [0m[1m[0mavailability_zone_id[0m[0m            = (known after apply)
      [32m+[0m [0m[1m[0mcidr_block[0m[0m                      = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m                              = (known after apply)
      [32m+[0m [0m[1m[0mipv6_cidr_block_association_id[0m[0m  = (known after apply)
      [32m+[0m [0m[1m[0mmap_public_ip_on_launch[0m[0m         = true
      [32m+[0m [0m[1m[0mowner_id[0m[0m                        = (known after apply)
      [32m+[0m [0m[1m[0mtags[0m[0m                            = {
          [32m+[0m [0m"Name"                                = "eks-subnet-public"
          [32m+[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [32m+[0m [0m"managed_by"                          = "terraform"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m                        = {
          [32m+[0m [0m"Name"                                = "eks-subnet-public"
          [32m+[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [32m+[0m [0m"managed_by"                          = "terraform"
        }
      [32m+[0m [0m[1m[0mvpc_id[0m[0m                          = (known after apply)
    }

[1m  # module.subnets.aws_subnet.public[1][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_subnet" "public" {
      [32m+[0m [0m[1m[0marn[0m[0m                             = (known after apply)
      [32m+[0m [0m[1m[0massign_ipv6_address_on_creation[0m[0m = false
      [32m+[0m [0m[1m[0mavailability_zone[0m[0m               = "ap-southeast-1b"
      [32m+[0m [0m[1m[0mavailability_zone_id[0m[0m            = (known after apply)
      [32m+[0m [0m[1m[0mcidr_block[0m[0m                      = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m                              = (known after apply)
      [32m+[0m [0m[1m[0mipv6_cidr_block_association_id[0m[0m  = (known after apply)
      [32m+[0m [0m[1m[0mmap_public_ip_on_launch[0m[0m         = true
      [32m+[0m [0m[1m[0mowner_id[0m[0m                        = (known after apply)
      [32m+[0m [0m[1m[0mtags[0m[0m                            = {
          [32m+[0m [0m"Name"                                = "eks-subnet-public"
          [32m+[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [32m+[0m [0m"managed_by"                          = "terraform"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m                        = {
          [32m+[0m [0m"Name"                                = "eks-subnet-public"
          [32m+[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [32m+[0m [0m"managed_by"                          = "terraform"
        }
      [32m+[0m [0m[1m[0mvpc_id[0m[0m                          = (known after apply)
    }

[1m  # module.subnets.aws_subnet.public[2][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_subnet" "public" {
      [32m+[0m [0m[1m[0marn[0m[0m                             = (known after apply)
      [32m+[0m [0m[1m[0massign_ipv6_address_on_creation[0m[0m = false
      [32m+[0m [0m[1m[0mavailability_zone[0m[0m               = "ap-southeast-1c"
      [32m+[0m [0m[1m[0mavailability_zone_id[0m[0m            = (known after apply)
      [32m+[0m [0m[1m[0mcidr_block[0m[0m                      = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m                              = (known after apply)
      [32m+[0m [0m[1m[0mipv6_cidr_block_association_id[0m[0m  = (known after apply)
      [32m+[0m [0m[1m[0mmap_public_ip_on_launch[0m[0m         = true
      [32m+[0m [0m[1m[0mowner_id[0m[0m                        = (known after apply)
      [32m+[0m [0m[1m[0mtags[0m[0m                            = {
          [32m+[0m [0m"Name"                                = "eks-subnet-public"
          [32m+[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [32m+[0m [0m"managed_by"                          = "terraform"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m                        = {
          [32m+[0m [0m"Name"                                = "eks-subnet-public"
          [32m+[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [32m+[0m [0m"managed_by"                          = "terraform"
        }
      [32m+[0m [0m[1m[0mvpc_id[0m[0m                          = (known after apply)
    }

[1m  # module.vpc.aws_default_security_group.vpc-sg[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_default_security_group" "vpc-sg" {
      [32m+[0m [0m[1m[0marn[0m[0m                    = (known after apply)
      [32m+[0m [0m[1m[0mdescription[0m[0m            = (known after apply)
      [32m+[0m [0m[1m[0megress[0m[0m                 = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m                     = (known after apply)
      [32m+[0m [0m[1m[0mingress[0m[0m                = (known after apply)
      [32m+[0m [0m[1m[0mname[0m[0m                   = (known after apply)
      [32m+[0m [0m[1m[0mowner_id[0m[0m               = (known after apply)
      [32m+[0m [0m[1m[0mrevoke_rules_on_delete[0m[0m = false
      [32m+[0m [0m[1m[0mtags[0m[0m                   = {
          [32m+[0m [0m"Name" = "default-sg-greg-eks-demo"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m               = {
          [32m+[0m [0m"Name" = "default-sg-greg-eks-demo"
        }
      [32m+[0m [0m[1m[0mvpc_id[0m[0m                 = (known after apply)
    }

[1m  # module.vpc.aws_internet_gateway.vpc-gateway[0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_internet_gateway" "vpc-gateway" {
      [32m+[0m [0m[1m[0marn[0m[0m      = (known after apply)
      [32m+[0m [0m[1m[0mid[0m[0m       = (known after apply)
      [32m+[0m [0m[1m[0mowner_id[0m[0m = (known after apply)
      [32m+[0m [0m[1m[0mtags[0m[0m     = {
          [32m+[0m [0m"Name"       = "gateway-greg-eks-demo"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m = {
          [32m+[0m [0m"Name"       = "gateway-greg-eks-demo"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mvpc_id[0m[0m   = (known after apply)
    }

[1m  # module.vpc.aws_vpc.vpc[0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_vpc" "vpc" {
      [32m+[0m [0m[1m[0marn[0m[0m                              = (known after apply)
      [32m+[0m [0m[1m[0massign_generated_ipv6_cidr_block[0m[0m = true
      [32m+[0m [0m[1m[0mcidr_block[0m[0m                       = "172.31.208.0/22"
      [32m+[0m [0m[1m[0mdefault_network_acl_id[0m[0m           = (known after apply)
      [32m+[0m [0m[1m[0mdefault_route_table_id[0m[0m           = (known after apply)
      [32m+[0m [0m[1m[0mdefault_security_group_id[0m[0m        = (known after apply)
      [32m+[0m [0m[1m[0mdhcp_options_id[0m[0m                  = (known after apply)
      [32m+[0m [0m[1m[0menable_classiclink[0m[0m               = false
      [32m+[0m [0m[1m[0menable_classiclink_dns_support[0m[0m   = false
      [32m+[0m [0m[1m[0menable_dns_hostnames[0m[0m             = true
      [32m+[0m [0m[1m[0menable_dns_support[0m[0m               = true
      [32m+[0m [0m[1m[0mid[0m[0m                               = (known after apply)
      [32m+[0m [0m[1m[0minstance_tenancy[0m[0m                 = "default"
      [32m+[0m [0m[1m[0mipv6_association_id[0m[0m              = (known after apply)
      [32m+[0m [0m[1m[0mipv6_cidr_block[0m[0m                  = (known after apply)
      [32m+[0m [0m[1m[0mmain_route_table_id[0m[0m              = (known after apply)
      [32m+[0m [0m[1m[0mowner_id[0m[0m                         = (known after apply)
      [32m+[0m [0m[1m[0mtags[0m[0m                             = {
          [32m+[0m [0m"Name"       = "vpc-greg-eks-demo"
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m                         = {
          [32m+[0m [0m"Name"       = "vpc-greg-eks-demo"
          [32m+[0m [0m"managed_by" = "terraform"
        }
    }

[1m  # module.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_autoscaling_group" "default" {
      [32m+[0m [0m[1m[0marn[0m[0m                       = (known after apply)
      [32m+[0m [0m[1m[0mavailability_zones[0m[0m        = (known after apply)
      [32m+[0m [0m[1m[0mdefault_cooldown[0m[0m          = 300
      [32m+[0m [0m[1m[0mdesired_capacity[0m[0m          = (known after apply)
      [32m+[0m [0m[1m[0menabled_metrics[0m[0m           = [
          [32m+[0m [0m"GroupDesiredCapacity",
          [32m+[0m [0m"GroupInServiceInstances",
          [32m+[0m [0m"GroupMaxSize",
          [32m+[0m [0m"GroupMinSize",
          [32m+[0m [0m"GroupPendingInstances",
          [32m+[0m [0m"GroupStandbyInstances",
          [32m+[0m [0m"GroupTerminatingInstances",
          [32m+[0m [0m"GroupTotalInstances",
        ]
      [32m+[0m [0m[1m[0mforce_delete[0m[0m              = false
      [32m+[0m [0m[1m[0mforce_delete_warm_pool[0m[0m    = false
      [32m+[0m [0m[1m[0mhealth_check_grace_period[0m[0m = 300
      [32m+[0m [0m[1m[0mhealth_check_type[0m[0m         = "EC2"
      [32m+[0m [0m[1m[0mid[0m[0m                        = (known after apply)
      [32m+[0m [0m[1m[0mmax_size[0m[0m                  = 5
      [32m+[0m [0m[1m[0mmetrics_granularity[0m[0m       = "1Minute"
      [32m+[0m [0m[1m[0mmin_elb_capacity[0m[0m          = 0
      [32m+[0m [0m[1m[0mmin_size[0m[0m                  = 2
      [32m+[0m [0m[1m[0mname[0m[0m                      = (known after apply)
      [32m+[0m [0m[1m[0mname_prefix[0m[0m               = (known after apply)
      [32m+[0m [0m[1m[0mprotect_from_scale_in[0m[0m     = false
      [32m+[0m [0m[1m[0mservice_linked_role_arn[0m[0m   = (known after apply)
      [32m+[0m [0m[1m[0mtarget_group_arns[0m[0m         = (known after apply)
      [32m+[0m [0m[1m[0mtermination_policies[0m[0m      = [
          [32m+[0m [0m"Default",
        ]
      [32m+[0m [0m[1m[0mvpc_zone_identifier[0m[0m       = (known after apply)
      [32m+[0m [0m[1m[0mwait_for_capacity_timeout[0m[0m = "10m"
      [32m+[0m [0m[1m[0mwait_for_elb_capacity[0m[0m     = 0

      [32m+[0m [0mlaunch_template {
          [32m+[0m [0m[1m[0mid[0m[0m      = (known after apply)
          [32m+[0m [0m[1m[0mname[0m[0m    = (known after apply)
          [32m+[0m [0m[1m[0mversion[0m[0m = "$Latest"
        }

      [32m+[0m [0mtag {
          [32m+[0m [0m[1m[0mkey[0m[0m                 = "Name"
          [32m+[0m [0m[1m[0mpropagate_at_launch[0m[0m = true
          [32m+[0m [0m[1m[0mvalue[0m[0m               = (known after apply)
        }
      [32m+[0m [0mtag {
          [32m+[0m [0m[1m[0mkey[0m[0m                 = "Snapshot"
          [32m+[0m [0m[1m[0mpropagate_at_launch[0m[0m = true
          [32m+[0m [0m[1m[0mvalue[0m[0m               = "true"
        }
      [32m+[0m [0mtag {
          [32m+[0m [0m[1m[0mkey[0m[0m                 = "managed_by"
          [32m+[0m [0m[1m[0mpropagate_at_launch[0m[0m = true
          [32m+[0m [0m[1m[0mvalue[0m[0m               = "terraform"
        }
      [32m+[0m [0mtag {
          [32m+[0m [0m[1m[0mkey[0m[0m                 = (known after apply)
          [32m+[0m [0m[1m[0mpropagate_at_launch[0m[0m = true
          [32m+[0m [0m[1m[0mvalue[0m[0m               = "owned"
        }
    }

[1m  # module.eks_workers.module.autoscale_group.aws_launch_template.default[0][0m will be created[0m[0m
[0m  [32m+[0m[0m resource "aws_launch_template" "default" {
      [32m+[0m [0m[1m[0marn[0m[0m                                  = (known after apply)
      [32m+[0m [0m[1m[0mdefault_version[0m[0m                      = (known after apply)
      [32m+[0m [0m[1m[0mdisable_api_termination[0m[0m              = false
      [32m+[0m [0m[1m[0mebs_optimized[0m[0m                        = "false"
      [32m+[0m [0m[1m[0mid[0m[0m                                   = (known after apply)
      [32m+[0m [0m[1m[0mimage_id[0m[0m                             = "ami-0afeae4543435bb1b"
      [32m+[0m [0m[1m[0minstance_initiated_shutdown_behavior[0m[0m = "terminate"
      [32m+[0m [0m[1m[0minstance_type[0m[0m                        = "t2.small"
      [32m+[0m [0m[1m[0mkey_name[0m[0m                             = "devops-training"
      [32m+[0m [0m[1m[0mlatest_version[0m[0m                       = (known after apply)
      [32m+[0m [0m[1m[0mname[0m[0m                                 = (known after apply)
      [32m+[0m [0m[1m[0mname_prefix[0m[0m                          = (known after apply)
      [32m+[0m [0m[1m[0mtags[0m[0m                                 = {
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0mtags_all[0m[0m                             = {
          [32m+[0m [0m"managed_by" = "terraform"
        }
      [32m+[0m [0m[1m[0muser_data[0m[0m                            = (known after apply)

      [32m+[0m [0miam_instance_profile {
          [32m+[0m [0m[1m[0mname[0m[0m = (known after apply)
        }

      [32m+[0m [0mmetadata_options {
          [32m+[0m [0m[1m[0mhttp_endpoint[0m[0m               = (known after apply)
          [32m+[0m [0m[1m[0mhttp_put_response_hop_limit[0m[0m = (known after apply)
          [32m+[0m [0m[1m[0mhttp_tokens[0m[0m                 = (known after apply)
        }

      [32m+[0m [0mmonitoring {
          [32m+[0m [0m[1m[0menabled[0m[0m = true
        }

      [32m+[0m [0mnetwork_interfaces {
          [32m+[0m [0m[1m[0massociate_public_ip_address[0m[0m = "true"
          [32m+[0m [0m[1m[0mdelete_on_termination[0m[0m       = "true"
          [32m+[0m [0m[1m[0mdescription[0m[0m                 = "The network interfaces for the asg"
          [32m+[0m [0m[1m[0mdevice_index[0m[0m                = 0
          [32m+[0m [0m[1m[0msecurity_groups[0m[0m             = (known after apply)
        }

      [32m+[0m [0mtag_specifications {
          [32m+[0m [0m[1m[0mresource_type[0m[0m = "volume"
          [32m+[0m [0m[1m[0mtags[0m[0m          = (known after apply)
        }
    }

[0m[1mPlan:[0m 47 to add, 0 to change, 0 to destroy.[0m

------------------------------------------------------------------------

This plan was saved to: tfplan

To perform exactly these actions, run the following command to apply:
    terraform apply "tfplan"

[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Terraform Apply)
[Pipeline] sh
+ terraform apply '-input=false' tfplan
[0m[1mmodule.eks_cluster.aws_iam_role.default[0]: Creating...[0m[0m
[0m[1mmodule.vpc.aws_vpc.vpc: Creating...[0m[0m
[0m[1mmodule.eks_cluster.aws_iam_role.default[0]: Creation complete after 4s [id=iam-role-cluster-greg-eks-demo][0m[0m
[0m[1mmodule.eks_cluster.aws_iam_role_policy_attachment.amazon_eks_service_policy[0]: Creating...[0m[0m
[0m[1mmodule.eks_cluster.aws_iam_role_policy_attachment.amazon_eks_cluster_policy[0]: Creating...[0m[0m
[0m[1mmodule.eks_cluster.aws_iam_role_policy_attachment.amazon_eks_cluster_policy[0]: Creation complete after 2s [id=iam-role-cluster-greg-eks-demo-20210720114618366500000001][0m[0m
[0m[1mmodule.eks_cluster.aws_iam_role_policy_attachment.amazon_eks_service_policy[0]: Creation complete after 2s [id=iam-role-cluster-greg-eks-demo-20210720114618367200000002][0m[0m
[0m[1mmodule.vpc.aws_vpc.vpc: Still creating... [10s elapsed][0m[0m
[0m[1mmodule.vpc.aws_vpc.vpc: Creation complete after 11s [id=vpc-043e27750348e6da7][0m[0m
[0m[1mmodule.eks_cluster.aws_security_group.default[0]: Creating...[0m[0m
[0m[1mmodule.subnets.data.aws_vpc.default: Refreshing state...[0m
[0m[1mmodule.network_loadbalancer.aws_security_group.sg_nlb_k8s[0]: Creating...[0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb_target_group.target_groups[0]: Creating...[0m[0m
[0m[1mmodule.vpc.aws_default_security_group.vpc-sg[0]: Creating...[0m[0m
[0m[1mmodule.vpc.aws_internet_gateway.vpc-gateway: Creating...[0m[0m
[0m[1mmodule.subnets.aws_route_table.private[0]: Creating...[0m[0m
[0m[1mmodule.subnets.aws_route_table.private[1]: Creating...[0m[0m
[0m[1mmodule.subnets.aws_route_table.private[2]: Creating...[0m[0m
[0m[1mmodule.subnets.aws_route_table.public[0]: Creating...[0m[0m
[0m[1mmodule.subnets.aws_subnet.private[2]: Creating...[0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb_target_group.target_groups[0]: Creation complete after 1s [id=arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:targetgroup/tg-greg-eks-demo-to-30080/3bd4268aabf6caea][0m[0m
[0m[1mmodule.subnets.aws_subnet.private[0]: Creating...[0m[0m
[0m[1mmodule.vpc.aws_internet_gateway.vpc-gateway: Creation complete after 1s [id=igw-03318eb30bf4708dd][0m[0m
[0m[1mmodule.subnets.aws_subnet.public[0]: Creating...[0m[0m
[0m[1mmodule.subnets.aws_route_table.public[0]: Creation complete after 0s [id=rtb-0c5db97be3f9d04ae][0m[0m
[0m[1mmodule.subnets.aws_subnet.public[2]: Creating...[0m[0m
[0m[1mmodule.subnets.aws_route_table.private[1]: Creation complete after 0s [id=rtb-004f00b3e24bf43b5][0m[0m
[0m[1mmodule.subnets.aws_subnet.private[1]: Creating...[0m[0m
[0m[1mmodule.subnets.aws_route_table.private[0]: Creation complete after 0s [id=rtb-0cefbc57ecd518789][0m[0m
[0m[1mmodule.subnets.aws_subnet.public[1]: Creating...[0m[0m
[0m[1mmodule.subnets.aws_route_table.private[2]: Creation complete after 0s [id=rtb-0f64f4969a80876a9][0m[0m
[0m[1mmodule.subnets.aws_route.public[0]: Creating...[0m[0m
[0m[1mmodule.eks_cluster.aws_security_group.default[0]: Creation complete after 1s [id=sg-0a10d804513d451a9][0m[0m
[0m[1mmodule.eks_cluster.aws_security_group_rule.egress[0]: Creating...[0m[0m
[0m[1mmodule.subnets.aws_subnet.private[2]: Creation complete after 0s [id=subnet-0e639477a57b40d98][0m[0m
[0m[1mmodule.network_loadbalancer.aws_security_group.sg_nlb_k8s[0]: Creation complete after 1s [id=sg-0ef9371f1f9fbf028][0m[0m
[0m[1mmodule.network_loadbalancer.aws_security_group_rule.allow_inbound_from_target_groups[0]: Creating...[0m[0m
[0m[1mmodule.vpc.aws_default_security_group.vpc-sg[0]: Creation complete after 1s [id=sg-0a1702ac8c7354351][0m[0m
[0m[1mmodule.subnets.aws_subnet.private[0]: Creation complete after 0s [id=subnet-071b21a74db01d588][0m[0m
[0m[1mmodule.eks_cluster.aws_security_group_rule.egress[0]: Creation complete after 0s [id=sgrule-3407717028][0m[0m
[0m[1mmodule.subnets.aws_route.public[0]: Creation complete after 0s [id=r-rtb-0c5db97be3f9d04ae1080289494][0m[0m
[0m[1mmodule.network_loadbalancer.aws_security_group_rule.allow_inbound_from_target_groups[0]: Creation complete after 0s [id=sgrule-1232144127][0m[0m
[0m[1mmodule.subnets.aws_subnet.private[1]: Creation complete after 0s [id=subnet-00d6b63cb4ee5ba80][0m[0m
[0m[1mmodule.subnets.aws_route_table_association.private[2]: Creating...[0m[0m
[0m[1mmodule.subnets.aws_route_table_association.private[0]: Creating...[0m[0m
[0m[1mmodule.subnets.aws_network_acl.private[0]: Creating...[0m[0m
[0m[1mmodule.subnets.aws_route_table_association.private[1]: Creating...[0m[0m
[0m[1mmodule.subnets.aws_route_table_association.private[2]: Creation complete after 1s [id=rtbassoc-00775b61d85618183][0m[0m
[0m[1mmodule.subnets.aws_route_table_association.private[0]: Creation complete after 1s [id=rtbassoc-092eef9d80ede0e84][0m[0m
[0m[1mmodule.subnets.aws_route_table_association.private[1]: Creation complete after 1s [id=rtbassoc-015a500508529db99][0m[0m
[0m[1mmodule.subnets.aws_network_acl.private[0]: Creation complete after 1s [id=acl-095a462a02129e12d][0m[0m
[0m[1mmodule.subnets.aws_subnet.public[0]: Still creating... [10s elapsed][0m[0m
[0m[1mmodule.subnets.aws_subnet.public[2]: Still creating... [10s elapsed][0m[0m
[0m[1mmodule.subnets.aws_subnet.public[1]: Still creating... [10s elapsed][0m[0m
[0m[1mmodule.subnets.aws_subnet.public[0]: Creation complete after 10s [id=subnet-06695fa20b2920179][0m[0m
[0m[1mmodule.subnets.aws_subnet.public[2]: Creation complete after 10s [id=subnet-0966ccddaff2e6775][0m[0m
[0m[1mmodule.subnets.aws_subnet.public[1]: Creation complete after 10s [id=subnet-0799f9cb4a446e7b2][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Creating...[0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Creating...[0m[0m
[0m[1mmodule.subnets.aws_route_table_association.public[2]: Creating...[0m[0m
[0m[1mmodule.subnets.aws_route_table_association.public[1]: Creating...[0m[0m
[0m[1mmodule.subnets.aws_network_acl.public[0]: Creating...[0m[0m
[0m[1mmodule.subnets.aws_route_table_association.public[0]: Creating...[0m[0m
[0m[1mmodule.subnets.aws_route_table_association.public[1]: Creation complete after 1s [id=rtbassoc-0b7c7de72b983d261][0m[0m
[0m[1mmodule.subnets.aws_route_table_association.public[2]: Creation complete after 1s [id=rtbassoc-0ecb0c7e2d82f590b][0m[0m
[0m[1mmodule.subnets.aws_route_table_association.public[0]: Creation complete after 1s [id=rtbassoc-0eba66594933b9ea4][0m[0m
[0m[1mmodule.subnets.aws_network_acl.public[0]: Creation complete after 2s [id=acl-0d0f099e1a69792f9][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [10s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still creating... [10s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [20s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still creating... [20s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [30s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still creating... [30s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [40s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still creating... [40s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [50s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still creating... [50s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [1m0s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still creating... [1m0s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [1m10s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still creating... [1m10s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [1m20s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still creating... [1m20s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [1m30s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still creating... [1m30s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [1m40s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still creating... [1m40s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [1m50s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still creating... [1m50s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [2m0s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still creating... [2m0s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [2m10s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still creating... [2m10s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [2m20s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still creating... [2m20s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [2m30s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still creating... [2m30s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [2m40s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still creating... [2m40s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Creation complete after 2m41s [id=arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:loadbalancer/net/nlb-greg-eks-demo/2a29f4e88d8aea42][0m[0m
[0m[1mmodule.route53.aws_route53_record.records[0]: Creating...[0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb_listener.nlb_listeners[0]: Creating...[0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb_listener.nlb_listeners[0]: Creation complete after 1s [id=arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:listener/net/nlb-greg-eks-demo/2a29f4e88d8aea42/cbf964886114a77a][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [2m50s elapsed][0m[0m
[0m[1mmodule.route53.aws_route53_record.records[0]: Still creating... [10s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [3m0s elapsed][0m[0m
[0m[1mmodule.route53.aws_route53_record.records[0]: Still creating... [20s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [3m10s elapsed][0m[0m
[0m[1mmodule.route53.aws_route53_record.records[0]: Still creating... [30s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [3m20s elapsed][0m[0m
[0m[1mmodule.route53.aws_route53_record.records[0]: Creation complete after 39s [id=Z07374591FC76OBQXEXUL_greg215.*****_CNAME][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [3m30s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [3m40s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [3m50s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [4m0s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [4m10s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [4m20s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [4m30s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [4m40s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [4m50s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [5m0s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [5m10s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [5m20s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [5m30s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [5m40s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [5m50s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [6m0s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [6m10s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [6m20s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [6m30s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [6m40s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [6m50s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [7m0s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [7m10s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [7m20s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [7m30s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [7m40s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [7m50s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [8m0s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [8m10s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [8m20s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [8m30s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [8m40s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still creating... [8m50s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Creation complete after 8m52s [id=greg-eks-demo][0m[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Creating...[0m[0m
[0m[1mmodule.eks_workers.aws_iam_role.default[0]: Creating...[0m[0m
[0m[1mmodule.eks_cluster.data.aws_eks_cluster.eks[0]: Refreshing state...[0m
[0m[1mmodule.eks_workers.data.template_file.userdata[0]: Refreshing state...[0m
[0m[1mmodule.eks_cluster.data.aws_eks_cluster_auth.eks[0]: Refreshing state...[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Provisioning with 'local-exec'...[0m[0m
[0m[0mmodule.eks_cluster.null_resource.wait_for_cluster[0] (local-exec): Executing: ["/bin/sh" "-c" "curl --silent --fail --retry 60 --retry-delay 5 --retry-connrefused --insecure --output /dev/null $ENDPOINT/healthz"]
[0m[1mmodule.eks_workers.aws_security_group.default[0]: Creating...[0m[0m
[0m[1mmodule.eks_workers.aws_security_group.default[0]: Creation complete after 1s [id=sg-03c2cb19fa6077c68][0m[0m
[0m[1mmodule.eks_cluster.aws_security_group_rule.ingress_workers[0]: Creating...[0m[0m
[0m[1mmodule.eks_workers.aws_security_group_rule.ingress_self[0]: Creating...[0m[0m
[0m[1mmodule.eks_workers.aws_security_group_rule.egress[0]: Creating...[0m[0m
[0m[1mmodule.eks_cluster.aws_security_group_rule.ingress_workers[0]: Creation complete after 1s [id=sgrule-2068099244][0m[0m
[0m[1mmodule.eks_workers.aws_security_group_rule.ingress_self[0]: Creation complete after 1s [id=sgrule-2295658281][0m[0m
[0m[1mmodule.eks_workers.aws_security_group_rule.egress[0]: Creation complete after 1s [id=sgrule-3284730600][0m[0m
[0m[1mmodule.eks_workers.aws_iam_role.default[0]: Creation complete after 5s [id=iam-role-worker-greg-eks-demo][0m[0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_ec2_container_registry_read_only[0]: Creating...[0m[0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_eks_worker_node_policy[0]: Creating...[0m[0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_eks_cni_policy[0]: Creating...[0m[0m
[0m[1mmodule.eks_workers.aws_iam_instance_profile.default[0]: Creating...[0m[0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_eks_cni_policy[0]: Creation complete after 2s [id=iam-role-worker-greg-eks-demo-20210720115532610100000001][0m[0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_eks_worker_node_policy[0]: Creation complete after 2s [id=iam-role-worker-greg-eks-demo-20210720115532613900000002][0m[0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_ec2_container_registry_read_only[0]: Creation complete after 2s [id=iam-role-worker-greg-eks-demo-20210720115532628200000003][0m[0m
[0m[1mmodule.eks_workers.aws_iam_instance_profile.default[0]: Creation complete after 3s [id=instance-profile-greg-eks-demo][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_launch_template.default[0]: Creating...[0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_launch_template.default[0]: Creation complete after 0s [id=lt-05b9f63ae2c24d1a4][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Creating...[0m[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Still creating... [10s elapsed][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Still creating... [10s elapsed][0m[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Still creating... [20s elapsed][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Still creating... [20s elapsed][0m[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Still creating... [30s elapsed][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Still creating... [30s elapsed][0m[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Still creating... [40s elapsed][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Still creating... [40s elapsed][0m[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Still creating... [50s elapsed][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Creation complete after 45s [id=asg-worker-greg-eks-demo][0m[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Still creating... [1m0s elapsed][0m[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Still creating... [1m10s elapsed][0m[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Still creating... [1m20s elapsed][0m[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Still creating... [1m30s elapsed][0m[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Still creating... [1m40s elapsed][0m[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Still creating... [1m50s elapsed][0m[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Still creating... [2m0s elapsed][0m[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Creation complete after 2m10s [id=1147161951385146978][0m[0m
[0m[1mmodule.eks_cluster.kubernetes_config_map.aws_auth_ignore_changes[0]: Creating...[0m[0m
[0m[1mmodule.eks_cluster.kubernetes_config_map.aws_auth_ignore_changes[0]: Creation complete after 1s [id=kube-system/aws-auth][0m[0m
[0m[1m[32m
Apply complete! Resources: 47 added, 0 changed, 0 destroyed.[0m
[0m[1m[32m
Outputs:

availability_zones = [
  "ap-southeast-1a",
  "ap-southeast-1b",
  "ap-southeast-1c",
]
availability_zones_number = 3
eks-worker-autoscaling_group_arn = arn:aws:autoscaling:ap-southeast-1:545573948854:autoScalingGroup:75426e3f-ba5d-4144-872c-741eebf90b2b:autoScalingGroupName/asg-worker-greg-eks-demo
eks-worker-autoscaling_group_default_cooldown = 300
eks-worker-autoscaling_group_desired_capacity = 2
eks-worker-autoscaling_group_health_check_grace_period = 300
eks-worker-autoscaling_group_health_check_type = EC2
eks-worker-autoscaling_group_id = asg-worker-greg-eks-demo
eks-worker-autoscaling_group_max_size = 5
eks-worker-autoscaling_group_min_size = 2
eks-worker-autoscaling_group_name = asg-worker-greg-eks-demo
eks-worker-launch_template_arn = arn:aws:ec2:ap-southeast-1:545573948854:launch-template/lt-05b9f63ae2c24d1a4
eks-worker-launch_template_id = lt-05b9f63ae2c24d1a4
eks-worker-security_group_arn = arn:aws:ec2:ap-southeast-1:545573948854:security-group/sg-03c2cb19fa6077c68
eks-worker-security_group_id = sg-03c2cb19fa6077c68
eks-worker-security_group_name = greg-eks-demo-sg
eks-workers_role_arn = arn:aws:iam::545573948854:role/iam-role-worker-greg-eks-demo
eks-workers_role_name = iam-role-worker-greg-eks-demo
eks_cluster-config_map_id = kube-system/aws-auth
eks_cluster_arn = arn:aws:eks:ap-southeast-1:545573948854:cluster/greg-eks-demo
eks_cluster_certificate_authority_data = LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN5RENDQWJDZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRJeE1EY3lNREV4TlRJeE9Wb1hEVE14TURjeE9ERXhOVEl4T1Zvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBT0hSCitFSjJFelhUZSs0MmtXa2RsMFVxRStVR1BiMlkwSWdBdm5rYWZmZi8ydldSckcrVXh1ejdBQVNpUVlaZHJyc2UKczZGYm5YaXlEYnhRb2lkS1dyajlpQlMyTEtQdkdsSTNvLzlrRU1jMnQ5dUxKSFNnM1RESUcvbEhHa2RxbExZTQpaTkZRWnRVOHF5aTgxNzZCZXgyRklPelhPTGN5NU9VT2JuNDlwOTB1dlRscHRiTUw0WUwxS2tlaE1iMVFURTIyCkh4OHJDVk1iZjRqNVg3ejBnN1Q3c1B5b1BBK0xGZmZkaXVlSzJ1VGxUK3ZjVGZTOEV2akxwMDdmZWtoenlwNW8KemdOdVVSWVpHOXNmdUZmZEdiOHFqSE4zajY1NWwyYU13TFZ3ZStpbzJRL2dSZ2xqd21vR1VVSE5Rc21acTVHNwpDMXJxemhSQ0Ftd09FK2lUdTRrQ0F3RUFBYU1qTUNFd0RnWURWUjBQQVFIL0JBUURBZ0trTUE4R0ExVWRFd0VCCi93UUZNQU1CQWY4d0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dFQkFIRWo5bzkyT1RMc1ZWekNVZ2tGbTIzR2lVeVYKY0txTlQydTllT3FvMXpnOEJEM3JiMDh3dVVTU0VrUm5yN24ydVZjZ0FjRmpFWmRlcHZaMTlLWnFtZUhUdjV6KwpqeWJ5bHUzbkNCbFZsdUNsb1hnSjVlTFo4UGpwM3pnWVFKRkFKS2N3UVZ2QjZCSDF3NW1jMXZoSHNrQlJGaFJzCjFzaDB5VFdpS3M0ZFFPK0lTVUxUMTR6SE9YcUQxQ0Foalk2MElRRmYzU3FUamxkd3hmZUlRRSs5TGJQQWFtN0YKakMrV0V0emU0SUYxa1NBdlhDY2h0TUJFRURyV0RSaW5oV21kUXdtU2ZPYVJyZWJBb3R3OFVLMFkwMlpMSDllbgpFVVBNMkpXTEtNTTlLNzJhUWZoK1BIdDdvdUd4eVhibUd3azdrQ2NSVTRIcEhRVnUyRENvVUNaWm9hND0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=
eks_cluster_endpoint = https://BE4627897DF9BBB54B2D131B49351B06.yl4.ap-southeast-1.eks.amazonaws.com
eks_cluster_id = greg-eks-demo
eks_cluster_identity_oidc_issuer = https://oidc.eks.ap-southeast-1.amazonaws.com/id/BE4627897DF9BBB54B2D131B49351B06
eks_cluster_identity_oidc_issuer_arn = 
eks_cluster_managed_security_group_id = sg-08af09ac7eac3131f
eks_cluster_role_arn = arn:aws:iam::545573948854:role/iam-role-cluster-greg-eks-demo
eks_cluster_security_group_arn = arn:aws:ec2:ap-southeast-1:545573948854:security-group/sg-0a10d804513d451a9
eks_cluster_security_group_id = sg-0a10d804513d451a9
eks_cluster_security_group_name = eks-cluster-sg-greg-eks-demo
eks_cluster_version = 1.18
nat_gateway_ids = []
nat_instance_ids = []
nlb-listeners_arns = [
  "arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:listener/net/nlb-greg-eks-demo/2a29f4e88d8aea42/cbf964886114a77a",
]
nlb-security_group_k8s = sg-0ef9371f1f9fbf028
nlb-target_group_arns = [
  "arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:targetgroup/tg-greg-eks-demo-to-30080/3bd4268aabf6caea",
]
nlb_dns_name = http://nlb-greg-eks-demo-2a29f4e88d8aea42.elb.ap-southeast-1.amazonaws.com
private_route_table_ids = [
  "rtb-0cefbc57ecd518789",
  "rtb-004f00b3e24bf43b5",
  "rtb-0f64f4969a80876a9",
]
private_subnet_cidrs = [
  "172.31.208.0/25",
  "172.31.208.128/25",
  "172.31.209.0/25",
]
private_subnet_ids = [
  "subnet-071b21a74db01d588",
  "subnet-00d6b63cb4ee5ba80",
  "subnet-0e639477a57b40d98",
]
public_route_table_ids = [
  "rtb-0c5db97be3f9d04ae",
]
public_subnet_cidrs = [
  "172.31.209.128/25",
  "172.31.210.0/25",
  "172.31.210.128/25",
]
public_subnet_ids = [
  "subnet-06695fa20b2920179",
  "subnet-0799f9cb4a446e7b2",
  "subnet-0966ccddaff2e6775",
]
vpc_cidr_block = 172.31.208.0/22
vpc_default_network_acl_id = acl-0b52dc353b64c207e
vpc_default_route_table_id = rtb-0579fd36d99421b50
vpc_default_security_group_id = sg-0a1702ac8c7354351
vpc_id = vpc-043e27750348e6da7
vpc_igw_id = igw-03318eb30bf4708dd
vpc_ipv6_association_id = vpc-cidr-assoc-0e47243e1aeef3b85
vpc_ipv6_cidr_block = 2406:da18:a43:a700::/56
vpc_main_route_table_id = rtb-0579fd36d99421b50[0m
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Terraform Destroy Plan)
[Pipeline] echo
Skip Destroy due to not match.
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Terraform Destroy Confirm)
[Pipeline] echo
Skip Destroy due to not match.
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Notify Terraform infra completed)
[Pipeline] slackSend
Slack Send Pipeline step running, values are - baseUrl: <empty>, teamDomain: ****, channel: #jenkins-notify, color: good, botUser: false, tokenCredentialId: jenkins-slack-token, notifyCommitters: false, iconEmoji: <empty>, username: <empty>, timestamp: <empty>
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
Executing sh script inside container jenkins-agent-1 of pod jenkins-agent-1-njpgp-jsfx0
Executing command: "ssh-agent" "-k" 
exit
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 23 killed;
[ssh-agent] Stopped.
[Pipeline] // sshagent
[Pipeline] }
[Pipeline] // container
[Pipeline] }
[Pipeline] // withAWS
[Pipeline] }
[Pipeline] // node
[Pipeline] }
[Pipeline] // podTemplate
[Pipeline] podTemplate
[Pipeline] {
[Pipeline] node
Created Pod: kubernetes jenkins/jenkins-agent-2-l42k5-nh29w
[Normal][jenkins/jenkins-agent-2-l42k5-nh29w][Scheduled] Successfully assigned jenkins/jenkins-agent-2-l42k5-nh29w to ip-172-31-237-231.ap-southeast-1.compute.internal
[Normal][jenkins/jenkins-agent-2-l42k5-nh29w][Pulling] Pulling image "greghu/jenkins-agent:latest"
[Normal][jenkins/jenkins-agent-2-l42k5-nh29w][Pulled] Successfully pulled image "greghu/jenkins-agent:latest"
[Normal][jenkins/jenkins-agent-2-l42k5-nh29w][Created] Created container jenkins-agent
[Normal][jenkins/jenkins-agent-2-l42k5-nh29w][Started] Started container jenkins-agent
[Normal][jenkins/jenkins-agent-2-l42k5-nh29w][Pulled] Container image "jenkins/inbound-agent:4.3-4" already present on machine
[Normal][jenkins/jenkins-agent-2-l42k5-nh29w][Created] Created container jnlp
[Normal][jenkins/jenkins-agent-2-l42k5-nh29w][Started] Started container jnlp
Agent jenkins-agent-2-l42k5-nh29w is provisioned from template jenkins-agent-2-l42k5
---
apiVersion: "v1"
kind: "Pod"
metadata:
  annotations:
    buildUrl: "http://jenkins:443/job/full-job/40/"
    runUrl: "job/full-job/40/"
  labels:
    app: "jenkins-agent-2"
    jenkins/jenkins-jenkins-agent: "true"
    jenkins/label-digest: "6ad5a00de3cdb6d558a7f86898903a39f2473fd9"
    jenkins/label: "jenkins-agent-2"
  name: "jenkins-agent-2-l42k5-nh29w"
spec:
  containers:
  - command:
    - "cat"
    image: "greghu/jenkins-agent:latest"
    name: "jenkins-agent"
    tty: true
    volumeMounts:
    - mountPath: "/var/run/docker.sock"
      name: "dockersock"
    - mountPath: "/home/jenkins/agent"
      name: "workspace-volume"
      readOnly: false
  - env:
    - name: "JENKINS_SECRET"
      value: "********"
    - name: "JENKINS_TUNNEL"
      value: "jenkins-agent:31000"
    - name: "JENKINS_AGENT_NAME"
      value: "jenkins-agent-2-l42k5-nh29w"
    - name: "JENKINS_NAME"
      value: "jenkins-agent-2-l42k5-nh29w"
    - name: "JENKINS_AGENT_WORKDIR"
      value: "/home/jenkins/agent"
    - name: "JENKINS_URL"
      value: "http://jenkins:443/"
    image: "jenkins/inbound-agent:4.3-4"
    name: "jnlp"
    resources:
      limits: {}
      requests:
        memory: "256Mi"
        cpu: "100m"
    volumeMounts:
    - mountPath: "/home/jenkins/agent"
      name: "workspace-volume"
      readOnly: false
  nodeSelector:
    beta.kubernetes.io/instance-type: "t3.medium"
  restartPolicy: "Never"
  volumes:
  - hostPath:
      path: "/var/run/docker.sock"
    name: "dockersock"
  - emptyDir:
      medium: ""
    name: "workspace-volume"

Running on jenkins-agent-2-l42k5-nh29w in /home/jenkins/agent/workspace/full-job
[Pipeline] {
[Pipeline] withAWS
Constructing AWS CredentialsSetting AWS region ap-southeast-1 
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Notify App deploy Start)
[Pipeline] slackSend
Slack Send Pipeline step running, values are - baseUrl: <empty>, teamDomain: ***, channel: #jenkins-notify, color: warning, botUser: false, tokenCredentialId: jenkins-slack-token, notifyCommitters: false, iconEmoji: <empty>, username: <empty>, timestamp: <empty>
[Pipeline] }
[Pipeline] // stage
[Pipeline] container
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Prepare Envs)
[Pipeline] cleanWs
[WS-CLEANUP] Deleting project workspace...
[WS-CLEANUP] Deferred wipeout is used...
[WS-CLEANUP] done
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Checkout Comapp code)
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
using credential jenkins-bitbucket-key
Warning: JENKINS-30600: special launcher org.csanchez.jenkins.plugins.kubernetes.pipeline.ContainerExecDecorator$1@1dcfcda3; decorates RemoteLauncher[hudson.remoting.Channel@14f2715d:JNLP4-connect connection from ip-172-31-237-200.ap-southeast-1.compute.internal/172.31.237.200:39168] will be ignored (a typical symptom is the Git executable not being run inside a designated container)
Cloning the remote Git repository
Cloning repository *******.git
 > git init /home/jenkins/agent/workspace/full-job # timeout=10
Fetching upstream changes from ********.git
 > git --version # timeout=10
 > git --version # 'git version 2.20.1'
using GIT_SSH to set credentials SSH key for jenkinsci user on Bitbucket
 > git fetch --tags --force --progress -- *****.git +refs/heads/*:refs/remotes/origin/* # timeout=10
Avoid second fetch
Checking out Revision ce438034d74453ee236d98d410b5cbfb21850486 (refs/remotes/origin/master)
 > git config remote.origin.url ****.git # timeout=10
 > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git config core.sparsecheckout # timeout=10
 > git checkout -f ce438034d74453ee236d98d410b5cbfb21850486 # timeout=10
Commit message: "update pipeline"
 > git rev-list --no-walk 534af24d3ee768bbcf493c8aa54bb5aed809d189 # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Update Config)
[Pipeline] sh
+ aws eks --region ap-southeast-1 update-kubeconfig --name greg-eks-demo
Added new context arn:aws:eks:ap-southeast-1:545573948854:cluster/greg-eks-demo to /root/.kube/config
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Create Namespace)
[Pipeline] sh
+ kubectl apply -f -
+ kubectl create namespace comapp '--dry-run=client' -o yaml
namespace/comapp created
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Verify Ingress Namespace)
[Pipeline] sh
+ kubectl get ns
NAME              STATUS   AGE
comapp            Active   2s
default           Active   4m17s
kube-node-lease   Active   4m19s
kube-public       Active   4m19s
kube-system       Active   4m19s
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Build And Push Image to ECR)
[Pipeline] sh
+ docker build '--network=host' -t comapp:dev-40 .
Sending build context to Docker daemon  488.4kB

Step 1/7 : FROM node:12
12: Pulling from library/node
199ebcd83264: Pulling fs layer
ddbb155879c0: Pulling fs layer
c194bbaa3d8b: Pulling fs layer
6154ac87d7f3: Pulling fs layer
0c283e88ced7: Pulling fs layer
dba101298560: Pulling fs layer
ee10685a9f57: Pulling fs layer
3faa9cc9b12d: Pulling fs layer
dec15b20af15: Pulling fs layer
dba101298560: Verifying Checksum
dba101298560: Download complete
dec15b20af15: Verifying Checksum
dec15b20af15: Download complete
3faa9cc9b12d: Verifying Checksum
3faa9cc9b12d: Download complete
ddbb155879c0: Verifying Checksum
ddbb155879c0: Download complete
c194bbaa3d8b: Verifying Checksum
c194bbaa3d8b: Download complete
ee10685a9f57: Verifying Checksum
ee10685a9f57: Download complete
199ebcd83264: Verifying Checksum
199ebcd83264: Download complete
6154ac87d7f3: Verifying Checksum
6154ac87d7f3: Download complete
0c283e88ced7: Verifying Checksum
0c283e88ced7: Download complete
199ebcd83264: Pull complete
ddbb155879c0: Pull complete
c194bbaa3d8b: Pull complete
6154ac87d7f3: Pull complete
0c283e88ced7: Pull complete
dba101298560: Pull complete
ee10685a9f57: Pull complete
3faa9cc9b12d: Pull complete
dec15b20af15: Pull complete
Digest: sha256:3f646f48001e2cd732a4c0291e1fa5bfcadaaafc3a41227a0bcc76c998c2cee6
Status: Downloaded newer image for node:12
 ---> b0a7ad9ac61c
Step 2/7 : WORKDIR /opt/ct
 ---> Running in 0cb68f15128f
Removing intermediate container 0cb68f15128f
 ---> b3b4763a6f52
Step 3/7 : CMD yarn start
 ---> Running in 71ea76476121
Removing intermediate container 71ea76476121
 ---> 6c8a180978c9
Step 4/7 : COPY ./package.json ./yarn.lock ./
 ---> 93977a2a2202
Step 5/7 : RUN yarn install --pure-lockfile
 ---> Running in a2a1b4fcf8fa
yarn install v1.22.5
[91mwarning package.json: No license field
[0m[91mwarning assignment_2@1.0.0: No license field
[0m[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.1.3: The platform "linux" is incompatible with this module.
info "fsevents@2.1.3" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 8.98s.
Removing intermediate container a2a1b4fcf8fa
 ---> 1957c8575cc8
Step 6/7 : COPY . .
 ---> d01869c96ce0
Step 7/7 : EXPOSE 8080
 ---> Running in cda585a0eeef
Removing intermediate container cda585a0eeef
 ---> c0d813321fae
Successfully built c0d813321fae
Successfully tagged comapp:dev-40
[Pipeline] sh
+ docker image ls
REPOSITORY                                                              TAG                  IMAGE ID       CREATED          SIZE
comapp                                                                  dev-40               c0d813321fae   1 second ago     1.01GB
384367358464.dkr.ecr.ap-southeast-1.amazonaws.com/dv-smart-registry     datavitae-dev-42     175c90071179   20 minutes ago   206MB
384367358464.dkr.ecr.ap-southeast-1.amazonaws.com/dv-smart-registry     datavitae-dev-40     bdbcee21c629   2 hours ago      206MB
greghu/jenkins-agent                                                    latest               5a5e7b6dce52   14 hours ago     853MB
384367358464.dkr.ecr.ap-southeast-1.amazonaws.com/dv-smart-registry     datavitae-dev2-42    fa1c84e88c70   19 hours ago     206MB
node                                                                    12                   b0a7ad9ac61c   12 days ago      918MB
384367358464.dkr.ecr.ap-southeast-1.amazonaws.com/ds-user-interface     dev2-3               abafdc713964   2 months ago     142MB
384367358464.dkr.ecr.ap-southeast-1.amazonaws.com/ds-calc-assetindex    dev2-3               1b38e94fe405   2 months ago     133MB
384367358464.dkr.ecr.ap-southeast-1.amazonaws.com/ds-calc-assetratio    dev2-1               55ff31494ceb   2 months ago     133MB
384367358464.dkr.ecr.ap-southeast-1.amazonaws.com/ds-configuration      dev2-2               e6ba3f56b4eb   2 months ago     133MB
k8s.gcr.io/provider-aws/aws-ebs-csi-driver                              v1.0.0               0a7566bcc392   2 months ago     193MB
quay.io/prometheus/node-exporter                                        v1.1.2               c19ae228f069   4 months ago     26MB
k8s.gcr.io/sig-storage/csi-node-driver-registrar                        v2.1.0               ef2b13b2a066   7 months ago     19.7MB
k8s.gcr.io/sig-storage/livenessprobe                                    v2.2.0               77a8908a12e3   7 months ago     17.8MB
hazelcast/management-center                                             4.2020.12            9ef8f961ef0d   7 months ago     397MB
602401143452.dkr.ecr.ap-southeast-1.amazonaws.com/amazon-k8s-cni-init   v1.7.5-eksbuild.1    f4684a280bf6   9 months ago     288MB
602401143452.dkr.ecr.ap-southeast-1.amazonaws.com/amazon-k8s-cni        v1.7.5-eksbuild.1    8efcf523c90b   9 months ago     312MB
602401143452.dkr.ecr.ap-southeast-1.amazonaws.com/eks/kube-proxy        v1.18.8-eksbuild.1   84c42885f252   10 months ago    132MB
quay.io/kubernetes-ingress-controller/nginx-ingress-controller          0.33.0               3dcce3af0ed0   13 months ago    327MB
jenkins/inbound-agent                                                   4.3-4                911d6dcfc160   15 months ago    523MB
602401143452.dkr.ecr.ap-southeast-1.amazonaws.com/eks/pause-amd64       3.1                  9e462c010bf3   3 years ago      742kB
[Pipeline] withEnv
[Pipeline] {
[Pipeline] withDockerRegistry
Executing sh script inside container jenkins-agent of pod jenkins-agent-2-l42k5-nh29w
Executing command: "docker" "login" "-u" "AWS" "-p" ******** "https://545573948854.dkr.ecr.ap-southeast-1.amazonaws.com/comapp" 
exit
WARNING! Using --password via the CLI is insecure. Use --password-stdin.
WARNING! Your password will be stored unencrypted in /home/jenkins/agent/workspace/full-job@tmp/02f8b27c-509c-47ce-a18b-60b6c8d42abc/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
[Pipeline] {
[Pipeline] sh
+ docker tag comapp:dev-40 545573948854.dkr.ecr.ap-southeast-1.amazonaws.com/comapp:dev-40
[Pipeline] sh
+ docker push 545573948854.dkr.ecr.ap-southeast-1.amazonaws.com/comapp:dev-40
The push refers to repository [545573948854.dkr.ecr.ap-southeast-1.amazonaws.com/comapp]
fc819e5e7a32: Preparing
cfdb7a7907ce: Preparing
94564338ddb0: Preparing
cb9a70b3c39f: Preparing
bd03964f3426: Preparing
c21a5584d74c: Preparing
cd4be78f40da: Preparing
d7aef11e5baf: Preparing
2c6cd9a0820c: Preparing
50c78a431907: Preparing
cccb1829e343: Preparing
14ce51dbae6e: Preparing
3125b578849a: Preparing
d7aef11e5baf: Waiting
2c6cd9a0820c: Waiting
50c78a431907: Waiting
cccb1829e343: Waiting
14ce51dbae6e: Waiting
3125b578849a: Waiting
c21a5584d74c: Waiting
cd4be78f40da: Waiting
bd03964f3426: Layer already exists
c21a5584d74c: Layer already exists
cd4be78f40da: Layer already exists
d7aef11e5baf: Layer already exists
2c6cd9a0820c: Layer already exists
50c78a431907: Layer already exists
cccb1829e343: Layer already exists
14ce51dbae6e: Layer already exists
94564338ddb0: Pushed
3125b578849a: Layer already exists
cb9a70b3c39f: Pushed
fc819e5e7a32: Pushed
cfdb7a7907ce: Pushed
dev-40: digest: sha256:90702382e6947b524c1164949894cb9272b1f39cc8675398c2f73ab49dd3b996 size: 3053
[Pipeline] }
[Pipeline] // withDockerRegistry
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Yarn Install)
[Pipeline] sh
+ yarn install --pure-lockfile
yarn install v1.22.10
warning package.json: No license field
warning assignment_2@1.0.0: No license field
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.1.3: The platform "linux" is incompatible with this module.
info "fsevents@2.1.3" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 11.34s.
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Yarn Test)
[Pipeline] sh
+ yarn test
yarn run v1.22.10
warning package.json: No license field
$ jest tests/*.js
PASS tests/index.spec.js
  Tests
    ✓ Should return valid response (33 ms)
    ✓ Should return invalid response (4 ms)
    ✓ Should return prometheus metrics (4 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.852 s
Ran all test suites matching /tests\/index.spec.js/i.
Done in 2.69s.
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Checkout Ingress)
[Pipeline] cleanWs
[WS-CLEANUP] Deleting project workspace...
[WS-CLEANUP] Deferred wipeout is used...
[WS-CLEANUP] done
[Pipeline] git
The recommended git tool is: NONE
No credentials specified
Warning: JENKINS-30600: special launcher org.csanchez.jenkins.plugins.kubernetes.pipeline.ContainerExecDecorator$1@41db3e71; decorates RemoteLauncher[hudson.remoting.Channel@14f2715d:JNLP4-connect connection from ip-172-31-237-200.ap-southeast-1.compute.internal/172.31.237.200:39168] will be ignored (a typical symptom is the Git executable not being run inside a designated container)
Cloning the remote Git repository
Cloning repository https://github.com/Greg215/nginx-ingress.git
 > git init /home/jenkins/agent/workspace/full-job # timeout=10
Fetching upstream changes from https://github.com/Greg215/nginx-ingress.git
 > git --version # timeout=10
 > git --version # 'git version 2.20.1'
 > git fetch --tags --force --progress -- https://github.com/Greg215/nginx-ingress.git +refs/heads/*:refs/remotes/origin/* # timeout=10
Avoid second fetch
Checking out Revision 1081121f3845b02b486a7369d6f5215e3e422d3f (refs/remotes/origin/master)
Commit message: "update pipeline order"
 > git config remote.origin.url https://github.com/Greg215/nginx-ingress.git # timeout=10
 > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 1081121f3845b02b486a7369d6f5215e3e422d3f # timeout=10
 > git branch -a -v --no-abbrev # timeout=10
 > git checkout -b master 1081121f3845b02b486a7369d6f5215e3e422d3f # timeout=10
 > git rev-list --no-walk 1081121f3845b02b486a7369d6f5215e3e422d3f # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Deploy to EKS)
[Pipeline] sh
+ cat deployment.yaml
+ sed 's|IMAGE_NAME|545573948854.dkr.ecr.ap-southeast-1.amazonaws.com/comapp:dev-40|g'
[Pipeline] sh
+ cat comapp.yaml
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: comapp
spec:
  replicas: 1
  selector:
    matchLabels:
      app:
        comapp
  template:
    metadata:
      labels:
        app: comapp
    spec:
      containers:
        - name: comapp
          image: 545573948854.dkr.ecr.ap-southeast-1.amazonaws.com/comapp:dev-40
          ports:
            - containerPort: 8080
---
kind: Service
apiVersion: v1
metadata:
  name: comapp
  labels:
    app: comapp
spec:
  type: NodePort
  selector:
    app: comapp
  ports:
    - port: 8080
      targetPort: 8080
      protocol: TCP
---
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: comapp
  annotations:
    kubernetes.io/ingress.class: "nginx"
  namespace: comapp
spec:
  rules:
    - host: "comapp.*****.com.sg"
      http:
        paths:
          - path:
            backend:
              serviceName: comapp
              servicePort: 8080
[Pipeline] sh
+ kubectl apply -f comapp.yaml -n comapp
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Clean up ENV)
[Pipeline] sh
+ docker image prune -a -f
Deleted Images:
untagged: 384367358464.dkr.ecr.ap-southeast-1.amazonaws.com/dv-smart-registry:datavitae-dev-40
untagged: 384367358464.dkr.ecr.ap-southeast-1.amazonaws.com/dv-smart-registry@sha256:43e6fd0b46bd619a24f5b8b859c0daba0c2b672621820e83b80bdeea47b374f2
deleted: sha256:bdbcee21c62968d4d366756832e7effb73f0dcca5c9f91f90c8a744d7ece9f71
deleted: sha256:8f61124b89113996fa4f093d67dda84f5f8a2aece4bc2d1d2e7533f3433480cb
untagged: 384367358464.dkr.ecr.ap-southeast-1.amazonaws.com/dv-smart-registry:datavitae-dev-42
untagged: 384367358464.dkr.ecr.ap-southeast-1.amazonaws.com/dv-smart-registry@sha256:438598a2e1f7d98171a6523b7d41e1dd689d067d58ef302f647428e05db48ba5
deleted: sha256:175c90071179e5bf2108e48751c22d7b2eff32d1cb1607c32bb0628c3f75e5bb
deleted: sha256:905b2ba3fc2cb71a488847342a699e2003248a53fb918bc33c6377accb3b3e87
untagged: 545573948854.dkr.ecr.ap-southeast-1.amazonaws.com/comapp:dev-40
untagged: 545573948854.dkr.ecr.ap-southeast-1.amazonaws.com/comapp@sha256:90702382e6947b524c1164949894cb9272b1f39cc8675398c2f73ab49dd3b996
untagged: comapp:dev-40
deleted: sha256:c0d813321fae0c38b40fdb5e194e3a43f786ffc444eedbec86af046388a3f431
deleted: sha256:d01869c96ce0a9fb692d9d5cd27e3204f1be2e66cfb64547ddb1343483d1f983
deleted: sha256:0fdcae746b6098160ca7b6035a07ee4bce0eed5d6b8fc90080ff6d6e9db6ef4a
deleted: sha256:1957c8575cc84f7661c88cd7f68ef6f5429818143f2b7f64fce1cb760b2aab4e
deleted: sha256:9718f762ccaecc26acae041c7a720936a5d558ee1acafefc53ec09064b430dcc
deleted: sha256:93977a2a2202da135246fdb0dbb00da9357d4921ced2c115a054cc22544b94fe
deleted: sha256:f3c443859c1e818139a2834ff9a7e9d69167fb722972f6251853449e6dfe8ba5
deleted: sha256:6c8a180978c95fa35c84ee931bb95c121578e2bd8c1fa0abddc57896b665e53a
deleted: sha256:b3b4763a6f5218e007276fabf1980c7d56fc673edb7dd666150fc5ea3313304d
deleted: sha256:7b43ebc1094f69ea19749ab3500f9c55e0f99db4ada7ae68e00ab88083343f17
untagged: node:12
untagged: node@sha256:3f646f48001e2cd732a4c0291e1fa5bfcadaaafc3a41227a0bcc76c998c2cee6
deleted: sha256:b0a7ad9ac61cb402e8e38ecd311a1de8ba75adbff67aae935c7cb8c4b68b4c48
deleted: sha256:6691ea6fff732014590f4fab2a62d46c614fbc561bfb37c3b358b55882700cab
deleted: sha256:9385a266139801710784d8e69322d06110b4bbe2a437ac47a460c27f73448ae8
deleted: sha256:1251434d57374e4e051bc2789f897809e43a469a44474b6e1f30be18069d7372
deleted: sha256:4972498c6c101034598abc365742dafbf6ae127058e14c1a5bfcfe8170f7e9e1
deleted: sha256:7264629986167eab418fb5454ca986b1b75b62dfef3db2e33de9855d23f0bf4b
deleted: sha256:62d7b21dde593fd115f18501931ac3dd7665035d4e6ef48b3ca16449e7730d4f
deleted: sha256:9d96bed3c9231c188594afc28317814c7940a83da03e317d0e460c37e18e0ffb
deleted: sha256:4eacdbb05dc67f10c908506e61f4820c5b040bc0bec0c5a20b4bc5cfee0048ec
deleted: sha256:3125b578849a2eb0e8e2519c657bca849ba1632fb30bed587f7a4c2761429428

Total reclaimed space: 1.189GB
[Pipeline] sh
+ docker image ls
REPOSITORY                                                              TAG                  IMAGE ID       CREATED         SIZE
greghu/jenkins-agent                                                    latest               5a5e7b6dce52   14 hours ago    853MB
384367358464.dkr.ecr.ap-southeast-1.amazonaws.com/dv-smart-registry     datavitae-dev2-42    fa1c84e88c70   19 hours ago    206MB
384367358464.dkr.ecr.ap-southeast-1.amazonaws.com/ds-user-interface     dev2-3               abafdc713964   2 months ago    142MB
384367358464.dkr.ecr.ap-southeast-1.amazonaws.com/ds-calc-assetindex    dev2-3               1b38e94fe405   2 months ago    133MB
384367358464.dkr.ecr.ap-southeast-1.amazonaws.com/ds-calc-assetratio    dev2-1               55ff31494ceb   2 months ago    133MB
384367358464.dkr.ecr.ap-southeast-1.amazonaws.com/ds-configuration      dev2-2               e6ba3f56b4eb   2 months ago    133MB
k8s.gcr.io/provider-aws/aws-ebs-csi-driver                              v1.0.0               0a7566bcc392   2 months ago    193MB
quay.io/prometheus/node-exporter                                        v1.1.2               c19ae228f069   4 months ago    26MB
k8s.gcr.io/sig-storage/csi-node-driver-registrar                        v2.1.0               ef2b13b2a066   7 months ago    19.7MB
k8s.gcr.io/sig-storage/livenessprobe                                    v2.2.0               77a8908a12e3   7 months ago    17.8MB
hazelcast/management-center                                             4.2020.12            9ef8f961ef0d   7 months ago    397MB
602401143452.dkr.ecr.ap-southeast-1.amazonaws.com/amazon-k8s-cni-init   v1.7.5-eksbuild.1    f4684a280bf6   9 months ago    288MB
602401143452.dkr.ecr.ap-southeast-1.amazonaws.com/amazon-k8s-cni        v1.7.5-eksbuild.1    8efcf523c90b   9 months ago    312MB
602401143452.dkr.ecr.ap-southeast-1.amazonaws.com/eks/kube-proxy        v1.18.8-eksbuild.1   84c42885f252   10 months ago   132MB
quay.io/kubernetes-ingress-controller/nginx-ingress-controller          0.33.0               3dcce3af0ed0   13 months ago   327MB
jenkins/inbound-agent                                                   4.3-4                911d6dcfc160   15 months ago   523MB
602401143452.dkr.ecr.ap-southeast-1.amazonaws.com/eks/pause-amd64       3.1                  9e462c010bf3   3 years ago     742kB
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Deploy Operator)
[Pipeline] sh
+ kubectl apply -f 01-operator-deployment.yaml
namespace/helm created
deployment.apps/helm-operator created
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Deploy Operator crds)
[Pipeline] sh
+ kubectl apply -f 02-operator-crds.yaml
customresourcedefinition.apiextensions.k8s.io/helmreleases.helm.fluxcd.io created
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Deploy Operator rbac)
[Pipeline] sh
+ kubectl apply -f 03-operator-rbac.yaml
serviceaccount/helm-operator created
clusterrole.rbac.authorization.k8s.io/helm-operator created
clusterrolebinding.rbac.authorization.k8s.io/helm-operator created
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Deploy Nginx Operator)
[Pipeline] sh
+ kubectl apply -f 04-nginx-ingress.yaml
namespace/ingress-nginx created
helmrelease.helm.fluxcd.io/nginx-ingress created
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Verify Ingress Namespace)
[Pipeline] sh
+ kubectl get ns
NAME              STATUS   AGE
comapp            Active   94s
default           Active   5m49s
helm              Active   8s
ingress-nginx     Active   2s
kube-node-lease   Active   5m51s
kube-public       Active   5m51s
kube-system       Active   5m51s
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Verify Ingress)
[Pipeline] sleep
Sleeping for 20 sec
[Pipeline] sh
+ kubectl get pods -n ingress-nginx
NAME                                            READY   STATUS              RESTARTS   AGE
ingress-nginx-admission-patch-7rdtw             0/1     Completed           0          3s
ingress-nginx-controller-dndth                  0/1     ContainerCreating   0          3s
ingress-nginx-controller-hhb6f                  0/1     ContainerCreating   0          3s
ingress-nginx-defaultbackend-5857ddd6cd-qkzbz   0/1     ContainerCreating   0          3s
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Notify Complete of Deployment)
[Pipeline] slackSend
Slack Send Pipeline step running, values are - baseUrl: <empty>, teamDomain: ****, channel: #jenkins-notify, color: good, botUser: false, tokenCredentialId: jenkins-slack-token, notifyCommitters: false, iconEmoji: <empty>, username: <empty>, timestamp: <empty>
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // container
[Pipeline] }
[Pipeline] // withAWS
[Pipeline] }
[Pipeline] // node
[Pipeline] }
[Pipeline] // podTemplate
[Pipeline] podTemplate
[Pipeline] {
[Pipeline] node
Created Pod: kubernetes jenkins/jenkins-agent-3-rf5cf-pk5gc
[Normal][jenkins/jenkins-agent-3-rf5cf-pk5gc][Scheduled] Successfully assigned jenkins/jenkins-agent-3-rf5cf-pk5gc to ip-172-31-237-140.ap-southeast-1.compute.internal
[Normal][jenkins/jenkins-agent-3-rf5cf-pk5gc][Pulling] Pulling image "greghu/jenkins-agent-helm:latest"
Still waiting to schedule task
‘jenkins-agent-3-rf5cf-pk5gc’ is offline
[Normal][jenkins/jenkins-agent-3-rf5cf-pk5gc][Pulled] Successfully pulled image "greghu/jenkins-agent-helm:latest"
[Normal][jenkins/jenkins-agent-3-rf5cf-pk5gc][Created] Created container jenkins-agent-3
[Normal][jenkins/jenkins-agent-3-rf5cf-pk5gc][Started] Started container jenkins-agent-3
[Normal][jenkins/jenkins-agent-3-rf5cf-pk5gc][Pulled] Container image "jenkins/inbound-agent:4.3-4" already present on machine
[Normal][jenkins/jenkins-agent-3-rf5cf-pk5gc][Created] Created container jnlp
[Normal][jenkins/jenkins-agent-3-rf5cf-pk5gc][Started] Started container jnlp
Agent jenkins-agent-3-rf5cf-pk5gc is provisioned from template jenkins-agent-3-rf5cf
---
apiVersion: "v1"
kind: "Pod"
metadata:
  annotations:
    buildUrl: "http://jenkins:443/job/full-job/40/"
    runUrl: "job/full-job/40/"
  labels:
    jenkins/jenkins-jenkins-agent: "true"
    jenkins/label-digest: "0936e69ab487176c4d765f18c18582c5c66c66dd"
    jenkins/label: "jenkins-agent-3"
  name: "jenkins-agent-3-rf5cf-pk5gc"
spec:
  containers:
  - command:
    - "cat"
    image: "greghu/jenkins-agent-helm:latest"
    imagePullPolicy: "IfNotPresent"
    name: "jenkins-agent-3"
    resources:
      limits: {}
      requests: {}
    tty: true
    volumeMounts:
    - mountPath: "/home/jenkins/agent"
      name: "workspace-volume"
      readOnly: false
  - env:
    - name: "JENKINS_SECRET"
      value: "********"
    - name: "JENKINS_TUNNEL"
      value: "jenkins-agent:31000"
    - name: "JENKINS_AGENT_NAME"
      value: "jenkins-agent-3-rf5cf-pk5gc"
    - name: "JENKINS_NAME"
      value: "jenkins-agent-3-rf5cf-pk5gc"
    - name: "JENKINS_AGENT_WORKDIR"
      value: "/home/jenkins/agent"
    - name: "JENKINS_URL"
      value: "http://jenkins:443/"
    image: "jenkins/inbound-agent:4.3-4"
    name: "jnlp"
    resources:
      limits: {}
      requests:
        memory: "256Mi"
        cpu: "100m"
    volumeMounts:
    - mountPath: "/home/jenkins/agent"
      name: "workspace-volume"
      readOnly: false
  nodeSelector:
    kubernetes.io/os: "linux"
  restartPolicy: "Never"
  volumes:
  - emptyDir:
      medium: ""
    name: "workspace-volume"

Running on jenkins-agent-3-rf5cf-pk5gc in /home/jenkins/agent/workspace/full-job
[Pipeline] {
[Pipeline] withAWS
Constructing AWS CredentialsSetting AWS region ap-southeast-1 
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Start deploy Prometheus and Grafana)
[Pipeline] slackSend
Slack Send Pipeline step running, values are - baseUrl: <empty>, teamDomain: ***, channel: #jenkins-notify, color: warning, botUser: false, tokenCredentialId: jenkins-slack-token, notifyCommitters: false, iconEmoji: <empty>, username: <empty>, timestamp: <empty>
[Pipeline] }
[Pipeline] // stage
[Pipeline] container
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Update KubeConfig)
[Pipeline] sh
+ aws eks --region ap-southeast-1 update-kubeconfig --name greg-eks-demo
Added new context arn:aws:eks:ap-southeast-1:545573948854:cluster/greg-eks-demo to /root/.kube/config
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Create Monitoring Namespace)
[Pipeline] sh
+ kubectl apply -f -
+ kubectl create namespace monitoring '--dry-run=client' -o yaml
namespace/monitoring created
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Add Promethus Helm repo)
[Pipeline] sh
+ helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
"prometheus-community" has been added to your repositories
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Verify Helm repo)
[Pipeline] sh
+ helm repo list
NAME                	URL                                               
stable              	https://charts.helm.sh/stable                     
prometheus-community	https://prometheus-community.github.io/helm-charts
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Helm Install Promethus)
[Pipeline] sh
+ helm install prometheus prometheus-community/prometheus -n monitoring
NAME: prometheus
LAST DEPLOYED: Tue Jul 20 12:00:36 2021
NAMESPACE: monitoring
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
The Prometheus server can be accessed via port 80 on the following DNS name from within your cluster:
prometheus-server.monitoring.svc.cluster.local


Get the Prometheus server URL by running these commands in the same shell:
  export POD_NAME=$(kubectl get pods --namespace monitoring -l "app=prometheus,component=server" -o jsonpath="{.items[0].metadata.name}")
  kubectl --namespace monitoring port-forward $POD_NAME 9090


The Prometheus alertmanager can be accessed via port 80 on the following DNS name from within your cluster:
prometheus-alertmanager.monitoring.svc.cluster.local


Get the Alertmanager URL by running these commands in the same shell:
  export POD_NAME=$(kubectl get pods --namespace monitoring -l "app=prometheus,component=alertmanager" -o jsonpath="{.items[0].metadata.name}")
  kubectl --namespace monitoring port-forward $POD_NAME 9093
#################################################################################
######   WARNING: Pod Security Policy has been moved to a global property.  #####
######            use .Values.podSecurityPolicy.enabled with pod-based      #####
######            annotations                                               #####
######            (e.g. .Values.nodeExporter.podSecurityPolicy.annotations) #####
#################################################################################


The Prometheus PushGateway can be accessed via port 9091 on the following DNS name from within your cluster:
prometheus-pushgateway.monitoring.svc.cluster.local


Get the PushGateway URL by running these commands in the same shell:
  export POD_NAME=$(kubectl get pods --namespace monitoring -l "app=prometheus,component=pushgateway" -o jsonpath="{.items[0].metadata.name}")
  kubectl --namespace monitoring port-forward $POD_NAME 9091

For more information on running Prometheus, visit:
https://prometheus.io/
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Add Grafana Helm repo)
[Pipeline] sh
+ helm repo add grafana https://grafana.github.io/helm-charts
"grafana" has been added to your repositories
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Verify Helm repo)
[Pipeline] sh
+ helm repo list
NAME                	URL                                               
stable              	https://charts.helm.sh/stable                     
prometheus-community	https://prometheus-community.github.io/helm-charts
grafana             	https://grafana.github.io/helm-charts             
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Helm Install Grafana)
[Pipeline] sh
+ helm install grafana grafana/grafana -n monitoring
NAME: grafana
LAST DEPLOYED: Tue Jul 20 12:00:40 2021
NAMESPACE: monitoring
STATUS: deployed
REVISION: 1
NOTES:
1. Get your 'admin' user password by running:

   kubectl get secret --namespace monitoring grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo

2. The Grafana server can be accessed via port 80 on the following DNS name from within your cluster:

   grafana.monitoring.svc.cluster.local

   Get the Grafana URL to visit by running these commands in the same shell:

     export POD_NAME=$(kubectl get pods --namespace monitoring -l "app.kubernetes.io/name=grafana,app.kubernetes.io/instance=grafana" -o jsonpath="{.items[0].metadata.name}")
     kubectl --namespace monitoring port-forward $POD_NAME 3000

3. Login with the password from step 1 and the username: admin
#################################################################################
######   WARNING: Persistence is disabled!!! You will lose your data when   #####
######            the Grafana pod is terminated.                            #####
#################################################################################
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Check the pods status)
[Pipeline] sleep
Sleeping for 30 sec
[Pipeline] sh
+ kubectl get pods -n monitoring
NAME                                             READY   STATUS              RESTARTS   AGE
grafana-5d7dbb49b-m4ldh                          1/1     Running             0          32s
prometheus-alertmanager-cc884bbf-lgh4n           0/2     ContainerCreating   0          37s
prometheus-kube-state-metrics-86dc6bb59f-wn7kk   1/1     Running             0          36s
prometheus-node-exporter-ntnfq                   1/1     Running             0          37s
prometheus-node-exporter-rr866                   1/1     Running             0          36s
prometheus-pushgateway-ccd69bc9-bvdmh            1/1     Running             0          37s
prometheus-server-57b7c55c4f-28fm6               0/2     ContainerCreating   0          37s
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // container
[Pipeline] stage
[Pipeline] { (Complete deploy Prometheus and Grafana)
[Pipeline] slackSend
Slack Send Pipeline step running, values are - baseUrl: <empty>, teamDomain: ***, channel: #jenkins-notify, color: warning, botUser: false, tokenCredentialId: jenkins-slack-token, notifyCommitters: false, iconEmoji: <empty>, username: <empty>, timestamp: <empty>
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // withAWS
[Pipeline] }
[Pipeline] // node
[Pipeline] }
[Pipeline] // podTemplate
[Pipeline] End of Pipeline
Finished: SUCCESS