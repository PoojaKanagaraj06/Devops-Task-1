pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git ''
            }
        }

        stage('Build Docker Image') {
            steps {https://github.com/PoojaKanagaraj06/Devops-Task-1
                sh 'docker build -t devops-node-app ./app'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:3000 devops-node-app'
            }
        }

    }
}
