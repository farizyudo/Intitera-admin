import loginElement from "../support/loginElement";
const userData = require('../fixtures/user.json')


describe('Login Scenario', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  // Login Success | Positive Case
  // Login Valid
  it('Login Success', () => {                              // Login Success
    loginElement.inputUsername(userData.valid_username)
    loginElement.inputPassword(userData.valid_pass)
    loginElement.BTNlogin()
    cy.wait(1000)
    cy.contains('Dashboard').should('be.visible')
  })

  // Login Success | Positive Case
  // Case Sensitivity Username
  it('Case Sensitivity Username', () => { // Login Success uppercase and lowercase Email
    loginElement.inputUsername('sUpErAdMiN')
    loginElement.inputPassword('password')
    loginElement.BTNlogin()
    cy.wait(1000)
    cy.contains('Dashboard').should('be.visible')
  })

  // Login Failed | Negative Cases
  // Case Sensitivity password
  it('Case Sensitivity password', () => {  // login failed uppercase and lowercase password
    loginElement.inputUsername(userData.invalid_username)
    loginElement.inputPassword('PasSworD')
    loginElement.BTNlogin()
    cy.wait(1000)
    cy.contains('error').should('be.visible')
  })

  // Email dan Password Salah
  it('Login menggunakan email dan password yang salah', () => {
    loginElement.inputUsername('super_admin@gmail.com')
    loginElement.inputPassword('PassworD')
    loginElement.BTNlogin()
    cy.wait(1000)
    cy.contains('error').should('be.visible')
  })

  // Email Salah
  it('Login menggunakan email yang salah', () => {
    loginElement.inputUsername('super_admin@gmail.com')
    loginElement.inputPassword('password')
    loginElement.BTNlogin()
    cy.wait(1000)
    cy.contains('error').should('be.visible')
  })

  // Password Salah
  it('Login menggunakan password yang salah', () => {
    loginElement.inputUsername('super_user@gmail.com')
    loginElement.inputPassword('superadmin')
    loginElement.BTNlogin()
    cy.contains('error').should('be.visible')
  })
  // username dan password kosong
  it('Login dengan username dan password yang kosong', () => {
    loginElement.BTNlogin()
    cy.url().should('include', '/login')
  })

  // Username Kosong
  it('Login dengan username yang kosong', () => {
    loginElement.inputPassword(userData.valid_pass)
    loginElement.BTNlogin()
    cy.url().should('include', '/login')
  })

  // Password kosong
  it('Login dengan password kosong', () => {
    loginElement.inputUsername(userData.valid_username)
    loginElement.BTNlogin()
    cy.url().should('include', '/login')
  });
})