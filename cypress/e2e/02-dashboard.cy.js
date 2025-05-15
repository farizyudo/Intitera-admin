import loginElement from "../support/loginElement";
import { getTodayDateFormatted } from "../support/utils/dateUtils"
import { getTomorrowDateFormatted } from "../support/utils/dateUtils";
const userData = require('../fixtures/user.json');


describe('Login Scenario', () => {

    beforeEach(() => {
        cy.visit('/dashboard')
        loginElement.inputUsername(userData.valid_username)
        loginElement.inputPassword(userData.valid_pass)
        loginElement.BTNlogin()
    })
    it('e2e UI Testing Dashboard', () => {
        cy.contains('Dashboard').should('be.visible')
        cy.contains('Pelanggan Perbulan').scrollIntoView().should('be.visible')
        cy.contains('Pelanggan Perbulan').scrollIntoView().should('be.visible')
        cy.contains('Penjualan Tahunan').scrollIntoView().should('be.visible')
        cy.contains('Pelanggan Pertahun').scrollIntoView().should('be.visible')
        cy.url().should('include', '/dashboard')
    });

    it('Date Picker', () => {
        cy.get('.absolute').click()
        const today = getTodayDateFormatted()
        const tomorrow = getTomorrowDateFormatted()
        cy.get('.bg-\\[\\#DDE1E6\\] > :nth-child(1) > .flex').type(today)
        cy.get('.bg-\\[\\#DDE1E6\\] > :nth-child(3) > .flex').type(tomorrow)
        cy.get('.h-full').click()
    });
})