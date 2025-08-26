pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                // Puxa o código do repositório
                git branch: 'main', url: 'https://github.com/MarinaCanuto/teste-e2e-ebac.git'
                // Instala dependências do Node
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                // Roda os testes Cypress
                bat '''set NO_COLOR=1
npm test'''
            }
        }
    }

    post {
        always {
            echo 'Build finalizado'
        }
        success {
            echo 'Todos os testes passaram!'
        }
        failure {
            echo 'Algum teste falhou!'
        }
    }
}
