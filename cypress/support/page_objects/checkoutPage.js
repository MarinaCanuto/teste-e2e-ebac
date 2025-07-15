class CheckoutPage {
  preencherCheckout(dados) {
    cy.get('#billing_first_name').clear().type(dados.nome)
    cy.get('#billing_last_name').clear().type(dados.sobrenome)
    cy.get('#billing_address_1').clear().type(dados.endereco)
    cy.get('#billing_city').clear().type(dados.cidade)
    cy.get('#billing_postcode').clear().type(dados.cep)
    cy.get('#billing_phone').clear().type(dados.telefone)
    cy.get('#billing_email').clear().type(dados.email)
    cy.get('#select2-billing_country-container').click()
    cy.get('.select2-search__field').type(dados.pais + '{enter}')
    cy.get('#select2-billing_state-container').click()
    cy.get('.select2-search__field').type(dados.estado + '{enter}')
  }
  finalizarPedido() {
    cy.get('#terms').click()
    cy.get('#place_order').click()
  }
  validarConfirmacao() {
   cy.get('#main').should('contain', 'Obrigado. Seu pedido foi recebido.')
  }
}

export default new CheckoutPage()
