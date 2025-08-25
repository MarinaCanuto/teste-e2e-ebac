pipeline {
  agent any
  tools { nodejs 'Node18' } // configure em Manage Jenkins > Tools

  options { timestamps(); skipDefaultCheckout(true) }

  environment {
    CI = 'true'
  }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }
    stage('Instalar dependências') {
      steps { sh 'npm ci || npm install' } // usa ci se tiver package-lock
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
      // Ativa depois de configurar reporter JUnit:
      // junit allowEmptyResults: true, testResults: 'cypress/results/**/*.xml'
    }
    failure {
      echo 'Falhou 😥 — confira screenshots e vídeos nos artifacts.'
    }
  }
}
