pipeline { 
    agent any

    stages {

        stage('Build Docker Image') { 
            steps { 
                sh 'docker build -t devops-node-app ./app'
            }
        }

        stage('Tag Docker Image') {
            steps {
                sh 'docker tag devops-node-app p565656/devops-node-app:latest'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push p565656/devops-node-app:latest'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:3000 devops-node-app'
            }
        }

    }
}
