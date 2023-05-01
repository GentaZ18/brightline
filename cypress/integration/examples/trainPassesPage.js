class TrainPassesPage {
    visit() {
        cy.visit('https://www.gobrightline.com/train-passes')
        cy.viewport(1300, 900)
        cy.wait(2000)
        cy.contains('Build Your Pass')
    }

    clickBuildYourPassButton() {
        const buildYourPassButton = cy.get('[data-testid="primaryBtnWithLoader"]')
        buildYourPassButton.click()
    }

    selectStartingPoint(startingPoint) {
        const travelFromButton = cy.get('#headlessui-menu-button-1')
        travelFromButton.click()
        cy.get('#headlessui-menu-items-2').contains(startingPoint).click()
    }

    selectDestination(destination) {
        const travelToButton = cy.get('#headlessui-menu-button-3')
        travelToButton.click()
        cy.get('#headlessui-menu-items-4').contains(destination).click()
    }

    assertFormUpdate(startingPoint, destination) {
        cy.get('#headlessui-menu-button-1').should('have.text', 'Travel From' + startingPoint)
        cy.get('#headlessui-menu-button-3').should('have.text', 'Travel To' + destination)
        cy.contains('Update: same price as Boca Raton and ' + destination + ', with an extra destination included.').should('be.visible')
    }

    selectTicketOptions() {
        cy.get('#form-widget > .flex-row > :nth-child(1)').contains('Smart').click()
        cy.get(':nth-child(10) > .px-5').contains('Monthly').click()
        cy.get('[data-testid="primaryBtnWithLoader"]').contains('Continue').click()
        cy.get('[data-testid="primaryBtnWithLoader"]').contains('Continue').click()
    }
    assertPrice(price) {
        cy.get('.items-start > .flex-col > .text-bl-black').should('have.text', price).as('price')
    }
    addToCart() {
        cy.get('[data-testid="primaryBtnWithLoader"]').contains('ADD TO CART').click()
    }

    goToCheckout() {
        cy.get('[data-testid="btn"]').contains('CHECK OUT').click()
    }

    verifyRedirectToCartPage() {
        cy.url().should('include', '/cart')
    }

    assertCartPrices(price1, price2) {
        cy.get('.hidden > .flex > .text-14').should('have.text', price1)
        cy.get('.flex > .text-20').should('have.text', price2).as('price2')
    }

    assertPricesEqual(price, price2) {
        cy.get('@price').then((price) => {
            cy.get('@price2').then((price2) => {
                expect(price.text()).to.eq(price2.text())
            })
        })
    }
}

export default new TrainPassesPage()