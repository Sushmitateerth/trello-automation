import CardsPage from '../pageObjects/CardsPage'
import { createBoard } from '../../../api/board'
import { fetchLists, archiveList, createList } from '../../../api/list'

describe('Card Operations', function () {
  before(function () {
    cy.loginSuccessfully()

    let board = null
    const boardName = 'Automation Board for Cards'
    const listName = 'List for Cards'

    return createBoard(boardName).then((res) => {
      board = res.body
      fetchLists(board.id).then(({ body: lists }) => {
        return Promise.all(lists.map((list) => archiveList(list.id)))
      })
      return createList(listName, board.id)
    })
  })

  beforeEach(function () {
    cy.fixture('example').then(function (data) {
      this.data = data
    })
  })

  it('Add Card and Details', function () {
    const cards = new CardsPage()
    cards.getSelectBoard().click()

    cards.getAddCard().should('be.visible').click()
    cards.getEnterCardTitle().type(this.data.cardTitle)
    cards.getAddCardButton().click()

    const createdCards = cards.getAllCards()
    createdCards.should('have.text', this.data.cardTitle)
    createdCards.its('length').should('eq', 1)

    cy.wait(500)
    cards.getSelectCard().should('be.visible').click()

    cards.getDescription().should('be.visible').click()
    cards.getAddDescription().should('be.visible').type(this.data.cardDescription)
    cards.getClickSave().click()
    cards.getAddDescription().should('have.text', this.data.cardDescription)

    cards.getCommentButton().click()
    cards.getNavToCommentBox().should('be.visible')
    cards.getNavToCommentBox().get('p').invoke('text', this.data.cardComment)
    cards.getCommentSave().click()
    cards.getCardComment().should('be.visible')
    cards.getCardComment().contains(this.data.cardComment)
  })
})
