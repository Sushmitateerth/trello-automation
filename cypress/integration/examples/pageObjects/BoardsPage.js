class CreateBoardPage {
  getCreateButton() {
    return cy.get('[data-testid="AddIcon"]')
  }
  getCreateBoard() {
    return cy.contains(
      'A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.',
    )
  }

  getBoardTitle() {
    return cy.get('[data-testid="create-board-title-input"]')
  }

  getClickBoardCreateButton() {
    return cy.get('[data-testid="create-board-submit-button"]')
  }

  getFetchBoardTitle() {
    return cy.get('[data-testid="board-name-display"]')
  }

  getVisibilityDropdown() {
    return cy.get('[data-testid="create-board-select-visibility"]')
  }

  getVisibilityOptions() {
    return cy.get('[role="listbox"] [role="option"]')
  }
}

export default CreateBoardPage
