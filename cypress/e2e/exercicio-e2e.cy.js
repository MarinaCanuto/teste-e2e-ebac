/// <reference types="cypress" />

import produtosPage from '../support/page_objects/produtosPage'
import checkoutPage from '../support/page_objects/checkoutPage'
import loginPage from '../support/page_objects/loginPage'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  beforeEach(() => {
    loginPage.visitar()
    cy.fixture('perfil').then((perfil) => {
      loginPage.login(perfil.usuario, perfil.senha)
    })
    cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá, Marina.teste')
  })
  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    cy.fixture('produtos').then((produtos) => {
      cy.wrap(produtos).each((produto) => {
        produtosPage.visitarProduto(produto.slug)
        produtosPage.addProdutoCarrinho(produto.tamanho, produto.cor, produto.quantidade)
      })
    })
    cy.get('.woocommerce-message').contains('Ver carrinho').click()
    cy.get('.checkout-button').click()
    cy.fixture('cliente').then((cliente) => {
      checkoutPage.preencherCheckout(cliente)
      checkoutPage.finalizarPedido()
      checkoutPage.validarConfirmacao()
    })
  })
})
