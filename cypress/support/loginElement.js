class loginElement {
    username = '#user'
    pass = '#password'
    logInButton = '.inline-flex'

    inputUsername(userEmail) {
        cy.get(this.username)
            .clear()
            .type(userEmail)
    }

    inputPassword(userPass) {
        cy.get(this.pass)
            .clear()
            .type(userPass)
    }

    BTNlogin() {
        cy.get(this.logInButton).click()
    }
}
export default new loginElement()