def deployableBranches = ['production', 'beta', 'alpha', 'develop']
if(!deployableBranches.containsValue(env.BRANCH_NAME)) {
  System.exit(0)
}

node {
  def imageRepo = 'gcr.io/progmux-167421/typing-ui'
  def commitHash = env.GIT_COMMIT.substring(0,7)
  def imageTag = "${imageRepo}:${env.BRANCH_NAME}.${env.BUILD_NUMBER}.${commitHash}"
  def latestTag = "${imageRepo}:${env.BRANCH_NAME}.latest"

  stage 'Pull Environments Repository'
  sh("printf \"host bitbucket.org\\n HostName bitbucket.org\\n IdentityFile ~/.ssh/jenkins_rsa\\n User git\" > ~/.ssh/config")  
  sh("git -C environments pull || git clone -b master git@bitbucket.org:progmux/environments.git ${env.WORKSPACE}/environments")

  stage 'Copy .env'
  switch (env.BRANCH_NAME) {
    case "develop":
      sh("cp environments/typing-ui/dev.env typing-ui/.env")
      break
    default:
  }

  stage 'Checkout SCM'
  checkout scm

  stage 'Build Image'
  //Use docker login command for access to docker.io registry
  //Or get copy of ~/.docker/config.json for authentication
  sh("docker build -t ${imageTag} .")

  stage 'Tag Image as branch latest'
  sh("docker tag ${imageTag} ${latestTag}")

  stage 'Test'
  //Add Testing

  stage 'Push Image'
  sh("gcloud docker -- push ${imageTag}")
  sh("gcloud docker -- push ${latestTag}")

  stage "Deploy"
  switch (env.BRANCH_NAME) {
    case "develop":
      // sh("kubectl get ns ${env.BRANCH_NAME} || kubectl create ns ${env.BRANCH_NAME}")
      sh("kubectl --namespace=${env.BRANCH_NAME} apply -f kubernetes/deployment-dev.json")
      sh("kubectl --namespace=${env.BRANCH_NAME} apply -f kubernetes/service.json")
      break

    default:
      echo "No deployment procedure for branch ${env.BRANCH_NAME}"
  }
}