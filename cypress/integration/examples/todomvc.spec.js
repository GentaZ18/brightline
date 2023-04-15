/// <reference types="cypress" />
it('should navigate to ToDoMVC App', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo', { timeout: 6000 }).type('learn cypress {enter}')
        // cy.get('.new-todo').type('clean the house {enter}')
        // cy.get(':nth-child(1) > .view > .toggle').click()
        // cy.get(':nth-child(3) > a').click()


    cy.get('label').should('have.text', 'learn cypress') // making an assertion
    cy.get('.toggle').should('not.be.checked')
    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
        //checking if clearing the todo list actually clears the list

    cy.contains('Clear completed').click() //we can use it instead of cy.get
    cy.get('.todo-list').should('not.have.descendants', 'li')
})