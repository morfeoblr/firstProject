pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                bat 'npm install'
            }
        }
        stage('parallel') {
            parallel {
                // start several test jobs in parallel, and they all
                // will use Cypress Dashboard to load balance any found spec files
                stage('Run tests in parallel A') {
                    steps {
                        bat 'npx cypress run --record --key 1bd05ab1-8b5f-4f46-946e-5f4abd1539d4 --parallel'
                    }
                }
                stage('Run tests in parallel B') {
                    steps {
                        bat 'npx cypress run --record --key 1bd05ab1-8b5f-4f46-946e-5f4abd1539d4 --parallel'
                    }
                }
            }
        }
    }
}