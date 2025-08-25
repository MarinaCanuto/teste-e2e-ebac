pipeline {
    agent any

    options { timestamps(); skipDefaultCheckout(true) }

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps { checkout scm }
        }
        stage('Instalar dependências') {
            steps { sh 'npm ci || npm install' }
        }
        stage('Testes Cypress (headless)') {
            steps {
                sh '''
                  npx cypress verify
                  npx cypress run
                '''
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**/*,cypress/videos/**/*', allowEmptyArchive: true
        }
        failure {
            echo 'Falhou 😥 — confira screenshots e vídeos nos artifacts.'
        }
    }
}
