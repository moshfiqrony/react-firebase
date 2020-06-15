pipeline {
    agent any 
    stages {
        stage('Install dependency') { 
            steps {
                sh "yarn install"
            }
        }
        stage('Test project') { 
            steps {
                sh "yarn test"
            }
        }
        stage('Build project') { 
            steps {
                sh "yarn build"
            }
        }
    }
}