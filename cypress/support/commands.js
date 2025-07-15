import loginPage from '../support/page_objects/loginPage'

Cypress.Commands.add('login', (usuario, senha) => {
  loginPage.visitar()
  loginPage.login(usuario, senha)
  cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá, Marina.teste')
})
