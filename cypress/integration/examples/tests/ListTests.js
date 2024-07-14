import ListsPage from '../pageObjects/ListsPage'
import { createBoard, deleteBoard } from '../../../api/board'
import { fetchLists, archiveList } from '../../../api/list'

describe('List Operations', function () {
  let board = null
  const name = 'Automation board for List'

  before(async function () {
    cy.LoginSuccessfully(Cypress.env('email'), Cypress.env('password'))

    return createBoard(name).then((res) => {
      board = res.body
      fetchLists(board.id).then(({ body: lists }) => {
        return Promise.all(lists.map((list) => archiveList(list.id)))
      })
    })
  })

  beforeEach(function () {
    cy.fixture('example').then(function (data) {
      this.data = data
    })
  })

  it('AddList', function () {
    const list = new ListsPage()
    list.getNavToBoards().click()
    list.getSelectBoard(board.name).click()
    list.getAddListNav().click()
    list.getAddListTitle().type(this.data.listTitle)
    list.getAddListButton().click()
    const listName = list.getListName()
    listName.should('have.text', this.data.listTitle)
    listName.its('length').should('eq', 1)
  })
})
