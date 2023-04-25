/// <reference types="cypress" />
describe('filtering', () => {
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo').type('Learn cypress{enter}')
        cy.get('.new-todo').type('Clean room{enter}')
        cy.get('.new-todo').type('Wash the cat{enter}')
        cy.get('.todo-list li:nth-child(2).toggle').click()
    })
    it('should clear "active" filters', () => {
        cy.contains('Active').click()
    })
})