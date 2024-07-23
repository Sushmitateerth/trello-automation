import CreateBoardPage from '../pageObjects/BoardsPage'

describe('AddBoard', function () {
  before(function () {
    //cy.session()
    cy.loginSuccessfully()
  })
  beforeEach(function () {
    cy.fixture('example').then(function (data) {
      this.data = data
    })
  })

  it('CreateBoard', function () {
    const createBoard = new CreateBoardPage()
    createBoard.getCreateButton().click()
    createBoard.getCreateBoard().click()
    createBoard.getBoardTitle().type(this.data.boardTitle)
    createBoard.getVisibilityDropdown().click()
    const options = createBoard.getVisibilityOptions()
    const privateOption = options.filter(':contains("Private")')
    privateOption.click()

    createBoard.getClickBoardCreateButton().click()
    createBoard.getFetchBoardTitle().should('have.text', this.data.boardTitle)
  })
})
