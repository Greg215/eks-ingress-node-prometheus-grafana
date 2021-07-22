# The task finished via Jenkins. 

The files attached in the same repo named jenkins_apply_Console_Output.md is the Jenkins job apply console output. And file named jenkins_destroy_Console_Output.md is the Jenkins job that runs destroy console output. 

Jenkins server was build via https://github.com/jenkinsci/helm-charts plus Jenkins config as code plugin https://github.com/jenkinsci/configuration-as-code-plugin

# The Jenkins Pipeline combined into three different parts.
1. IaC, terraform code for AWS EKS creation and destroy
2. CI/CD part for the NodeJs app.
3. Helm install Prometheus and Grafana.

## Part One, IaC for EKS cluster
a. The Terraform code can be found in the Github repo: https://github.com/Greg215/terraform-aws-eks, to use it in another account, need to update the backend s3 bucket, Route53 zone id, domain, instance key, region, etc. if you do not intend to use the default value.
b. The EKS module has been tested on terraform version 0.12.29, 0.12.30, 0.12.31.
c. The container that has been used in this pod template is greghu/terraform-0.12.31:latest, it's based on the terraform official 0.12.31 version but adds curl.

## Part Two, CI/CD part for the NodeJs app.
a. The pod container for this job is using container greghu/jenkins-agent:latest, it has aws cli, node, yarn, ect, install.
b. CI part will run yarn install and yarn test.
c. CI will also build the docker image and push to the AWS ECR.
d. CD part will create a new namespace is not exist yet, create deployment, ingress and service.
e. CD part will also deploy the Nginx ingress operator.

## Part Three, Helm install Prometheus and Grafana
a. The pod container greghu/jenkins-agent-helm:latest for this job has helm, awscli, pip etc installed.
b. It will create new namespace called monitoring.
c. It will use Prometheus and Grafana Helm chart to install Prometheus operator and Grafana. https://prometheus-community.github.io/helm-charts, https://grafana.github.io/helm-charts.


## Attention
a. To run the pipeline needs to config the AWS secret key and id in the jenkins vault, need ECR repo to be able to push the image to it also have slack notification enabled so better add slack token in jenkins credential or remove the notification stage from the pipeline.
b. The pipeline has only one input parameter which to decide if create or destroy the EKS cluster. Ideally, more parameters might needed like conformation for creation ot deleting. 
c. Real world would also better to have separate pipeline for above jobs. eg. pipeline for terraform EKS cluster only, pipeline for deploy Prometheus and Grafana, Multibranch pipeline for CI, separate pipeline for CD.
d. After the prometheus is up and running, use it to scrape the metrics and add this prometheus as the data source in Grafana. Then create a new dashboard for the app.