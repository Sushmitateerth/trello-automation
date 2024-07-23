class ListPage {
  getNavToBoards() {
    return cy.contains('Boards')
  }

  getSelectBoard(boardName: string) {
    return cy.contains(boardName)
  }

  getAddListNav() {
    return cy.get('[data-testid="list-composer-button"]')
  }

  getAddListTitle() {
    return cy.get('[data-testid="list-name-textarea"]')
  }

  getAddListButton() {
    return cy.contains('Add list')
  }

  getListName() {
    return cy.get('[data-testid="list-name"]')
  }
}

export default ListPage
