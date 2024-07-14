class LoginPage {
  getAcceptCookies() {
    return cy.get('#onetrust-accept-btn-handler')
  }

  getLoginButtonClick() {
    return cy.contains('Log in')
  }

  getUsername() {
    return cy.get('#username')
  }

  getLoginSubmitButton() {
    return cy.get('#login-submit')
  }

  getPassword() {
    return cy.get('#password')
  }
}

export default LoginPage
