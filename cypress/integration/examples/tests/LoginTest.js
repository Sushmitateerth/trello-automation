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
    loginPage.getAcceptCookies().click()
    loginPage.getLoginButtonClick().click()

    cy.origin('https://id.atlassian.com', () => {
      const _LoginPage = Cypress.require('../pageObjects/LoginPage')

      const loginPage = new _LoginPage()
      loginPage.getUsername().type(Cypress.env('email'))
      loginPage.getLoginSubmitButton().should('not.be.disabled').click()
      loginPage.getPassword().this.data.defaultCommandTimeout().type(Cypress.env('password'))
      loginPage.getLoginSubmitButton().click()
    })
  })
})
