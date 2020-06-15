pipeline {
    agent any 
    stages {
        stage('Test') { 
            steps {
                sh "yarn install"
                sh "yarn build"
            }
        }
    }
}