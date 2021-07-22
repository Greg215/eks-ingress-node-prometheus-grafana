Started by user Greg Hu
Obtained Jenkinsfile from git ****.git
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] echo
PREVIOUS BUILD RESULT: SUCCESS
[Pipeline] properties
[Pipeline] podTemplate
[Pipeline] {
[Pipeline] node
Created Pod: kubernetes jenkins/jenkins-agent-1-r1k24-1mms3
[Normal][jenkins/jenkins-agent-1-r1k24-1mms3][Scheduled] Successfully assigned jenkins/jenkins-agent-1-r1k24-1mms3 to ip-172-31-237-140.ap-southeast-1.compute.internal
[Normal][jenkins/jenkins-agent-1-r1k24-1mms3][Pulled] Container image "greghu/terraform-0.12.31:latest" already present on machine
[Normal][jenkins/jenkins-agent-1-r1k24-1mms3][Created] Created container jenkins-agent-1
[Normal][jenkins/jenkins-agent-1-r1k24-1mms3][Started] Started container jenkins-agent-1
[Normal][jenkins/jenkins-agent-1-r1k24-1mms3][Pulled] Container image "jenkins/inbound-agent:4.3-4" already present on machine
[Normal][jenkins/jenkins-agent-1-r1k24-1mms3][Created] Created container jnlp
[Normal][jenkins/jenkins-agent-1-r1k24-1mms3][Started] Started container jnlp
Agent jenkins-agent-1-r1k24-1mms3 is provisioned from template jenkins-agent-1-r1k24
---
apiVersion: "v1"
kind: "Pod"
metadata:
  annotations:
    buildUrl: "http://jenkins:443/job/full-job/41/"
    runUrl: "job/full-job/41/"
  labels:
    jenkins/jenkins-jenkins-agent: "true"
    jenkins/label-digest: "acc9093c3172cf77e138ed7ea31bb951001e2ba1"
    jenkins/label: "jenkins-agent-1"
  name: "jenkins-agent-1-r1k24-1mms3"
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
      value: "jenkins-agent-1-r1k24-1mms3"
    - name: "JENKINS_NAME"
      value: "jenkins-agent-1-r1k24-1mms3"
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

Running on jenkins-agent-1-r1k24-1mms3 in /home/jenkins/agent/workspace/full-job
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
Warning: JENKINS-30600: special launcher org.csanchez.jenkins.plugins.kubernetes.pipeline.ContainerExecDecorator$1@587d3011; decorates RemoteLauncher[hudson.remoting.Channel@536da9e:JNLP4-connect connection from ip-172-31-237-124.ap-southeast-1.compute.internal/172.31.237.124:52824] will be ignored (a typical symptom is the Git executable not being run inside a designated container)
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
Executing sh script inside container jenkins-agent-1 of pod jenkins-agent-1-r1k24-1mms3
Executing command: "ssh-agent" 
exit
SSH_AUTH_SOCK=/tmp/ssh-XXXXXXAMbGcc/agent.19; export SSH_AUTH_SOCK;
SSH_AGENT_PID=20; export SSH_AGENT_PID;
echo Agent pid 20;
SSH_AUTH_SOCK=/tmp/ssh-XXXXXXAMbGcc/agent.19
SSH_AGENT_PID=20
Running ssh-add (command line suppressed)
Identity added: /home/jenkins/agent/workspace/full-job@tmp/private_key_3534464304199708451.key (guangyuehu@guangyues-MacBook-Pro.local)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Set Up Bitbucket ssh key)
[Pipeline] sh
+ mkdir -p /root/.ssh
+ ssh-keyscan -t rsa bitbucket.org
# bitbucket.org:22 SSH-2.0-conker_fc29489382 73b62987f105
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
- Downloading plugin for provider "aws" (hashicorp/aws) 3.50.0...
- Downloading plugin for provider "null" (hashicorp/null) 3.1.0...
- Downloading plugin for provider "kubernetes" (hashicorp/kubernetes) 2.3.2...
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
[0m[1mmodule.eks_cluster.data.aws_iam_policy_document.assume_role[0]: Refreshing state...[0m
[0m[1mmodule.eks_cluster.aws_iam_role.default[0]: Refreshing state... [id=iam-role-cluster-greg-eks-demo][0m
[0m[1mmodule.subnets.data.aws_availability_zones.available: Refreshing state...[0m
[0m[1mmodule.vpc.aws_vpc.vpc: Refreshing state... [id=vpc-043e27750348e6da7][0m
[0m[1mmodule.eks_workers.data.aws_iam_policy_document.assume_role[0]: Refreshing state...[0m
[0m[1mmodule.vpc.aws_default_security_group.vpc-sg[0]: Refreshing state... [id=sg-0a1702ac8c7354351][0m
[0m[1mmodule.vpc.aws_internet_gateway.vpc-gateway: Refreshing state... [id=igw-03318eb30bf4708dd][0m
[0m[1mmodule.network_loadbalancer.aws_security_group.sg_nlb_k8s[0]: Refreshing state... [id=sg-0ef9371f1f9fbf028][0m
[0m[1mmodule.eks_cluster.aws_security_group.default[0]: Refreshing state... [id=sg-0a10d804513d451a9][0m
[0m[1mmodule.network_loadbalancer.aws_lb_target_group.target_groups[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:targetgroup/tg-greg-eks-demo-to-30080/3bd4268aabf6caea][0m
[0m[1mmodule.subnets.data.aws_vpc.default: Refreshing state...[0m
[0m[1mmodule.network_loadbalancer.aws_security_group_rule.allow_inbound_from_target_groups[0]: Refreshing state... [id=sgrule-1232144127][0m
[0m[1mmodule.eks_cluster.aws_security_group_rule.egress[0]: Refreshing state... [id=sgrule-3407717028][0m
[0m[1mmodule.subnets.aws_route_table.public[0]: Refreshing state... [id=rtb-0c5db97be3f9d04ae][0m
[0m[1mmodule.subnets.aws_route_table.private[1]: Refreshing state... [id=rtb-004f00b3e24bf43b5][0m
[0m[1mmodule.subnets.aws_subnet.public[0]: Refreshing state... [id=subnet-06695fa20b2920179][0m
[0m[1mmodule.subnets.aws_subnet.private[0]: Refreshing state... [id=subnet-071b21a74db01d588][0m
[0m[1mmodule.subnets.aws_subnet.public[1]: Refreshing state... [id=subnet-0799f9cb4a446e7b2][0m
[0m[1mmodule.subnets.aws_subnet.public[2]: Refreshing state... [id=subnet-0966ccddaff2e6775][0m
[0m[1mmodule.subnets.aws_route_table.private[0]: Refreshing state... [id=rtb-0cefbc57ecd518789][0m
[0m[1mmodule.subnets.aws_route_table.private[2]: Refreshing state... [id=rtb-0f64f4969a80876a9][0m
[0m[1mmodule.subnets.aws_subnet.private[1]: Refreshing state... [id=subnet-00d6b63cb4ee5ba80][0m
[0m[1mmodule.subnets.aws_subnet.private[2]: Refreshing state... [id=subnet-0e639477a57b40d98][0m
[0m[1mmodule.subnets.aws_route.public[0]: Refreshing state... [id=r-rtb-0c5db97be3f9d04ae1080289494][0m
[0m[1mmodule.subnets.aws_route_table_association.public[1]: Refreshing state... [id=rtbassoc-0b7c7de72b983d261][0m
[0m[1mmodule.subnets.aws_route_table_association.public[2]: Refreshing state... [id=rtbassoc-0ecb0c7e2d82f590b][0m
[0m[1mmodule.subnets.aws_route_table_association.public[0]: Refreshing state... [id=rtbassoc-0eba66594933b9ea4][0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Refreshing state... [id=arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:loadbalancer/net/nlb-greg-eks-demo/2a29f4e88d8aea42][0m
[0m[1mmodule.subnets.aws_network_acl.public[0]: Refreshing state... [id=acl-0d0f099e1a69792f9][0m
[0m[1mmodule.subnets.aws_network_acl.private[0]: Refreshing state... [id=acl-095a462a02129e12d][0m
[0m[1mmodule.subnets.aws_route_table_association.private[0]: Refreshing state... [id=rtbassoc-092eef9d80ede0e84][0m
[0m[1mmodule.subnets.aws_route_table_association.private[1]: Refreshing state... [id=rtbassoc-015a500508529db99][0m
[0m[1mmodule.subnets.aws_route_table_association.private[2]: Refreshing state... [id=rtbassoc-00775b61d85618183][0m
[0m[1mmodule.network_loadbalancer.aws_lb_listener.nlb_listeners[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:listener/net/nlb-greg-eks-demo/2a29f4e88d8aea42/cbf964886114a77a][0m
[0m[1mmodule.route53.aws_route53_record.records[0]: Refreshing state... [id=Z07374591FC76OBQXEXUL_***_CNAME][0m
[0m[1mmodule.eks_cluster.aws_iam_role_policy_attachment.amazon_eks_cluster_policy[0]: Refreshing state... [id=iam-role-cluster-greg-eks-demo-20210720114618366500000001][0m
[0m[1mmodule.eks_cluster.aws_iam_role_policy_attachment.amazon_eks_service_policy[0]: Refreshing state... [id=iam-role-cluster-greg-eks-demo-20210720114618367200000002][0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Refreshing state... [id=greg-eks-demo][0m
[0m[1mmodule.eks_cluster.data.aws_eks_cluster_auth.eks[0]: Refreshing state...[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Refreshing state... [id=1147161951385146978][0m
[0m[1mmodule.eks_cluster.data.aws_eks_cluster.eks[0]: Refreshing state...[0m
[0m[1mmodule.eks_workers.aws_security_group.default[0]: Refreshing state... [id=sg-03c2cb19fa6077c68][0m
[0m[1mmodule.eks_workers.aws_iam_role.default[0]: Refreshing state... [id=iam-role-worker-greg-eks-demo][0m
[0m[1mmodule.eks_workers.data.template_file.userdata[0]: Refreshing state...[0m
[0m[1mmodule.eks_workers.aws_security_group_rule.ingress_self[0]: Refreshing state... [id=sgrule-2295658281][0m
[0m[1mmodule.eks_workers.aws_security_group_rule.egress[0]: Refreshing state... [id=sgrule-3284730600][0m
[0m[1mmodule.eks_cluster.aws_security_group_rule.ingress_workers[0]: Refreshing state... [id=sgrule-2068099244][0m
[0m[1mmodule.eks_cluster.kubernetes_config_map.aws_auth_ignore_changes[0]: Refreshing state... [id=kube-system/aws-auth][0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_ec2_container_registry_read_only[0]: Refreshing state... [id=iam-role-worker-greg-eks-demo-20210720115532628200000003][0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_eks_cni_policy[0]: Refreshing state... [id=iam-role-worker-greg-eks-demo-20210720115532610100000001][0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_eks_worker_node_policy[0]: Refreshing state... [id=iam-role-worker-greg-eks-demo-20210720115532613900000002][0m
[0m[1mmodule.eks_workers.aws_iam_instance_profile.default[0]: Refreshing state... [id=instance-profile-greg-eks-demo][0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_launch_template.default[0]: Refreshing state... [id=lt-05b9f63ae2c24d1a4][0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Refreshing state... [id=asg-worker-greg-eks-demo][0m

------------------------------------------------------------------------
[0m[1m[32mNo changes. Infrastructure is up-to-date.[0m[32m

This means that Terraform did not detect any differences between your
configuration and real physical resources that exist. As a result, no
actions need to be performed.[0m
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Terraform Apply)
[Pipeline] echo
Skip Apply due to not match.
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Terraform Destroy Plan)
[Pipeline] sh
+ terraform plan -destroy
[0m[1mRefreshing Terraform state in-memory prior to plan...[0m
The refreshed state will be used to calculate this plan, but will not be
persisted to local or remote state storage.
[0m
[0m[1mmodule.subnets.data.aws_availability_zones.available: Refreshing state...[0m
[0m[1mmodule.vpc.aws_vpc.vpc: Refreshing state... [id=vpc-043e27750348e6da7][0m
[0m[1mmodule.eks_cluster.data.aws_iam_policy_document.assume_role[0]: Refreshing state...[0m
[0m[1mmodule.eks_workers.data.aws_iam_policy_document.assume_role[0]: Refreshing state...[0m
[0m[1mmodule.eks_cluster.aws_iam_role.default[0]: Refreshing state... [id=iam-role-cluster-greg-eks-demo][0m
[0m[1mmodule.network_loadbalancer.aws_security_group.sg_nlb_k8s[0]: Refreshing state... [id=sg-0ef9371f1f9fbf028][0m
[0m[1mmodule.network_loadbalancer.aws_lb_target_group.target_groups[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:targetgroup/tg-greg-eks-demo-to-30080/3bd4268aabf6caea][0m
[0m[1mmodule.subnets.data.aws_vpc.default: Refreshing state...[0m
[0m[1mmodule.eks_cluster.aws_security_group.default[0]: Refreshing state... [id=sg-0a10d804513d451a9][0m
[0m[1mmodule.vpc.aws_internet_gateway.vpc-gateway: Refreshing state... [id=igw-03318eb30bf4708dd][0m
[0m[1mmodule.vpc.aws_default_security_group.vpc-sg[0]: Refreshing state... [id=sg-0a1702ac8c7354351][0m
[0m[1mmodule.network_loadbalancer.aws_security_group_rule.allow_inbound_from_target_groups[0]: Refreshing state... [id=sgrule-1232144127][0m
[0m[1mmodule.eks_cluster.aws_security_group_rule.egress[0]: Refreshing state... [id=sgrule-3407717028][0m
[0m[1mmodule.subnets.aws_route_table.public[0]: Refreshing state... [id=rtb-0c5db97be3f9d04ae][0m
[0m[1mmodule.subnets.aws_subnet.public[0]: Refreshing state... [id=subnet-06695fa20b2920179][0m
[0m[1mmodule.subnets.aws_route_table.private[1]: Refreshing state... [id=rtb-004f00b3e24bf43b5][0m
[0m[1mmodule.subnets.aws_route_table.private[2]: Refreshing state... [id=rtb-0f64f4969a80876a9][0m
[0m[1mmodule.subnets.aws_subnet.public[2]: Refreshing state... [id=subnet-0966ccddaff2e6775][0m
[0m[1mmodule.subnets.aws_subnet.public[1]: Refreshing state... [id=subnet-0799f9cb4a446e7b2][0m
[0m[1mmodule.subnets.aws_route_table.private[0]: Refreshing state... [id=rtb-0cefbc57ecd518789][0m
[0m[1mmodule.subnets.aws_subnet.private[0]: Refreshing state... [id=subnet-071b21a74db01d588][0m
[0m[1mmodule.subnets.aws_subnet.private[1]: Refreshing state... [id=subnet-00d6b63cb4ee5ba80][0m
[0m[1mmodule.subnets.aws_subnet.private[2]: Refreshing state... [id=subnet-0e639477a57b40d98][0m
[0m[1mmodule.subnets.aws_route.public[0]: Refreshing state... [id=r-rtb-0c5db97be3f9d04ae1080289494][0m
[0m[1mmodule.subnets.aws_route_table_association.public[0]: Refreshing state... [id=rtbassoc-0eba66594933b9ea4][0m
[0m[1mmodule.subnets.aws_network_acl.public[0]: Refreshing state... [id=acl-0d0f099e1a69792f9][0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Refreshing state... [id=arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:loadbalancer/net/nlb-greg-eks-demo/2a29f4e88d8aea42][0m
[0m[1mmodule.subnets.aws_route_table_association.public[1]: Refreshing state... [id=rtbassoc-0b7c7de72b983d261][0m
[0m[1mmodule.subnets.aws_route_table_association.public[2]: Refreshing state... [id=rtbassoc-0ecb0c7e2d82f590b][0m
[0m[1mmodule.subnets.aws_route_table_association.private[2]: Refreshing state... [id=rtbassoc-00775b61d85618183][0m
[0m[1mmodule.subnets.aws_route_table_association.private[0]: Refreshing state... [id=rtbassoc-092eef9d80ede0e84][0m
[0m[1mmodule.subnets.aws_route_table_association.private[1]: Refreshing state... [id=rtbassoc-015a500508529db99][0m
[0m[1mmodule.subnets.aws_network_acl.private[0]: Refreshing state... [id=acl-095a462a02129e12d][0m
[0m[1mmodule.network_loadbalancer.aws_lb_listener.nlb_listeners[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:listener/net/nlb-greg-eks-demo/2a29f4e88d8aea42/cbf964886114a77a][0m
[0m[1mmodule.route53.aws_route53_record.records[0]: Refreshing state... [id=Z07374591FC76OBQXEXUL_***_CNAME][0m
[0m[1mmodule.eks_cluster.aws_iam_role_policy_attachment.amazon_eks_cluster_policy[0]: Refreshing state... [id=iam-role-cluster-greg-eks-demo-20210720114618366500000001][0m
[0m[1mmodule.eks_cluster.aws_iam_role_policy_attachment.amazon_eks_service_policy[0]: Refreshing state... [id=iam-role-cluster-greg-eks-demo-20210720114618367200000002][0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Refreshing state... [id=greg-eks-demo][0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Refreshing state... [id=1147161951385146978][0m
[0m[1mmodule.eks_workers.aws_iam_role.default[0]: Refreshing state... [id=iam-role-worker-greg-eks-demo][0m
[0m[1mmodule.eks_workers.aws_security_group.default[0]: Refreshing state... [id=sg-03c2cb19fa6077c68][0m
[0m[1mmodule.eks_cluster.data.aws_eks_cluster_auth.eks[0]: Refreshing state...[0m
[0m[1mmodule.eks_workers.data.template_file.userdata[0]: Refreshing state...[0m
[0m[1mmodule.eks_cluster.data.aws_eks_cluster.eks[0]: Refreshing state...[0m
[0m[1mmodule.eks_workers.aws_security_group_rule.ingress_self[0]: Refreshing state... [id=sgrule-2295658281][0m
[0m[1mmodule.eks_workers.aws_security_group_rule.egress[0]: Refreshing state... [id=sgrule-3284730600][0m
[0m[1mmodule.eks_cluster.aws_security_group_rule.ingress_workers[0]: Refreshing state... [id=sgrule-2068099244][0m
[0m[1mmodule.eks_workers.aws_iam_instance_profile.default[0]: Refreshing state... [id=instance-profile-greg-eks-demo][0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_eks_cni_policy[0]: Refreshing state... [id=iam-role-worker-greg-eks-demo-20210720115532610100000001][0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_ec2_container_registry_read_only[0]: Refreshing state... [id=iam-role-worker-greg-eks-demo-20210720115532628200000003][0m
[0m[1mmodule.eks_cluster.kubernetes_config_map.aws_auth_ignore_changes[0]: Refreshing state... [id=kube-system/aws-auth][0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_eks_worker_node_policy[0]: Refreshing state... [id=iam-role-worker-greg-eks-demo-20210720115532613900000002][0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_launch_template.default[0]: Refreshing state... [id=lt-05b9f63ae2c24d1a4][0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Refreshing state... [id=asg-worker-greg-eks-demo][0m

------------------------------------------------------------------------
An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
  [31m-[0m destroy
[0m
Terraform will perform the following actions:

[1m  # module.eks_cluster.aws_eks_cluster.default[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_eks_cluster" "default" {
      [31m-[0m [0m[1m[0marn[0m[0m                       = "arn:aws:eks:ap-southeast-1:545573948854:cluster/greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mcertificate_authority[0m[0m     = [
          [31m-[0m [0m{
              [31m-[0m [0mdata = "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN5RENDQWJDZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRJeE1EY3lNREV4TlRJeE9Wb1hEVE14TURjeE9ERXhOVEl4T1Zvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBT0hSCitFSjJFelhUZSs0MmtXa2RsMFVxRStVR1BiMlkwSWdBdm5rYWZmZi8ydldSckcrVXh1ejdBQVNpUVlaZHJyc2UKczZGYm5YaXlEYnhRb2lkS1dyajlpQlMyTEtQdkdsSTNvLzlrRU1jMnQ5dUxKSFNnM1RESUcvbEhHa2RxbExZTQpaTkZRWnRVOHF5aTgxNzZCZXgyRklPelhPTGN5NU9VT2JuNDlwOTB1dlRscHRiTUw0WUwxS2tlaE1iMVFURTIyCkh4OHJDVk1iZjRqNVg3ejBnN1Q3c1B5b1BBK0xGZmZkaXVlSzJ1VGxUK3ZjVGZTOEV2akxwMDdmZWtoenlwNW8KemdOdVVSWVpHOXNmdUZmZEdiOHFqSE4zajY1NWwyYU13TFZ3ZStpbzJRL2dSZ2xqd21vR1VVSE5Rc21acTVHNwpDMXJxemhSQ0Ftd09FK2lUdTRrQ0F3RUFBYU1qTUNFd0RnWURWUjBQQVFIL0JBUURBZ0trTUE4R0ExVWRFd0VCCi93UUZNQU1CQWY4d0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dFQkFIRWo5bzkyT1RMc1ZWekNVZ2tGbTIzR2lVeVYKY0txTlQydTllT3FvMXpnOEJEM3JiMDh3dVVTU0VrUm5yN24ydVZjZ0FjRmpFWmRlcHZaMTlLWnFtZUhUdjV6KwpqeWJ5bHUzbkNCbFZsdUNsb1hnSjVlTFo4UGpwM3pnWVFKRkFKS2N3UVZ2QjZCSDF3NW1jMXZoSHNrQlJGaFJzCjFzaDB5VFdpS3M0ZFFPK0lTVUxUMTR6SE9YcUQxQ0Foalk2MElRRmYzU3FUamxkd3hmZUlRRSs5TGJQQWFtN0YKakMrV0V0emU0SUYxa1NBdlhDY2h0TUJFRURyV0RSaW5oV21kUXdtU2ZPYVJyZWJBb3R3OFVLMFkwMlpMSDllbgpFVVBNMkpXTEtNTTlLNzJhUWZoK1BIdDdvdUd4eVhibUd3azdrQ2NSVTRIcEhRVnUyRENvVUNaWm9hND0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo="
            },
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mcreated_at[0m[0m                = "2021-07-20 11:46:37.344 +0000 UTC" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0menabled_cluster_log_types[0m[0m = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mendpoint[0m[0m                  = "https://BE4627897DF9BBB54B2D131B49351B06.yl4.ap-southeast-1.eks.amazonaws.com" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                        = "greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0midentity[0m[0m                  = [
          [31m-[0m [0m{
              [31m-[0m [0moidc = [
                  [31m-[0m [0m{
                      [31m-[0m [0missuer = "https://oidc.eks.ap-southeast-1.amazonaws.com/id/BE4627897DF9BBB54B2D131B49351B06"
                    },
                ]
            },
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mname[0m[0m                      = "greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mplatform_version[0m[0m          = "eks.7" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mrole_arn[0m[0m                  = "arn:aws:iam::545573948854:role/iam-role-cluster-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mstatus[0m[0m                    = "ACTIVE" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m                      = {
          [31m-[0m [0m"Name"       = "greg-eks-demo"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m                  = {
          [31m-[0m [0m"Name"       = "greg-eks-demo"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mversion[0m[0m                   = "1.18" [90m->[0m [0m[90mnull[0m[0m

      [31m-[0m [0mkubernetes_network_config {
          [31m-[0m [0m[1m[0mservice_ipv4_cidr[0m[0m = "10.100.0.0/16" [90m->[0m [0m[90mnull[0m[0m
        }

      [31m-[0m [0mvpc_config {
          [31m-[0m [0m[1m[0mcluster_security_group_id[0m[0m = "sg-08af09ac7eac3131f" [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mendpoint_private_access[0m[0m   = false [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mendpoint_public_access[0m[0m    = true [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mpublic_access_cidrs[0m[0m       = [
              [31m-[0m [0m"0.0.0.0/0",
            ] [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0msecurity_group_ids[0m[0m        = [
              [31m-[0m [0m"sg-0a10d804513d451a9",
            ] [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0msubnet_ids[0m[0m                = [
              [31m-[0m [0m"subnet-06695fa20b2920179",
              [31m-[0m [0m"subnet-0799f9cb4a446e7b2",
              [31m-[0m [0m"subnet-0966ccddaff2e6775",
            ] [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mvpc_id[0m[0m                    = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
        }
    }

[1m  # module.eks_cluster.aws_iam_role.default[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_iam_role" "default" {
      [31m-[0m [0m[1m[0marn[0m[0m                   = "arn:aws:iam::545573948854:role/iam-role-cluster-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0massume_role_policy[0m[0m    = jsonencode(
            {
              [31m-[0m [0mStatement = [
                  [31m-[0m [0m{
                      [31m-[0m [0mAction    = "sts:AssumeRole"
                      [31m-[0m [0mEffect    = "Allow"
                      [31m-[0m [0mPrincipal = {
                          [31m-[0m [0mService = "eks.amazonaws.com"
                        }
                      [31m-[0m [0mSid       = ""
                    },
                ]
              [31m-[0m [0mVersion   = "2012-10-17"
            }
        ) [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mcreate_date[0m[0m           = "2021-07-20T11:46:14Z" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mforce_detach_policies[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                    = "iam-role-cluster-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmanaged_policy_arns[0m[0m   = [
          [31m-[0m [0m"arn:aws:iam::aws:policy/AmazonEKSClusterPolicy",
          [31m-[0m [0m"arn:aws:iam::aws:policy/AmazonEKSServicePolicy",
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmax_session_duration[0m[0m  = 3600 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mname[0m[0m                  = "iam-role-cluster-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mpath[0m[0m                  = "/" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m                  = {
          [31m-[0m [0m"Name"       = "iam-role-cluster-greg-eks-demo"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m              = {
          [31m-[0m [0m"Name"       = "iam-role-cluster-greg-eks-demo"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0munique_id[0m[0m             = "AROAX6BV5ZW3OWIBFJU27" [90m->[0m [0m[90mnull[0m[0m

      [31m-[0m [0minline_policy {}
    }

[1m  # module.eks_cluster.aws_iam_role_policy_attachment.amazon_eks_cluster_policy[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_iam_role_policy_attachment" "amazon_eks_cluster_policy" {
      [31m-[0m [0m[1m[0mid[0m[0m         = "iam-role-cluster-greg-eks-demo-20210720114618366500000001" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mpolicy_arn[0m[0m = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mrole[0m[0m       = "iam-role-cluster-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.eks_cluster.aws_iam_role_policy_attachment.amazon_eks_service_policy[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_iam_role_policy_attachment" "amazon_eks_service_policy" {
      [31m-[0m [0m[1m[0mid[0m[0m         = "iam-role-cluster-greg-eks-demo-20210720114618367200000002" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mpolicy_arn[0m[0m = "arn:aws:iam::aws:policy/AmazonEKSServicePolicy" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mrole[0m[0m       = "iam-role-cluster-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.eks_cluster.aws_security_group.default[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_security_group" "default" {
      [31m-[0m [0m[1m[0marn[0m[0m                    = "arn:aws:ec2:ap-southeast-1:545573948854:security-group/sg-0a10d804513d451a9" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdescription[0m[0m            = "Security Group for EKS cluster" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0megress[0m[0m                 = [
          [31m-[0m [0m{
              [31m-[0m [0mcidr_blocks      = [
                  [31m-[0m [0m"0.0.0.0/0",
                ]
              [31m-[0m [0mdescription      = "Allow all egress traffic"
              [31m-[0m [0mfrom_port        = 0
              [31m-[0m [0mipv6_cidr_blocks = []
              [31m-[0m [0mprefix_list_ids  = []
              [31m-[0m [0mprotocol         = "-1"
              [31m-[0m [0msecurity_groups  = []
              [31m-[0m [0mself             = false
              [31m-[0m [0mto_port          = 0
            },
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                     = "sg-0a10d804513d451a9" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mingress[0m[0m                = [
          [31m-[0m [0m{
              [31m-[0m [0mcidr_blocks      = []
              [31m-[0m [0mdescription      = "Allow the cluster to receive communication from the worker nodes"
              [31m-[0m [0mfrom_port        = 0
              [31m-[0m [0mipv6_cidr_blocks = []
              [31m-[0m [0mprefix_list_ids  = []
              [31m-[0m [0mprotocol         = "-1"
              [31m-[0m [0msecurity_groups  = [
                  [31m-[0m [0m"sg-03c2cb19fa6077c68",
                ]
              [31m-[0m [0mself             = false
              [31m-[0m [0mto_port          = 0
            },
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mname[0m[0m                   = "eks-cluster-sg-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mowner_id[0m[0m               = "545573948854" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mrevoke_rules_on_delete[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m                   = {
          [31m-[0m [0m"Name"       = "eks-cluster-sg-greg-eks-demo"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m               = {
          [31m-[0m [0m"Name"       = "eks-cluster-sg-greg-eks-demo"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m                 = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.eks_cluster.aws_security_group_rule.egress[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_security_group_rule" "egress" {
      [31m-[0m [0m[1m[0mcidr_blocks[0m[0m       = [
          [31m-[0m [0m"0.0.0.0/0",
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdescription[0m[0m       = "Allow all egress traffic" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mfrom_port[0m[0m         = 0 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                = "sgrule-3407717028" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mipv6_cidr_blocks[0m[0m  = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mprefix_list_ids[0m[0m   = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mprotocol[0m[0m          = "-1" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msecurity_group_id[0m[0m = "sg-0a10d804513d451a9" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mself[0m[0m              = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mto_port[0m[0m           = 0 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtype[0m[0m              = "egress" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.eks_cluster.aws_security_group_rule.ingress_workers[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_security_group_rule" "ingress_workers" {
      [31m-[0m [0m[1m[0mcidr_blocks[0m[0m              = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdescription[0m[0m              = "Allow the cluster to receive communication from the worker nodes" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mfrom_port[0m[0m                = 0 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                       = "sgrule-2068099244" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mipv6_cidr_blocks[0m[0m         = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mprefix_list_ids[0m[0m          = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mprotocol[0m[0m                 = "-1" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msecurity_group_id[0m[0m        = "sg-0a10d804513d451a9" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mself[0m[0m                     = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msource_security_group_id[0m[0m = "sg-03c2cb19fa6077c68" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mto_port[0m[0m                  = 0 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtype[0m[0m                     = "ingress" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.eks_cluster.kubernetes_config_map.aws_auth_ignore_changes[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "kubernetes_config_map" "aws_auth_ignore_changes" {
      [31m-[0m [0m[1m[0mbinary_data[0m[0m = {} [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdata[0m[0m        = {
          [31m-[0m [0m"mapAccounts" = jsonencode([])
          [31m-[0m [0m"mapRoles"    = <<~EOT
                - "groups":
                  - "system:bootstrappers"
                  - "system:nodes"
                  "rolearn": "arn:aws:iam::545573948854:role/iam-role-worker-greg-eks-demo"
                  "username": "system:node:{{EC2PrivateDNSName}}"
            EOT
          [31m-[0m [0m"mapUsers"    = jsonencode([])
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m          = "kube-system/aws-auth" [90m->[0m [0m[90mnull[0m[0m

      [31m-[0m [0mmetadata {
          [31m-[0m [0m[1m[0mannotations[0m[0m      = {} [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mgeneration[0m[0m       = 0 [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mlabels[0m[0m           = {} [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mname[0m[0m             = "aws-auth" [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mnamespace[0m[0m        = "kube-system" [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mresource_version[0m[0m = "897" [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0muid[0m[0m              = "4cd1232e-0a95-41ff-9b25-9510432d6ca6" [90m->[0m [0m[90mnull[0m[0m
        }
    }

[1m  # module.eks_cluster.null_resource.wait_for_cluster[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "null_resource" "wait_for_cluster" {
      [31m-[0m [0m[1m[0mid[0m[0m = "1147161951385146978" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.eks_workers.aws_iam_instance_profile.default[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_iam_instance_profile" "default" {
      [31m-[0m [0m[1m[0marn[0m[0m         = "arn:aws:iam::545573948854:instance-profile/instance-profile-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mcreate_date[0m[0m = "2021-07-20T11:55:32Z" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m          = "instance-profile-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mname[0m[0m        = "instance-profile-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mpath[0m[0m        = "/" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mrole[0m[0m        = "iam-role-worker-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m        = {} [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m    = {} [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0munique_id[0m[0m   = "AIPAX6BV5ZW3DCNTIYYDT" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.eks_workers.aws_iam_role.default[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_iam_role" "default" {
      [31m-[0m [0m[1m[0marn[0m[0m                   = "arn:aws:iam::545573948854:role/iam-role-worker-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0massume_role_policy[0m[0m    = jsonencode(
            {
              [31m-[0m [0mStatement = [
                  [31m-[0m [0m{
                      [31m-[0m [0mAction    = "sts:AssumeRole"
                      [31m-[0m [0mEffect    = "Allow"
                      [31m-[0m [0mPrincipal = {
                          [31m-[0m [0mService = "ec2.amazonaws.com"
                        }
                      [31m-[0m [0mSid       = ""
                    },
                ]
              [31m-[0m [0mVersion   = "2012-10-17"
            }
        ) [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mcreate_date[0m[0m           = "2021-07-20T11:55:28Z" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mforce_detach_policies[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                    = "iam-role-worker-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmanaged_policy_arns[0m[0m   = [
          [31m-[0m [0m"arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly",
          [31m-[0m [0m"arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy",
          [31m-[0m [0m"arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy",
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmax_session_duration[0m[0m  = 3600 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mname[0m[0m                  = "iam-role-worker-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mpath[0m[0m                  = "/" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m                  = {
          [31m-[0m [0m"Name"       = "iam-role-worker-greg-eks-demo"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m              = {
          [31m-[0m [0m"Name"       = "iam-role-worker-greg-eks-demo"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0munique_id[0m[0m             = "AROAX6BV5ZW3ORY5DGGNG" [90m->[0m [0m[90mnull[0m[0m

      [31m-[0m [0minline_policy {}
    }

[1m  # module.eks_workers.aws_iam_role_policy_attachment.amazon_ec2_container_registry_read_only[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_iam_role_policy_attachment" "amazon_ec2_container_registry_read_only" {
      [31m-[0m [0m[1m[0mid[0m[0m         = "iam-role-worker-greg-eks-demo-20210720115532628200000003" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mpolicy_arn[0m[0m = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mrole[0m[0m       = "iam-role-worker-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.eks_workers.aws_iam_role_policy_attachment.amazon_eks_cni_policy[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_iam_role_policy_attachment" "amazon_eks_cni_policy" {
      [31m-[0m [0m[1m[0mid[0m[0m         = "iam-role-worker-greg-eks-demo-20210720115532610100000001" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mpolicy_arn[0m[0m = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mrole[0m[0m       = "iam-role-worker-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.eks_workers.aws_iam_role_policy_attachment.amazon_eks_worker_node_policy[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_iam_role_policy_attachment" "amazon_eks_worker_node_policy" {
      [31m-[0m [0m[1m[0mid[0m[0m         = "iam-role-worker-greg-eks-demo-20210720115532613900000002" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mpolicy_arn[0m[0m = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mrole[0m[0m       = "iam-role-worker-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.eks_workers.aws_security_group.default[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_security_group" "default" {
      [31m-[0m [0m[1m[0marn[0m[0m                    = "arn:aws:ec2:ap-southeast-1:545573948854:security-group/sg-03c2cb19fa6077c68" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdescription[0m[0m            = "Security Group for EKS worker nodes" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0megress[0m[0m                 = [
          [31m-[0m [0m{
              [31m-[0m [0mcidr_blocks      = [
                  [31m-[0m [0m"0.0.0.0/0",
                ]
              [31m-[0m [0mdescription      = "Allow all egress traffic"
              [31m-[0m [0mfrom_port        = 0
              [31m-[0m [0mipv6_cidr_blocks = []
              [31m-[0m [0mprefix_list_ids  = []
              [31m-[0m [0mprotocol         = "-1"
              [31m-[0m [0msecurity_groups  = []
              [31m-[0m [0mself             = false
              [31m-[0m [0mto_port          = 0
            },
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                     = "sg-03c2cb19fa6077c68" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mingress[0m[0m                = [
          [31m-[0m [0m{
              [31m-[0m [0mcidr_blocks      = []
              [31m-[0m [0mdescription      = "Allow nodes to communicate with each other"
              [31m-[0m [0mfrom_port        = 0
              [31m-[0m [0mipv6_cidr_blocks = []
              [31m-[0m [0mprefix_list_ids  = []
              [31m-[0m [0mprotocol         = "-1"
              [31m-[0m [0msecurity_groups  = []
              [31m-[0m [0mself             = true
              [31m-[0m [0mto_port          = 0
            },
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mname[0m[0m                   = "greg-eks-demo-sg" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mowner_id[0m[0m               = "545573948854" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mrevoke_rules_on_delete[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m                   = {
          [31m-[0m [0m"Name"       = "greg-eks-demo-sg"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m               = {
          [31m-[0m [0m"Name"       = "greg-eks-demo-sg"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m                 = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.eks_workers.aws_security_group_rule.egress[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_security_group_rule" "egress" {
      [31m-[0m [0m[1m[0mcidr_blocks[0m[0m       = [
          [31m-[0m [0m"0.0.0.0/0",
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdescription[0m[0m       = "Allow all egress traffic" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mfrom_port[0m[0m         = 0 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                = "sgrule-3284730600" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mipv6_cidr_blocks[0m[0m  = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mprefix_list_ids[0m[0m   = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mprotocol[0m[0m          = "-1" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msecurity_group_id[0m[0m = "sg-03c2cb19fa6077c68" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mself[0m[0m              = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mto_port[0m[0m           = 0 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtype[0m[0m              = "egress" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.eks_workers.aws_security_group_rule.ingress_self[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_security_group_rule" "ingress_self" {
      [31m-[0m [0m[1m[0mcidr_blocks[0m[0m              = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdescription[0m[0m              = "Allow nodes to communicate with each other" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mfrom_port[0m[0m                = 0 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                       = "sgrule-2295658281" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mipv6_cidr_blocks[0m[0m         = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mprefix_list_ids[0m[0m          = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mprotocol[0m[0m                 = "-1" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msecurity_group_id[0m[0m        = "sg-03c2cb19fa6077c68" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mself[0m[0m                     = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msource_security_group_id[0m[0m = "sg-03c2cb19fa6077c68" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mto_port[0m[0m                  = 0 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtype[0m[0m                     = "ingress" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.network_loadbalancer.aws_lb.nlb[0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_lb" "nlb" {
      [31m-[0m [0m[1m[0marn[0m[0m                              = "arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:loadbalancer/net/nlb-greg-eks-demo/2a29f4e88d8aea42" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0marn_suffix[0m[0m                       = "net/nlb-greg-eks-demo/2a29f4e88d8aea42" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdns_name[0m[0m                         = "nlb-greg-eks-demo-2a29f4e88d8aea42.elb.ap-southeast-1.amazonaws.com" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0menable_cross_zone_load_balancing[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0menable_deletion_protection[0m[0m       = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                               = "arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:loadbalancer/net/nlb-greg-eks-demo/2a29f4e88d8aea42" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0minternal[0m[0m                         = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mip_address_type[0m[0m                  = "ipv4" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mload_balancer_type[0m[0m               = "network" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mname[0m[0m                             = "nlb-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msecurity_groups[0m[0m                  = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msubnets[0m[0m                          = [
          [31m-[0m [0m"subnet-06695fa20b2920179",
          [31m-[0m [0m"subnet-0799f9cb4a446e7b2",
          [31m-[0m [0m"subnet-0966ccddaff2e6775",
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m                             = {} [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m                         = {} [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m                           = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mzone_id[0m[0m                          = "ZKVM4W9LS7TM" [90m->[0m [0m[90mnull[0m[0m

      [31m-[0m [0maccess_logs {
          [31m-[0m [0m[1m[0menabled[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
        }

      [31m-[0m [0msubnet_mapping {
          [31m-[0m [0m[1m[0msubnet_id[0m[0m = "subnet-06695fa20b2920179" [90m->[0m [0m[90mnull[0m[0m
        }
      [31m-[0m [0msubnet_mapping {
          [31m-[0m [0m[1m[0msubnet_id[0m[0m = "subnet-0799f9cb4a446e7b2" [90m->[0m [0m[90mnull[0m[0m
        }
      [31m-[0m [0msubnet_mapping {
          [31m-[0m [0m[1m[0msubnet_id[0m[0m = "subnet-0966ccddaff2e6775" [90m->[0m [0m[90mnull[0m[0m
        }
    }

[1m  # module.network_loadbalancer.aws_lb_listener.nlb_listeners[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_lb_listener" "nlb_listeners" {
      [31m-[0m [0m[1m[0marn[0m[0m               = "arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:listener/net/nlb-greg-eks-demo/2a29f4e88d8aea42/cbf964886114a77a" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                = "arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:listener/net/nlb-greg-eks-demo/2a29f4e88d8aea42/cbf964886114a77a" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mload_balancer_arn[0m[0m = "arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:loadbalancer/net/nlb-greg-eks-demo/2a29f4e88d8aea42" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mport[0m[0m              = 80 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mprotocol[0m[0m          = "TCP" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m              = {} [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m          = {} [90m->[0m [0m[90mnull[0m[0m

      [31m-[0m [0mdefault_action {
          [31m-[0m [0m[1m[0morder[0m[0m            = 1 [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mtarget_group_arn[0m[0m = "arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:targetgroup/tg-greg-eks-demo-to-30080/3bd4268aabf6caea" [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mtype[0m[0m             = "forward" [90m->[0m [0m[90mnull[0m[0m
        }
    }

[1m  # module.network_loadbalancer.aws_lb_target_group.target_groups[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_lb_target_group" "target_groups" {
      [31m-[0m [0m[1m[0marn[0m[0m                                = "arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:targetgroup/tg-greg-eks-demo-to-30080/3bd4268aabf6caea" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0marn_suffix[0m[0m                         = "targetgroup/tg-greg-eks-demo-to-30080/3bd4268aabf6caea" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mderegistration_delay[0m[0m               = 300 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                                 = "arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:targetgroup/tg-greg-eks-demo-to-30080/3bd4268aabf6caea" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mlambda_multi_value_headers_enabled[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mname[0m[0m                               = "tg-greg-eks-demo-to-30080" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mport[0m[0m                               = 30080 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mpreserve_client_ip[0m[0m                 = "true" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mprotocol[0m[0m                           = "TCP" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mproxy_protocol_v2[0m[0m                  = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mslow_start[0m[0m                         = 0 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m                               = {} [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m                           = {} [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtarget_type[0m[0m                        = "instance" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m                             = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m

      [31m-[0m [0mhealth_check {
          [31m-[0m [0m[1m[0menabled[0m[0m             = true [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mhealthy_threshold[0m[0m   = 3 [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0minterval[0m[0m            = 30 [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mport[0m[0m                = "traffic-port" [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mprotocol[0m[0m            = "TCP" [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mtimeout[0m[0m             = 10 [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0munhealthy_threshold[0m[0m = 3 [90m->[0m [0m[90mnull[0m[0m
        }

      [31m-[0m [0mstickiness {
          [31m-[0m [0m[1m[0mcookie_duration[0m[0m = 0 [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0menabled[0m[0m         = false [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mtype[0m[0m            = "source_ip" [90m->[0m [0m[90mnull[0m[0m
        }
    }

[1m  # module.network_loadbalancer.aws_security_group.sg_nlb_k8s[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_security_group" "sg_nlb_k8s" {
      [31m-[0m [0m[1m[0marn[0m[0m                    = "arn:aws:ec2:ap-southeast-1:545573948854:security-group/sg-0ef9371f1f9fbf028" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdescription[0m[0m            = "Allow traffic from NLB to reach K8S instances" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0megress[0m[0m                 = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                     = "sg-0ef9371f1f9fbf028" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mingress[0m[0m                = [
          [31m-[0m [0m{
              [31m-[0m [0mcidr_blocks      = [
                  [31m-[0m [0m"0.0.0.0/0",
                ]
              [31m-[0m [0mdescription      = "Allow Worker nodes to accept request from LB"
              [31m-[0m [0mfrom_port        = 0
              [31m-[0m [0mipv6_cidr_blocks = []
              [31m-[0m [0mprefix_list_ids  = []
              [31m-[0m [0mprotocol         = "tcp"
              [31m-[0m [0msecurity_groups  = []
              [31m-[0m [0mself             = false
              [31m-[0m [0mto_port          = 65535
            },
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mname[0m[0m                   = "greg-eks-demo-nlb-worker-access" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mowner_id[0m[0m               = "545573948854" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mrevoke_rules_on_delete[0m[0m = true [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m                   = {} [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m               = {} [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m                 = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.network_loadbalancer.aws_security_group_rule.allow_inbound_from_target_groups[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_security_group_rule" "allow_inbound_from_target_groups" {
      [31m-[0m [0m[1m[0mcidr_blocks[0m[0m       = [
          [31m-[0m [0m"0.0.0.0/0",
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdescription[0m[0m       = "Allow Worker nodes to accept request from LB" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mfrom_port[0m[0m         = 0 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                = "sgrule-1232144127" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mipv6_cidr_blocks[0m[0m  = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mprefix_list_ids[0m[0m   = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mprotocol[0m[0m          = "tcp" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msecurity_group_id[0m[0m = "sg-0ef9371f1f9fbf028" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mself[0m[0m              = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mto_port[0m[0m           = 65535 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtype[0m[0m              = "ingress" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.route53.aws_route53_record.records[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_route53_record" "records" {
      [31m-[0m [0m[1m[0mfqdn[0m[0m    = "greg215.****" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m      = "Z07374591FC76OBQXEXUL_****_CNAME" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mname[0m[0m    = "greg215.****" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mrecords[0m[0m = [
          [31m-[0m [0m"nlb-greg-eks-demo-2a29f4e88d8aea42.elb.ap-southeast-1.amazonaws.com",
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mttl[0m[0m     = 300 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtype[0m[0m    = "CNAME" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mzone_id[0m[0m = "Z07374591FC76OBQXEXUL" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_network_acl.private[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_network_acl" "private" {
      [31m-[0m [0m[1m[0marn[0m[0m        = "arn:aws:ec2:ap-southeast-1:545573948854:network-acl/acl-095a462a02129e12d" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0megress[0m[0m     = [
          [31m-[0m [0m{
              [31m-[0m [0maction          = "allow"
              [31m-[0m [0mcidr_block      = "0.0.0.0/0"
              [31m-[0m [0mfrom_port       = 0
              [31m-[0m [0micmp_code       = 0
              [31m-[0m [0micmp_type       = 0
              [31m-[0m [0mipv6_cidr_block = ""
              [31m-[0m [0mprotocol        = "-1"
              [31m-[0m [0mrule_no         = 100
              [31m-[0m [0mto_port         = 0
            },
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m         = "acl-095a462a02129e12d" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mingress[0m[0m    = [
          [31m-[0m [0m{
              [31m-[0m [0maction          = "allow"
              [31m-[0m [0mcidr_block      = "0.0.0.0/0"
              [31m-[0m [0mfrom_port       = 0
              [31m-[0m [0micmp_code       = 0
              [31m-[0m [0micmp_type       = 0
              [31m-[0m [0mipv6_cidr_block = ""
              [31m-[0m [0mprotocol        = "-1"
              [31m-[0m [0mrule_no         = 100
              [31m-[0m [0mto_port         = 0
            },
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mowner_id[0m[0m   = "545573948854" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msubnet_ids[0m[0m = [
          [31m-[0m [0m"subnet-00d6b63cb4ee5ba80",
          [31m-[0m [0m"subnet-071b21a74db01d588",
          [31m-[0m [0m"subnet-0e639477a57b40d98",
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m       = {
          [31m-[0m [0m"Name"       = "eks-subnet-private-acl"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m   = {
          [31m-[0m [0m"Name"       = "eks-subnet-private-acl"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m     = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_network_acl.public[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_network_acl" "public" {
      [31m-[0m [0m[1m[0marn[0m[0m        = "arn:aws:ec2:ap-southeast-1:545573948854:network-acl/acl-0d0f099e1a69792f9" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0megress[0m[0m     = [
          [31m-[0m [0m{
              [31m-[0m [0maction          = "allow"
              [31m-[0m [0mcidr_block      = "0.0.0.0/0"
              [31m-[0m [0mfrom_port       = 0
              [31m-[0m [0micmp_code       = 0
              [31m-[0m [0micmp_type       = 0
              [31m-[0m [0mipv6_cidr_block = ""
              [31m-[0m [0mprotocol        = "-1"
              [31m-[0m [0mrule_no         = 100
              [31m-[0m [0mto_port         = 0
            },
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m         = "acl-0d0f099e1a69792f9" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mingress[0m[0m    = [
          [31m-[0m [0m{
              [31m-[0m [0maction          = "allow"
              [31m-[0m [0mcidr_block      = "0.0.0.0/0"
              [31m-[0m [0mfrom_port       = 0
              [31m-[0m [0micmp_code       = 0
              [31m-[0m [0micmp_type       = 0
              [31m-[0m [0mipv6_cidr_block = ""
              [31m-[0m [0mprotocol        = "-1"
              [31m-[0m [0mrule_no         = 100
              [31m-[0m [0mto_port         = 0
            },
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mowner_id[0m[0m   = "545573948854" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msubnet_ids[0m[0m = [
          [31m-[0m [0m"subnet-06695fa20b2920179",
          [31m-[0m [0m"subnet-0799f9cb4a446e7b2",
          [31m-[0m [0m"subnet-0966ccddaff2e6775",
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m       = {
          [31m-[0m [0m"Name"       = "eks-subnet-public-acl"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m   = {
          [31m-[0m [0m"Name"       = "eks-subnet-public-acl"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m     = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_route.public[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_route" "public" {
      [31m-[0m [0m[1m[0mdestination_cidr_block[0m[0m = "0.0.0.0/0" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mgateway_id[0m[0m             = "igw-03318eb30bf4708dd" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                     = "r-rtb-0c5db97be3f9d04ae1080289494" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0morigin[0m[0m                 = "CreateRoute" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mroute_table_id[0m[0m         = "rtb-0c5db97be3f9d04ae" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mstate[0m[0m                  = "active" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_route_table.private[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_route_table" "private" {
      [31m-[0m [0m[1m[0marn[0m[0m              = "arn:aws:ec2:ap-southeast-1:545573948854:route-table/rtb-0cefbc57ecd518789" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m               = "rtb-0cefbc57ecd518789" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mowner_id[0m[0m         = "545573948854" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mpropagating_vgws[0m[0m = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mroute[0m[0m            = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m             = {
          [31m-[0m [0m"Name"                                = "eks-subnet-private-route-table"
          [31m-[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [31m-[0m [0m"managed_by"                          = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m         = {
          [31m-[0m [0m"Name"                                = "eks-subnet-private-route-table"
          [31m-[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [31m-[0m [0m"managed_by"                          = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m           = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_route_table.private[1][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_route_table" "private" {
      [31m-[0m [0m[1m[0marn[0m[0m              = "arn:aws:ec2:ap-southeast-1:545573948854:route-table/rtb-004f00b3e24bf43b5" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m               = "rtb-004f00b3e24bf43b5" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mowner_id[0m[0m         = "545573948854" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mpropagating_vgws[0m[0m = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mroute[0m[0m            = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m             = {
          [31m-[0m [0m"Name"                                = "eks-subnet-private-route-table"
          [31m-[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [31m-[0m [0m"managed_by"                          = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m         = {
          [31m-[0m [0m"Name"                                = "eks-subnet-private-route-table"
          [31m-[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [31m-[0m [0m"managed_by"                          = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m           = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_route_table.private[2][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_route_table" "private" {
      [31m-[0m [0m[1m[0marn[0m[0m              = "arn:aws:ec2:ap-southeast-1:545573948854:route-table/rtb-0f64f4969a80876a9" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m               = "rtb-0f64f4969a80876a9" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mowner_id[0m[0m         = "545573948854" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mpropagating_vgws[0m[0m = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mroute[0m[0m            = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m             = {
          [31m-[0m [0m"Name"                                = "eks-subnet-private-route-table"
          [31m-[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [31m-[0m [0m"managed_by"                          = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m         = {
          [31m-[0m [0m"Name"                                = "eks-subnet-private-route-table"
          [31m-[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [31m-[0m [0m"managed_by"                          = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m           = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_route_table.public[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_route_table" "public" {
      [31m-[0m [0m[1m[0marn[0m[0m              = "arn:aws:ec2:ap-southeast-1:545573948854:route-table/rtb-0c5db97be3f9d04ae" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m               = "rtb-0c5db97be3f9d04ae" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mowner_id[0m[0m         = "545573948854" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mpropagating_vgws[0m[0m = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mroute[0m[0m            = [
          [31m-[0m [0m{
              [31m-[0m [0mcarrier_gateway_id         = ""
              [31m-[0m [0mcidr_block                 = "0.0.0.0/0"
              [31m-[0m [0mdestination_prefix_list_id = ""
              [31m-[0m [0megress_only_gateway_id     = ""
              [31m-[0m [0mgateway_id                 = "igw-03318eb30bf4708dd"
              [31m-[0m [0minstance_id                = ""
              [31m-[0m [0mipv6_cidr_block            = ""
              [31m-[0m [0mlocal_gateway_id           = ""
              [31m-[0m [0mnat_gateway_id             = ""
              [31m-[0m [0mnetwork_interface_id       = ""
              [31m-[0m [0mtransit_gateway_id         = ""
              [31m-[0m [0mvpc_endpoint_id            = ""
              [31m-[0m [0mvpc_peering_connection_id  = ""
            },
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m             = {
          [31m-[0m [0m"Name"       = "eks-subnet-public-route-table"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m         = {
          [31m-[0m [0m"Name"       = "eks-subnet-public-route-table"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m           = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_route_table_association.private[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_route_table_association" "private" {
      [31m-[0m [0m[1m[0mid[0m[0m             = "rtbassoc-092eef9d80ede0e84" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mroute_table_id[0m[0m = "rtb-0cefbc57ecd518789" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msubnet_id[0m[0m      = "subnet-071b21a74db01d588" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_route_table_association.private[1][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_route_table_association" "private" {
      [31m-[0m [0m[1m[0mid[0m[0m             = "rtbassoc-015a500508529db99" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mroute_table_id[0m[0m = "rtb-004f00b3e24bf43b5" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msubnet_id[0m[0m      = "subnet-00d6b63cb4ee5ba80" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_route_table_association.private[2][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_route_table_association" "private" {
      [31m-[0m [0m[1m[0mid[0m[0m             = "rtbassoc-00775b61d85618183" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mroute_table_id[0m[0m = "rtb-0f64f4969a80876a9" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msubnet_id[0m[0m      = "subnet-0e639477a57b40d98" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_route_table_association.public[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_route_table_association" "public" {
      [31m-[0m [0m[1m[0mid[0m[0m             = "rtbassoc-0eba66594933b9ea4" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mroute_table_id[0m[0m = "rtb-0c5db97be3f9d04ae" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msubnet_id[0m[0m      = "subnet-06695fa20b2920179" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_route_table_association.public[1][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_route_table_association" "public" {
      [31m-[0m [0m[1m[0mid[0m[0m             = "rtbassoc-0b7c7de72b983d261" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mroute_table_id[0m[0m = "rtb-0c5db97be3f9d04ae" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msubnet_id[0m[0m      = "subnet-0799f9cb4a446e7b2" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_route_table_association.public[2][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_route_table_association" "public" {
      [31m-[0m [0m[1m[0mid[0m[0m             = "rtbassoc-0ecb0c7e2d82f590b" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mroute_table_id[0m[0m = "rtb-0c5db97be3f9d04ae" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msubnet_id[0m[0m      = "subnet-0966ccddaff2e6775" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_subnet.private[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_subnet" "private" {
      [31m-[0m [0m[1m[0marn[0m[0m                             = "arn:aws:ec2:ap-southeast-1:545573948854:subnet/subnet-071b21a74db01d588" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0massign_ipv6_address_on_creation[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mavailability_zone[0m[0m               = "ap-southeast-1a" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mavailability_zone_id[0m[0m            = "apse1-az2" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mcidr_block[0m[0m                      = "172.31.208.0/25" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                              = "subnet-071b21a74db01d588" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmap_customer_owned_ip_on_launch[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmap_public_ip_on_launch[0m[0m         = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mowner_id[0m[0m                        = "545573948854" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m                            = {
          [31m-[0m [0m"Name"       = "eks-subnet-private"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m                        = {
          [31m-[0m [0m"Name"       = "eks-subnet-private"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m                          = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_subnet.private[1][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_subnet" "private" {
      [31m-[0m [0m[1m[0marn[0m[0m                             = "arn:aws:ec2:ap-southeast-1:545573948854:subnet/subnet-00d6b63cb4ee5ba80" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0massign_ipv6_address_on_creation[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mavailability_zone[0m[0m               = "ap-southeast-1b" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mavailability_zone_id[0m[0m            = "apse1-az1" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mcidr_block[0m[0m                      = "172.31.208.128/25" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                              = "subnet-00d6b63cb4ee5ba80" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmap_customer_owned_ip_on_launch[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmap_public_ip_on_launch[0m[0m         = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mowner_id[0m[0m                        = "545573948854" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m                            = {
          [31m-[0m [0m"Name"       = "eks-subnet-private"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m                        = {
          [31m-[0m [0m"Name"       = "eks-subnet-private"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m                          = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_subnet.private[2][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_subnet" "private" {
      [31m-[0m [0m[1m[0marn[0m[0m                             = "arn:aws:ec2:ap-southeast-1:545573948854:subnet/subnet-0e639477a57b40d98" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0massign_ipv6_address_on_creation[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mavailability_zone[0m[0m               = "ap-southeast-1c" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mavailability_zone_id[0m[0m            = "apse1-az3" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mcidr_block[0m[0m                      = "172.31.209.0/25" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                              = "subnet-0e639477a57b40d98" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmap_customer_owned_ip_on_launch[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmap_public_ip_on_launch[0m[0m         = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mowner_id[0m[0m                        = "545573948854" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m                            = {
          [31m-[0m [0m"Name"       = "eks-subnet-private"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m                        = {
          [31m-[0m [0m"Name"       = "eks-subnet-private"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m                          = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_subnet.public[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_subnet" "public" {
      [31m-[0m [0m[1m[0marn[0m[0m                             = "arn:aws:ec2:ap-southeast-1:545573948854:subnet/subnet-06695fa20b2920179" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0massign_ipv6_address_on_creation[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mavailability_zone[0m[0m               = "ap-southeast-1a" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mavailability_zone_id[0m[0m            = "apse1-az2" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mcidr_block[0m[0m                      = "172.31.209.128/25" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                              = "subnet-06695fa20b2920179" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmap_customer_owned_ip_on_launch[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmap_public_ip_on_launch[0m[0m         = true [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mowner_id[0m[0m                        = "545573948854" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m                            = {
          [31m-[0m [0m"Name"                                = "eks-subnet-public"
          [31m-[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [31m-[0m [0m"managed_by"                          = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m                        = {
          [31m-[0m [0m"Name"                                = "eks-subnet-public"
          [31m-[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [31m-[0m [0m"managed_by"                          = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m                          = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_subnet.public[1][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_subnet" "public" {
      [31m-[0m [0m[1m[0marn[0m[0m                             = "arn:aws:ec2:ap-southeast-1:545573948854:subnet/subnet-0799f9cb4a446e7b2" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0massign_ipv6_address_on_creation[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mavailability_zone[0m[0m               = "ap-southeast-1b" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mavailability_zone_id[0m[0m            = "apse1-az1" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mcidr_block[0m[0m                      = "172.31.210.0/25" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                              = "subnet-0799f9cb4a446e7b2" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmap_customer_owned_ip_on_launch[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmap_public_ip_on_launch[0m[0m         = true [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mowner_id[0m[0m                        = "545573948854" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m                            = {
          [31m-[0m [0m"Name"                                = "eks-subnet-public"
          [31m-[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [31m-[0m [0m"managed_by"                          = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m                        = {
          [31m-[0m [0m"Name"                                = "eks-subnet-public"
          [31m-[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [31m-[0m [0m"managed_by"                          = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m                          = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.subnets.aws_subnet.public[2][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_subnet" "public" {
      [31m-[0m [0m[1m[0marn[0m[0m                             = "arn:aws:ec2:ap-southeast-1:545573948854:subnet/subnet-0966ccddaff2e6775" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0massign_ipv6_address_on_creation[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mavailability_zone[0m[0m               = "ap-southeast-1c" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mavailability_zone_id[0m[0m            = "apse1-az3" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mcidr_block[0m[0m                      = "172.31.210.128/25" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                              = "subnet-0966ccddaff2e6775" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmap_customer_owned_ip_on_launch[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmap_public_ip_on_launch[0m[0m         = true [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mowner_id[0m[0m                        = "545573948854" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m                            = {
          [31m-[0m [0m"Name"                                = "eks-subnet-public"
          [31m-[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [31m-[0m [0m"managed_by"                          = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m                        = {
          [31m-[0m [0m"Name"                                = "eks-subnet-public"
          [31m-[0m [0m"kubernetes.io/cluster/greg-eks-demo" = "shared"
          [31m-[0m [0m"managed_by"                          = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m                          = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.vpc.aws_default_security_group.vpc-sg[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_default_security_group" "vpc-sg" {
      [31m-[0m [0m[1m[0marn[0m[0m                    = "arn:aws:ec2:ap-southeast-1:545573948854:security-group/sg-0a1702ac8c7354351" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdescription[0m[0m            = "default VPC security group" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0megress[0m[0m                 = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                     = "sg-0a1702ac8c7354351" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mingress[0m[0m                = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mname[0m[0m                   = "default" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mowner_id[0m[0m               = "545573948854" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mrevoke_rules_on_delete[0m[0m = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m                   = {
          [31m-[0m [0m"Name" = "default-sg-greg-eks-demo"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m               = {
          [31m-[0m [0m"Name" = "default-sg-greg-eks-demo"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m                 = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.vpc.aws_internet_gateway.vpc-gateway[0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_internet_gateway" "vpc-gateway" {
      [31m-[0m [0m[1m[0marn[0m[0m      = "arn:aws:ec2:ap-southeast-1:545573948854:internet-gateway/igw-03318eb30bf4708dd" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m       = "igw-03318eb30bf4708dd" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mowner_id[0m[0m = "545573948854" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m     = {
          [31m-[0m [0m"Name"       = "gateway-greg-eks-demo"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m = {
          [31m-[0m [0m"Name"       = "gateway-greg-eks-demo"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_id[0m[0m   = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.vpc.aws_vpc.vpc[0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_vpc" "vpc" {
      [31m-[0m [0m[1m[0marn[0m[0m                              = "arn:aws:ec2:ap-southeast-1:545573948854:vpc/vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0massign_generated_ipv6_cidr_block[0m[0m = true [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mcidr_block[0m[0m                       = "172.31.208.0/22" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdefault_network_acl_id[0m[0m           = "acl-0b52dc353b64c207e" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdefault_route_table_id[0m[0m           = "rtb-0579fd36d99421b50" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdefault_security_group_id[0m[0m        = "sg-0a1702ac8c7354351" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdhcp_options_id[0m[0m                  = "dopt-a701c5c1" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0menable_classiclink[0m[0m               = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0menable_classiclink_dns_support[0m[0m   = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0menable_dns_hostnames[0m[0m             = true [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0menable_dns_support[0m[0m               = true [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                               = "vpc-043e27750348e6da7" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0minstance_tenancy[0m[0m                 = "default" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mipv6_association_id[0m[0m              = "vpc-cidr-assoc-0e47243e1aeef3b85" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mipv6_cidr_block[0m[0m                  = "2406:da18:a43:a700::/56" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmain_route_table_id[0m[0m              = "rtb-0579fd36d99421b50" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mowner_id[0m[0m                         = "545573948854" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m                             = {
          [31m-[0m [0m"Name"       = "vpc-greg-eks-demo"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m                         = {
          [31m-[0m [0m"Name"       = "vpc-greg-eks-demo"
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
    }

[1m  # module.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_autoscaling_group" "default" {
      [31m-[0m [0m[1m[0marn[0m[0m                       = "arn:aws:autoscaling:ap-southeast-1:545573948854:autoScalingGroup:75426e3f-ba5d-4144-872c-741eebf90b2b:autoScalingGroupName/asg-worker-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mavailability_zones[0m[0m        = [
          [31m-[0m [0m"ap-southeast-1a",
          [31m-[0m [0m"ap-southeast-1b",
          [31m-[0m [0m"ap-southeast-1c",
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mcapacity_rebalance[0m[0m        = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdefault_cooldown[0m[0m          = 300 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdesired_capacity[0m[0m          = 2 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0menabled_metrics[0m[0m           = [
          [31m-[0m [0m"GroupDesiredCapacity",
          [31m-[0m [0m"GroupInServiceInstances",
          [31m-[0m [0m"GroupMaxSize",
          [31m-[0m [0m"GroupMinSize",
          [31m-[0m [0m"GroupPendingInstances",
          [31m-[0m [0m"GroupStandbyInstances",
          [31m-[0m [0m"GroupTerminatingInstances",
          [31m-[0m [0m"GroupTotalInstances",
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mforce_delete[0m[0m              = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mforce_delete_warm_pool[0m[0m    = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mhealth_check_grace_period[0m[0m = 300 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mhealth_check_type[0m[0m         = "EC2" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                        = "asg-worker-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mload_balancers[0m[0m            = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmax_instance_lifetime[0m[0m     = 0 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmax_size[0m[0m                  = 5 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmetrics_granularity[0m[0m       = "1Minute" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmin_elb_capacity[0m[0m          = 0 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mmin_size[0m[0m                  = 2 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mname[0m[0m                      = "asg-worker-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mprotect_from_scale_in[0m[0m     = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mservice_linked_role_arn[0m[0m   = "arn:aws:iam::545573948854:role/aws-service-role/autoscaling.amazonaws.com/AWSServiceRoleForAutoScaling" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msuspended_processes[0m[0m       = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtarget_group_arns[0m[0m         = [
          [31m-[0m [0m"arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:targetgroup/tg-greg-eks-demo-to-30080/3bd4268aabf6caea",
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtermination_policies[0m[0m      = [
          [31m-[0m [0m"Default",
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_zone_identifier[0m[0m       = [
          [31m-[0m [0m"subnet-06695fa20b2920179",
          [31m-[0m [0m"subnet-0799f9cb4a446e7b2",
          [31m-[0m [0m"subnet-0966ccddaff2e6775",
        ] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mwait_for_capacity_timeout[0m[0m = "10m" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mwait_for_elb_capacity[0m[0m     = 0 [90m->[0m [0m[90mnull[0m[0m

      [31m-[0m [0mlaunch_template {
          [31m-[0m [0m[1m[0mid[0m[0m      = "lt-05b9f63ae2c24d1a4" [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mname[0m[0m    = "asg-launch-tem-asg-worker-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mversion[0m[0m = "$Latest" [90m->[0m [0m[90mnull[0m[0m
        }

      [31m-[0m [0mtag {
          [31m-[0m [0m[1m[0mkey[0m[0m                 = "Name" [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mpropagate_at_launch[0m[0m = true [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mvalue[0m[0m               = "asg-worker-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
        }
      [31m-[0m [0mtag {
          [31m-[0m [0m[1m[0mkey[0m[0m                 = "Snapshot" [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mpropagate_at_launch[0m[0m = true [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mvalue[0m[0m               = "true" [90m->[0m [0m[90mnull[0m[0m
        }
      [31m-[0m [0mtag {
          [31m-[0m [0m[1m[0mkey[0m[0m                 = "kubernetes.io/cluster/asg-worker-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mpropagate_at_launch[0m[0m = true [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mvalue[0m[0m               = "owned" [90m->[0m [0m[90mnull[0m[0m
        }
      [31m-[0m [0mtag {
          [31m-[0m [0m[1m[0mkey[0m[0m                 = "managed_by" [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mpropagate_at_launch[0m[0m = true [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mvalue[0m[0m               = "terraform" [90m->[0m [0m[90mnull[0m[0m
        }
    }

[1m  # module.eks_workers.module.autoscale_group.aws_launch_template.default[0][0m will be [1m[31mdestroyed[0m[0m
[0m  [31m-[0m[0m resource "aws_launch_template" "default" {
      [31m-[0m [0m[1m[0marn[0m[0m                                  = "arn:aws:ec2:ap-southeast-1:545573948854:launch-template/lt-05b9f63ae2c24d1a4" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdefault_version[0m[0m                      = 1 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mdisable_api_termination[0m[0m              = false [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mebs_optimized[0m[0m                        = "false" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mid[0m[0m                                   = "lt-05b9f63ae2c24d1a4" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mimage_id[0m[0m                             = "ami-0afeae4543435bb1b" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0minstance_initiated_shutdown_behavior[0m[0m = "terminate" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0minstance_type[0m[0m                        = "t2.small" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mkey_name[0m[0m                             = "devops-training" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mlatest_version[0m[0m                       = 1 [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mname[0m[0m                                 = "asg-launch-tem-asg-worker-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0msecurity_group_names[0m[0m                 = [] [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags[0m[0m                                 = {
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mtags_all[0m[0m                             = {
          [31m-[0m [0m"managed_by" = "terraform"
        } [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0muser_data[0m[0m                            = "IyEvYmluL2Jhc2gKCiMgdXNlcmRhdGEgZm9yIEVLUyB3b3JrZXIgbm9kZXMgdG8gcHJvcGVybHkgY29uZmlndXJlIEt1YmVybmV0ZXMgYXBwbGljYXRpb25zIG9uIEVDMiBpbnN0YW5jZXMKIyBodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vZWtzL2xhdGVzdC91c2VyZ3VpZGUvbGF1bmNoLXdvcmtlcnMuaHRtbAojIGh0dHBzOi8vYXdzLmFtYXpvbi5jb20vYmxvZ3Mvb3BlbnNvdXJjZS9pbXByb3ZlbWVudHMtZWtzLXdvcmtlci1ub2RlLXByb3Zpc2lvbmluZy8KIyBodHRwczovL2dpdGh1Yi5jb20vYXdzbGFicy9hbWF6b24tZWtzLWFtaS9ibG9iL21hc3Rlci9maWxlcy9ib290c3RyYXAuc2gjTDk3CgoKCmV4cG9ydCBLVUJFTEVUX0VYVFJBX0FSR1M9IiIKCi9ldGMvZWtzL2Jvb3RzdHJhcC5zaCBcCiAgICAgIC0tYXBpc2VydmVyLWVuZHBvaW50ICJodHRwczovL0JFNDYyNzg5N0RGOUJCQjU0QjJEMTMxQjQ5MzUxQjA2LnlsNC5hcC1zb3V0aGVhc3QtMS5la3MuYW1hem9uYXdzLmNvbSIgXAogICAgICAtLWI2NC1jbHVzdGVyLWNhICJMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VONVJFTkRRV0pEWjBGM1NVSkJaMGxDUVVSQlRrSm5hM0ZvYTJsSE9YY3dRa0ZSYzBaQlJFRldUVkpOZDBWUldVUldVVkZFUlhkd2NtUlhTbXdLWTIwMWJHUkhWbnBOUWpSWVJGUkplRTFFWTNsTlJFVjRUbFJKZUU5V2IxaEVWRTE0VFVSamVFOUVSWGhPVkVsNFQxWnZkMFpVUlZSTlFrVkhRVEZWUlFwQmVFMUxZVE5XYVZwWVNuVmFXRkpzWTNwRFEwRlRTWGRFVVZsS1MyOWFTV2gyWTA1QlVVVkNRbEZCUkdkblJWQkJSRU5EUVZGdlEyZG5SVUpCVDBoU0NpdEZTakpGZWxoVVpTczBNbXRYYTJSc01GVnhSU3RWUjFCaU1sa3dTV2RCZG01cllXWm1aaTh5ZGxkU2NrY3JWWGgxZWpkQlFWTnBVVmxhWkhKeWMyVUtjelpHWW01WWFYbEVZbmhSYjJsa1MxZHlhamxwUWxNeVRFdFFka2RzU1ROdkx6bHJSVTFqTW5RNWRVeEtTRk5uTTFSRVNVY3ZiRWhIYTJSeGJFeFpUUXBhVGtaUlduUlZPSEY1YVRneE56WkNaWGd5UmtsUGVsaFBUR041TlU5VlQySnVORGx3T1RCMWRsUnNjSFJpVFV3MFdVd3hTMnRsYUUxaU1WRlVSVEl5Q2toNE9ISkRWazFpWmpScU5WZzNlakJuTjFRM2MxQjViMUJCSzB4R1ptWmthWFZsU3pKMVZHeFVLM1pqVkdaVE9FVjJha3h3TURkbVpXdG9lbmx3Tlc4S2VtZE9kVlZTV1ZwSE9YTm1kVVptWkVkaU9IRnFTRTR6YWpZMU5Xd3lZVTEzVEZaM1pTdHBiekpSTDJkU1oyeHFkMjF2UjFWVlNFNVJjMjFhY1RWSE53cERNWEp4ZW1oU1EwRnRkMDlGSzJsVWRUUnJRMEYzUlVGQllVMXFUVU5GZDBSbldVUldVakJRUVZGSUwwSkJVVVJCWjB0clRVRTRSMEV4VldSRmQwVkNDaTkzVVVaTlFVMUNRV1k0ZDBSUldVcExiMXBKYUhaalRrRlJSVXhDVVVGRVoyZEZRa0ZJUldvNWJ6a3lUMVJNYzFaV2VrTlZaMnRHYlRJelIybFZlVllLWTB0eFRsUXlkVGxsVDNGdk1YcG5PRUpFTTNKaU1EaDNkVlZUVTBWclVtNXlOMjR5ZFZaalowRmpSbXBGV21SbGNIWmFNVGxMV25GdFpVaFVkalY2S3dwcWVXSjViSFV6YmtOQ2JGWnNkVU5zYjFoblNqVmxURm80VUdwd00zcG5XVkZLUmtGS1MyTjNVVloyUWpaQ1NERjNOVzFqTVhab1NITnJRbEpHYUZKekNqRnphREI1VkZkcFMzTTBaRkZQSzBsVFZVeFVNVFI2U0U5WWNVUXhRMEZvYWxrMk1FbFJSbVl6VTNGVWFteGtkM2htWlVsUlJTczVUR0pRUVdGdE4wWUtha01yVjBWMGVtVTBTVVl4YTFOQmRsaERZMmgwVFVKRlJVUnlWMFJTYVc1b1YyMWtVWGR0VTJaUFlWSnlaV0pCYjNSM09GVkxNRmt3TWxwTVNEbGxiZ3BGVlZCTk1rcFhURXROVFRsTE56SmhVV1pvSzFCSWREZHZkVWQ0ZVZoaWJVZDNhemRyUTJOU1ZUUkljRWhSVm5VeVJFTnZWVU5hV205aE5EMEtMUzB0TFMxRlRrUWdRMFZTVkVsR1NVTkJWRVV0TFMwdExRbz0iIFwKICAgICAgImdyZWctZWtzLWRlbW8iCgoK" [90m->[0m [0m[90mnull[0m[0m
      [31m-[0m [0m[1m[0mvpc_security_group_ids[0m[0m               = [] [90m->[0m [0m[90mnull[0m[0m

      [31m-[0m [0miam_instance_profile {
          [31m-[0m [0m[1m[0mname[0m[0m = "instance-profile-greg-eks-demo" [90m->[0m [0m[90mnull[0m[0m
        }

      [31m-[0m [0mmonitoring {
          [31m-[0m [0m[1m[0menabled[0m[0m = true [90m->[0m [0m[90mnull[0m[0m
        }

      [31m-[0m [0mnetwork_interfaces {
          [31m-[0m [0m[1m[0massociate_public_ip_address[0m[0m = "true" [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mdelete_on_termination[0m[0m       = "true" [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mdescription[0m[0m                 = "The network interfaces for the asg" [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mdevice_index[0m[0m                = 0 [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mipv4_address_count[0m[0m          = 0 [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mipv4_addresses[0m[0m              = [] [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mipv6_address_count[0m[0m          = 0 [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mipv6_addresses[0m[0m              = [] [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0msecurity_groups[0m[0m             = [
              [31m-[0m [0m"sg-03c2cb19fa6077c68",
              [31m-[0m [0m"sg-0ef9371f1f9fbf028",
            ] [90m->[0m [0m[90mnull[0m[0m
        }

      [31m-[0m [0mtag_specifications {
          [31m-[0m [0m[1m[0mresource_type[0m[0m = "volume" [90m->[0m [0m[90mnull[0m[0m
          [31m-[0m [0m[1m[0mtags[0m[0m          = {
              [31m-[0m [0m"Name"       = "asg-worker-greg-eks-demo"
              [31m-[0m [0m"Snapshot"   = "true"
              [31m-[0m [0m"managed_by" = "terraform"
            } [90m->[0m [0m[90mnull[0m[0m
        }
    }

[0m[1mPlan:[0m 0 to add, 0 to change, 47 to destroy.[0m

------------------------------------------------------------------------

Note: You didn't specify an "-out" parameter to save this plan, so Terraform
can't guarantee that exactly these actions will be performed if
"terraform apply" is subsequently run.

[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Terraform Destroy Confirm)
[Pipeline] sh
+ terraform destroy -auto-approve
[0m[1mmodule.eks_cluster.data.aws_iam_policy_document.assume_role[0]: Refreshing state...[0m
[0m[1mmodule.vpc.aws_vpc.vpc: Refreshing state... [id=vpc-043e27750348e6da7][0m
[0m[1mmodule.subnets.data.aws_availability_zones.available: Refreshing state...[0m
[0m[1mmodule.eks_workers.data.aws_iam_policy_document.assume_role[0]: Refreshing state...[0m
[0m[1mmodule.eks_cluster.aws_iam_role.default[0]: Refreshing state... [id=iam-role-cluster-greg-eks-demo][0m
[0m[1mmodule.vpc.aws_internet_gateway.vpc-gateway: Refreshing state... [id=igw-03318eb30bf4708dd][0m
[0m[1mmodule.vpc.aws_default_security_group.vpc-sg[0]: Refreshing state... [id=sg-0a1702ac8c7354351][0m
[0m[1mmodule.eks_cluster.aws_security_group.default[0]: Refreshing state... [id=sg-0a10d804513d451a9][0m
[0m[1mmodule.subnets.data.aws_vpc.default: Refreshing state...[0m
[0m[1mmodule.network_loadbalancer.aws_security_group.sg_nlb_k8s[0]: Refreshing state... [id=sg-0ef9371f1f9fbf028][0m
[0m[1mmodule.network_loadbalancer.aws_lb_target_group.target_groups[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:targetgroup/tg-greg-eks-demo-to-30080/3bd4268aabf6caea][0m
[0m[1mmodule.eks_cluster.aws_security_group_rule.egress[0]: Refreshing state... [id=sgrule-3407717028][0m
[0m[1mmodule.network_loadbalancer.aws_security_group_rule.allow_inbound_from_target_groups[0]: Refreshing state... [id=sgrule-1232144127][0m
[0m[1mmodule.subnets.aws_subnet.private[0]: Refreshing state... [id=subnet-071b21a74db01d588][0m
[0m[1mmodule.subnets.aws_subnet.private[1]: Refreshing state... [id=subnet-00d6b63cb4ee5ba80][0m
[0m[1mmodule.subnets.aws_route_table.private[2]: Refreshing state... [id=rtb-0f64f4969a80876a9][0m
[0m[1mmodule.subnets.aws_route_table.public[0]: Refreshing state... [id=rtb-0c5db97be3f9d04ae][0m
[0m[1mmodule.subnets.aws_subnet.public[0]: Refreshing state... [id=subnet-06695fa20b2920179][0m
[0m[1mmodule.subnets.aws_subnet.public[2]: Refreshing state... [id=subnet-0966ccddaff2e6775][0m
[0m[1mmodule.subnets.aws_subnet.public[1]: Refreshing state... [id=subnet-0799f9cb4a446e7b2][0m
[0m[1mmodule.subnets.aws_subnet.private[2]: Refreshing state... [id=subnet-0e639477a57b40d98][0m
[0m[1mmodule.subnets.aws_route_table.private[0]: Refreshing state... [id=rtb-0cefbc57ecd518789][0m
[0m[1mmodule.subnets.aws_route_table.private[1]: Refreshing state... [id=rtb-004f00b3e24bf43b5][0m
[0m[1mmodule.subnets.aws_route.public[0]: Refreshing state... [id=r-rtb-0c5db97be3f9d04ae1080289494][0m
[0m[1mmodule.subnets.aws_route_table_association.public[0]: Refreshing state... [id=rtbassoc-0eba66594933b9ea4][0m
[0m[1mmodule.subnets.aws_route_table_association.public[2]: Refreshing state... [id=rtbassoc-0ecb0c7e2d82f590b][0m
[0m[1mmodule.subnets.aws_route_table_association.public[1]: Refreshing state... [id=rtbassoc-0b7c7de72b983d261][0m
[0m[1mmodule.subnets.aws_network_acl.public[0]: Refreshing state... [id=acl-0d0f099e1a69792f9][0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Refreshing state... [id=arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:loadbalancer/net/nlb-greg-eks-demo/2a29f4e88d8aea42][0m
[0m[1mmodule.subnets.aws_network_acl.private[0]: Refreshing state... [id=acl-095a462a02129e12d][0m
[0m[1mmodule.subnets.aws_route_table_association.private[0]: Refreshing state... [id=rtbassoc-092eef9d80ede0e84][0m
[0m[1mmodule.subnets.aws_route_table_association.private[2]: Refreshing state... [id=rtbassoc-00775b61d85618183][0m
[0m[1mmodule.subnets.aws_route_table_association.private[1]: Refreshing state... [id=rtbassoc-015a500508529db99][0m
[0m[1mmodule.route53.aws_route53_record.records[0]: Refreshing state... [id=Z07374591FC76OBQXEXUL_greg215.****_CNAME][0m
[0m[1mmodule.network_loadbalancer.aws_lb_listener.nlb_listeners[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:listener/net/nlb-greg-eks-demo/2a29f4e88d8aea42/cbf964886114a77a][0m
[0m[1mmodule.eks_cluster.aws_iam_role_policy_attachment.amazon_eks_service_policy[0]: Refreshing state... [id=iam-role-cluster-greg-eks-demo-20210720114618367200000002][0m
[0m[1mmodule.eks_cluster.aws_iam_role_policy_attachment.amazon_eks_cluster_policy[0]: Refreshing state... [id=iam-role-cluster-greg-eks-demo-20210720114618366500000001][0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Refreshing state... [id=greg-eks-demo][0m
[0m[1mmodule.eks_cluster.data.aws_eks_cluster.eks[0]: Refreshing state...[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Refreshing state... [id=1147161951385146978][0m
[0m[1mmodule.eks_workers.aws_iam_role.default[0]: Refreshing state... [id=iam-role-worker-greg-eks-demo][0m
[0m[1mmodule.eks_workers.aws_security_group.default[0]: Refreshing state... [id=sg-03c2cb19fa6077c68][0m
[0m[1mmodule.eks_cluster.data.aws_eks_cluster_auth.eks[0]: Refreshing state...[0m
[0m[1mmodule.eks_workers.data.template_file.userdata[0]: Refreshing state...[0m
[0m[1mmodule.eks_cluster.aws_security_group_rule.ingress_workers[0]: Refreshing state... [id=sgrule-2068099244][0m
[0m[1mmodule.eks_workers.aws_security_group_rule.egress[0]: Refreshing state... [id=sgrule-3284730600][0m
[0m[1mmodule.eks_workers.aws_security_group_rule.ingress_self[0]: Refreshing state... [id=sgrule-2295658281][0m
[0m[1mmodule.eks_cluster.kubernetes_config_map.aws_auth_ignore_changes[0]: Refreshing state... [id=kube-system/aws-auth][0m
[0m[1mmodule.eks_workers.aws_iam_instance_profile.default[0]: Refreshing state... [id=instance-profile-greg-eks-demo][0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_ec2_container_registry_read_only[0]: Refreshing state... [id=iam-role-worker-greg-eks-demo-20210720115532628200000003][0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_eks_cni_policy[0]: Refreshing state... [id=iam-role-worker-greg-eks-demo-20210720115532610100000001][0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_eks_worker_node_policy[0]: Refreshing state... [id=iam-role-worker-greg-eks-demo-20210720115532613900000002][0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_launch_template.default[0]: Refreshing state... [id=lt-05b9f63ae2c24d1a4][0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Refreshing state... [id=asg-worker-greg-eks-demo][0m
[0m[1mmodule.vpc.aws_default_security_group.vpc-sg[0]: Destroying... [id=sg-0a1702ac8c7354351][0m[0m
[0m[1mmodule.network_loadbalancer.aws_security_group_rule.allow_inbound_from_target_groups[0]: Destroying... [id=sgrule-1232144127][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb_listener.nlb_listeners[0]: Destroying... [id=arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:listener/net/nlb-greg-eks-demo/2a29f4e88d8aea42/cbf964886114a77a][0m[0m
[0m[1mmodule.vpc.aws_default_security_group.vpc-sg[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.route53.aws_route53_record.records[0]: Destroying... [id=Z07374591FC76OBQXEXUL_greg215.***_CNAME][0m[0m
[0m[1mmodule.eks_workers.aws_security_group_rule.ingress_self[0]: Destroying... [id=sgrule-2295658281][0m[0m
[0m[1mmodule.eks_workers.aws_security_group_rule.egress[0]: Destroying... [id=sgrule-3284730600][0m[0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_eks_cni_policy[0]: Destroying... [id=iam-role-worker-greg-eks-demo-20210720115532610100000001][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb_listener.nlb_listeners[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.network_loadbalancer.aws_security_group_rule.allow_inbound_from_target_groups[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.eks_workers.aws_security_group_rule.ingress_self[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_ec2_container_registry_read_only[0]: Destroying... [id=iam-role-worker-greg-eks-demo-20210720115532628200000003][0m[0m
[0m[1mmodule.eks_cluster.aws_security_group_rule.ingress_workers[0]: Destroying... [id=sgrule-2068099244][0m[0m
[0m[1mmodule.eks_cluster.aws_security_group_rule.egress[0]: Destroying... [id=sgrule-3407717028][0m[0m
[0m[1mmodule.eks_workers.aws_security_group_rule.egress[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.eks_cluster.aws_security_group_rule.egress[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_eks_worker_node_policy[0]: Destroying... [id=iam-role-worker-greg-eks-demo-20210720115532613900000002][0m[0m
[0m[1mmodule.subnets.aws_route_table_association.private[0]: Destroying... [id=rtbassoc-092eef9d80ede0e84][0m[0m
[0m[1mmodule.subnets.aws_route_table_association.private[1]: Destroying... [id=rtbassoc-015a500508529db99][0m[0m
[0m[1mmodule.subnets.aws_route_table_association.public[0]: Destroying... [id=rtbassoc-0eba66594933b9ea4][0m[0m
[0m[1mmodule.subnets.aws_route_table_association.public[2]: Destroying... [id=rtbassoc-0ecb0c7e2d82f590b][0m[0m
[0m[1mmodule.eks_cluster.aws_security_group_rule.ingress_workers[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.subnets.aws_network_acl.public[0]: Destroying... [id=acl-0d0f099e1a69792f9][0m[0m
[0m[1mmodule.subnets.aws_route_table_association.private[1]: Destruction complete after 1s[0m[0m
[0m[1mmodule.subnets.aws_route_table_association.public[1]: Destroying... [id=rtbassoc-0b7c7de72b983d261][0m[0m
[0m[1mmodule.subnets.aws_route_table_association.public[0]: Destruction complete after 1s[0m[0m
[0m[1mmodule.subnets.aws_network_acl.private[0]: Destroying... [id=acl-095a462a02129e12d][0m[0m
[0m[1mmodule.subnets.aws_route_table_association.private[0]: Destruction complete after 1s[0m[0m
[0m[1mmodule.subnets.aws_route.public[0]: Destroying... [id=r-rtb-0c5db97be3f9d04ae1080289494][0m[0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_eks_cni_policy[0]: Destruction complete after 1s[0m[0m
[0m[1mmodule.subnets.aws_route_table_association.private[2]: Destroying... [id=rtbassoc-00775b61d85618183][0m[0m
[0m[1mmodule.subnets.aws_route_table_association.public[2]: Destruction complete after 1s[0m[0m
[0m[1mmodule.eks_cluster.kubernetes_config_map.aws_auth_ignore_changes[0]: Destroying... [id=kube-system/aws-auth][0m[0m
[0m[1mmodule.subnets.aws_route_table_association.public[1]: Destruction complete after 0s[0m[0m
[0m[1mmodule.subnets.aws_route_table_association.private[2]: Destruction complete after 0s[0m[0m
[0m[1mmodule.subnets.aws_route_table.private[1]: Destroying... [id=rtb-004f00b3e24bf43b5][0m[0m
[0m[1mmodule.subnets.aws_route_table.private[2]: Destroying... [id=rtb-0f64f4969a80876a9][0m[0m
[0m[1mmodule.subnets.aws_route.public[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.subnets.aws_route_table.private[0]: Destroying... [id=rtb-0cefbc57ecd518789][0m[0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_ec2_container_registry_read_only[0]: Destruction complete after 1s[0m[0m
[0m[1mmodule.subnets.aws_route_table.public[0]: Destroying... [id=rtb-0c5db97be3f9d04ae][0m[0m
[0m[1mmodule.eks_cluster.kubernetes_config_map.aws_auth_ignore_changes[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.vpc.aws_internet_gateway.vpc-gateway: Destroying... [id=igw-03318eb30bf4708dd][0m[0m
[0m[1mmodule.subnets.aws_route_table.private[2]: Destruction complete after 0s[0m[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Destroying... [id=1147161951385146978][0m[0m
[0m[1mmodule.eks_cluster.null_resource.wait_for_cluster[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.subnets.aws_route_table.private[1]: Destruction complete after 0s[0m[0m
[0m[1mmodule.subnets.aws_route_table.private[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.subnets.aws_route_table.public[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.eks_workers.aws_iam_role_policy_attachment.amazon_eks_worker_node_policy[0]: Destruction complete after 1s[0m[0m
[0m[1mmodule.subnets.aws_network_acl.public[0]: Destruction complete after 2s[0m[0m
[0m[1mmodule.subnets.aws_network_acl.private[0]: Destruction complete after 1s[0m[0m
[0m[1mmodule.subnets.aws_subnet.private[1]: Destroying... [id=subnet-00d6b63cb4ee5ba80][0m[0m
[0m[1mmodule.subnets.aws_subnet.private[0]: Destroying... [id=subnet-071b21a74db01d588][0m[0m
[0m[1mmodule.subnets.aws_subnet.private[2]: Destroying... [id=subnet-0e639477a57b40d98][0m[0m
[0m[1mmodule.subnets.aws_subnet.private[1]: Destruction complete after 0s[0m[0m
[0m[1mmodule.subnets.aws_subnet.private[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.subnets.aws_subnet.private[2]: Destruction complete after 0s[0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Destroying... [id=asg-worker-greg-eks-demo][0m[0m
[0m[1mmodule.route53.aws_route53_record.records[0]: Still destroying... [id=Z07374591FC76OBQXEXUL_greg215.****_CNAME, 10s elapsed][0m[0m
[0m[1mmodule.vpc.aws_internet_gateway.vpc-gateway: Still destroying... [id=igw-03318eb30bf4708dd, 10s elapsed][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Still destroying... [id=asg-worker-greg-eks-demo, 10s elapsed][0m[0m
[0m[1mmodule.route53.aws_route53_record.records[0]: Still destroying... [id=Z07374591FC76OBQXEXUL_greg215.****_CNAME, 20s elapsed][0m[0m
[0m[1mmodule.vpc.aws_internet_gateway.vpc-gateway: Still destroying... [id=igw-03318eb30bf4708dd, 20s elapsed][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Still destroying... [id=asg-worker-greg-eks-demo, 20s elapsed][0m[0m
[0m[1mmodule.route53.aws_route53_record.records[0]: Still destroying... [id=Z07374591FC76OBQXEXUL_greg215.****_CNAME, 30s elapsed][0m[0m
[0m[1mmodule.vpc.aws_internet_gateway.vpc-gateway: Still destroying... [id=igw-03318eb30bf4708dd, 30s elapsed][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Still destroying... [id=asg-worker-greg-eks-demo, 30s elapsed][0m[0m
[0m[1mmodule.route53.aws_route53_record.records[0]: Still destroying... [id=Z07374591FC76OBQXEXUL_greg215.****_CNAME, 40s elapsed][0m[0m
[0m[1mmodule.vpc.aws_internet_gateway.vpc-gateway: Still destroying... [id=igw-03318eb30bf4708dd, 40s elapsed][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Still destroying... [id=asg-worker-greg-eks-demo, 40s elapsed][0m[0m
[0m[1mmodule.route53.aws_route53_record.records[0]: Destruction complete after 46s[0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Destroying... [id=arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:loadbalancer/net/nlb-greg-eks-demo/2a29f4e88d8aea42][0m[0m
[0m[1mmodule.vpc.aws_internet_gateway.vpc-gateway: Still destroying... [id=igw-03318eb30bf4708dd, 50s elapsed][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Still destroying... [id=asg-worker-greg-eks-demo, 50s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still destroying... [id=arn:aws:elasticloadbalancing:ap-southea...net/nlb-greg-eks-demo/2a29f4e88d8aea42, 10s elapsed][0m[0m
[0m[1mmodule.vpc.aws_internet_gateway.vpc-gateway: Still destroying... [id=igw-03318eb30bf4708dd, 1m0s elapsed][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Still destroying... [id=asg-worker-greg-eks-demo, 1m0s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still destroying... [id=arn:aws:elasticloadbalancing:ap-southea...net/nlb-greg-eks-demo/2a29f4e88d8aea42, 20s elapsed][0m[0m
[0m[1mmodule.vpc.aws_internet_gateway.vpc-gateway: Still destroying... [id=igw-03318eb30bf4708dd, 1m10s elapsed][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Still destroying... [id=asg-worker-greg-eks-demo, 1m10s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still destroying... [id=arn:aws:elasticloadbalancing:ap-southea...net/nlb-greg-eks-demo/2a29f4e88d8aea42, 30s elapsed][0m[0m
[0m[1mmodule.vpc.aws_internet_gateway.vpc-gateway: Still destroying... [id=igw-03318eb30bf4708dd, 1m20s elapsed][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Still destroying... [id=asg-worker-greg-eks-demo, 1m20s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still destroying... [id=arn:aws:elasticloadbalancing:ap-southea...net/nlb-greg-eks-demo/2a29f4e88d8aea42, 40s elapsed][0m[0m
[0m[1mmodule.vpc.aws_internet_gateway.vpc-gateway: Still destroying... [id=igw-03318eb30bf4708dd, 1m30s elapsed][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Still destroying... [id=asg-worker-greg-eks-demo, 1m30s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still destroying... [id=arn:aws:elasticloadbalancing:ap-southea...net/nlb-greg-eks-demo/2a29f4e88d8aea42, 50s elapsed][0m[0m
[0m[1mmodule.vpc.aws_internet_gateway.vpc-gateway: Still destroying... [id=igw-03318eb30bf4708dd, 1m40s elapsed][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Still destroying... [id=asg-worker-greg-eks-demo, 1m40s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Still destroying... [id=arn:aws:elasticloadbalancing:ap-southea...net/nlb-greg-eks-demo/2a29f4e88d8aea42, 1m0s elapsed][0m[0m
[0m[1mmodule.vpc.aws_internet_gateway.vpc-gateway: Still destroying... [id=igw-03318eb30bf4708dd, 1m50s elapsed][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Still destroying... [id=asg-worker-greg-eks-demo, 1m50s elapsed][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb.nlb: Destruction complete after 1m7s[0m[0m
[0m[1mmodule.vpc.aws_internet_gateway.vpc-gateway: Destruction complete after 1m56s[0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Still destroying... [id=asg-worker-greg-eks-demo, 2m0s elapsed][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_autoscaling_group.default[0]: Destruction complete after 2m4s[0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb_target_group.target_groups[0]: Destroying... [id=arn:aws:elasticloadbalancing:ap-southeast-1:545573948854:targetgroup/tg-greg-eks-demo-to-30080/3bd4268aabf6caea][0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_launch_template.default[0]: Destroying... [id=lt-05b9f63ae2c24d1a4][0m[0m
[0m[1mmodule.network_loadbalancer.aws_lb_target_group.target_groups[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.eks_workers.module.autoscale_group.aws_launch_template.default[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.network_loadbalancer.aws_security_group.sg_nlb_k8s[0]: Destroying... [id=sg-0ef9371f1f9fbf028][0m[0m
[0m[1mmodule.eks_workers.aws_security_group.default[0]: Destroying... [id=sg-03c2cb19fa6077c68][0m[0m
[0m[1mmodule.eks_workers.aws_iam_instance_profile.default[0]: Destroying... [id=instance-profile-greg-eks-demo][0m[0m
[0m[1mmodule.eks_workers.aws_security_group.default[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.network_loadbalancer.aws_security_group.sg_nlb_k8s[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.eks_workers.aws_iam_instance_profile.default[0]: Destruction complete after 2s[0m[0m
[0m[1mmodule.eks_workers.aws_iam_role.default[0]: Destroying... [id=iam-role-worker-greg-eks-demo][0m[0m
[0m[1mmodule.eks_workers.aws_iam_role.default[0]: Destruction complete after 4s[0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Destroying... [id=greg-eks-demo][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still destroying... [id=greg-eks-demo, 10s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still destroying... [id=greg-eks-demo, 20s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still destroying... [id=greg-eks-demo, 30s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still destroying... [id=greg-eks-demo, 40s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still destroying... [id=greg-eks-demo, 50s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still destroying... [id=greg-eks-demo, 1m0s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still destroying... [id=greg-eks-demo, 1m10s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Still destroying... [id=greg-eks-demo, 1m20s elapsed][0m[0m
[0m[1mmodule.eks_cluster.aws_eks_cluster.default[0]: Destruction complete after 1m25s[0m[0m
[0m[1mmodule.subnets.aws_subnet.public[1]: Destroying... [id=subnet-0799f9cb4a446e7b2][0m[0m
[0m[1mmodule.subnets.aws_subnet.public[0]: Destroying... [id=subnet-06695fa20b2920179][0m[0m
[0m[1mmodule.subnets.aws_subnet.public[2]: Destroying... [id=subnet-0966ccddaff2e6775][0m[0m
[0m[1mmodule.eks_cluster.aws_iam_role_policy_attachment.amazon_eks_cluster_policy[0]: Destroying... [id=iam-role-cluster-greg-eks-demo-20210720114618366500000001][0m[0m
[0m[1mmodule.eks_cluster.aws_iam_role_policy_attachment.amazon_eks_service_policy[0]: Destroying... [id=iam-role-cluster-greg-eks-demo-20210720114618367200000002][0m[0m
[0m[1mmodule.eks_cluster.aws_security_group.default[0]: Destroying... [id=sg-0a10d804513d451a9][0m[0m
[0m[1mmodule.eks_cluster.aws_security_group.default[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.subnets.aws_subnet.public[0]: Destruction complete after 0s[0m[0m
[0m[1mmodule.subnets.aws_subnet.public[1]: Destruction complete after 0s[0m[0m
[0m[1mmodule.subnets.aws_subnet.public[2]: Destruction complete after 0s[0m[0m
[0m[1mmodule.vpc.aws_vpc.vpc: Destroying... [id=vpc-043e27750348e6da7][0m[0m
[0m[1mmodule.vpc.aws_vpc.vpc: Destruction complete after 0s[0m[0m
[0m[1mmodule.eks_cluster.aws_iam_role_policy_attachment.amazon_eks_service_policy[0]: Destruction complete after 1s[0m[0m
[0m[1mmodule.eks_cluster.aws_iam_role_policy_attachment.amazon_eks_cluster_policy[0]: Destruction complete after 1s[0m[0m
[0m[1mmodule.eks_cluster.aws_iam_role.default[0]: Destroying... [id=iam-role-cluster-greg-eks-demo][0m[0m
[0m[1mmodule.eks_cluster.aws_iam_role.default[0]: Destruction complete after 4s[0m[0m
[0m[1m[32m
Destroy complete! Resources: 47 destroyed.[0m
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Notify Terraform infra completed)
[Pipeline] slackSend
Slack Send Pipeline step running, values are - baseUrl: <empty>, teamDomain: ***, channel: #jenkins-notify, color: good, botUser: false, tokenCredentialId: jenkins-slack-token, notifyCommitters: false, iconEmoji: <empty>, username: <empty>, timestamp: <empty>
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
Executing sh script inside container jenkins-agent-1 of pod jenkins-agent-1-r1k24-1mms3
Executing command: "ssh-agent" "-k" 
exit
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 20 killed;
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
[Pipeline] End of Pipeline
Finished: SUCCESS