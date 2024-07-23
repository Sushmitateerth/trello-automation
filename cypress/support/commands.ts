// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import LoginPage from '../integration/examples/pageObjects/LoginPage'

Cypress.Commands.add('pressEscape', () => {
  cy.get('body').trigger('keydown', { keyCode: 27 })
  cy.wait(500)
  cy.get('body').trigger('keyup', { keyCode: 27 })
})

Cypress.Commands.add('ifElementExists', (selector, action) => {
  cy.get('body').then(($body) => {
    const element = $body.find(selector)
    if (element.length > 0) {
      const fn = element[action as any] as unknown as VoidFunction
      fn && fn()
    } else {
      console.log('element not found...')
    }
  })
})

Cypress.Commands.add('loginSuccessfully', () => {
  cy.visit(Cypress.env('url'))
  const loginPage = new LoginPage()

  cy.ifElementExists('#onetrust-accept-btn-handler', 'click')

  loginPage.getLoginButtonClick().click()

  cy.origin('https://id.atlassian.com', () => {
    const { default: _LoginPage } = Cypress.require('../integration/examples/pageObjects/LoginPage')

    const loginPage = new _LoginPage()
    loginPage.getUsername().type(Cypress.env('email'))
    loginPage.getLoginSubmitButton().should('not.be.disabled').click()
    loginPage.getPassword().type(Cypress.env('password'), { force: true }).should('be.visible')
    loginPage.getLoginSubmitButton().should('not.be.disabled').click()
  })
})

declare global {
  namespace Cypress {
    interface Chainable {
      pressEscape(): void
      ifElementExists(selector: string, action: string): void
      loginSuccessfully(): void
    }
  }
}
