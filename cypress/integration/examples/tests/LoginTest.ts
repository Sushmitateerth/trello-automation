import LoginPage from '../pageObjects/LoginPage'

describe('Login', function () {
  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data
    })
    cy.visit(Cypress.env('url'))
  })

  it('LoginCreds', function () {
    const loginPage = new LoginPage()
    // loginPage.getAcceptCookies().click()
    loginPage.getLoginButtonClick().click()

    cy.origin('https://id.atlassian.com', () => {
      const { default: _LoginPage } = Cypress.require('../pageObjects/LoginPage')

      const loginPage = new _LoginPage()
      loginPage.getUsername().type(Cypress.env('email'))
      loginPage.getLoginSubmitButton().should('not.be.disabled').click()
      loginPage.getPassword().type(Cypress.env('password'), { force: true }).should('be.visible')
      loginPage.getLoginSubmitButton().should('not.be.disabled').click()
    })
  })
})
