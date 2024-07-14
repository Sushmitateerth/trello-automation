class CardsPage {
  getSelectBoard() {
    return cy.contains('Automation Board for Cards')
  }

  getAddCard() {
    return cy.get('[data-testid="list-add-card-button"]')
  }

  getEnterCardTitle() {
    return cy.get('[data-testid="list-card-composer-textarea"]')
  }

  getAddCardButton() {
    return cy.get('[data-testid="list-card-composer-add-card-button"]')
  }

  getAllCards() {
    return cy.get('[data-testid="list-card"]')
  }

  getCloseCard() {
    return cy.get('[data-testid="list-card-composer-cancel-button"]')
  }

  getSelectCard() {
    return cy.contains('Card Title - 1')
  }

  getOpenCard() {
    return cy.contains('Open card')
  }

  getAddDescription() {
    return cy.get('[data-testid="click-wrapper"]')
  }

  getDescription() {
    return cy.contains('Add a more detailed description…')
  }

  getClickSave() {
    return cy.get('[data-testid="editor-save-button"]')
  }

  getCommentButton() {
    return cy.get('[data-testid="card-back-new-comment-input-skeleton"]')
  }

  getNavToCommentBox() {
    return cy.get('[data-testid="placeholder-test-id"]')
  }

  getCommentSave() {
    return cy.get('[data-testid="card-back-comment-save-button"]')
  }

  getCardTitle() {
    return cy.get('#js-dialog-title')
  }

  getCardDescription() {
    return cy.get('.current > p')
  }

  getCardComment() {
    return cy.get('.current-comment')
  }
}

export default CardsPage
