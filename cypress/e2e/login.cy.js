/// <reference types="cypress" />
import loginPage from '../support/page_objects/loginPage'

describe('Funcionalidade Login', () => {
  beforeEach(() => {
    loginPage.visitar()
  })
  it('Deve fazer login com sucesso', () => {
    cy.fixture('perfil').then(perfil => {
      loginPage.login(perfil.usuario, perfil.senha)
    })
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Marina.teste')
  })
  it('Deve exibir mensagem de erro com usuário inválido', () => {
    loginPage.login('email@invalido.com', 'senhaerrada')
    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. ')
  })
})
