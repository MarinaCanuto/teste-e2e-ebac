class ProdutosPage {
  visitarProduto(slug) {
    cy.visit(`/product/${slug}`)
  }
  addProdutoCarrinho(tamanho, cor, quantidade) {
    cy.get('.product_title').should('be.visible')
    cy.contains('.variable-item-span', tamanho, { timeout: 10000 })
      .should('be.visible')
      .click({ force: true })
    cy.contains('.variable-item-span', cor, { timeout: 10000 })
      .should('be.visible')
      .click({ force: true })
    cy.get('input.qty').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
  }
}

export default new ProdutosPage()
