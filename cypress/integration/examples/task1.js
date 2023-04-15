describe('Boca Raton to West Palm Beach', () => {
    it('updates the form when Boca Raton and West Palm Beach are selected', () => {
        cy.visit('https://www.gobrightline.com/train-passes')
        cy.viewport(1300, 900)

        // Wait for the page to load
        cy.wait(2000)
        cy.contains('Build Your Pass')


        // Click the 'Build Your Pass' button
        const buildYourPassButton = cy.get('[data-testid="primaryBtnWithLoader"]')
        buildYourPassButton.click().then(() => {

            // Select Boca Raton as the starting point
            const travelFromButton = cy.get('#headlessui-menu-button-1')
            travelFromButton.click()
            cy.get('#headlessui-menu-items-2').contains('Boca Raton').click()

            // Select West Palm Beach as the destination
            const travelToButton = cy.get('#headlessui-menu-button-3')
            travelToButton.click()
            cy.get('#headlessui-menu-items-4').contains('West Palm Beach').click()

            // Assert that the form has been updated correctly
            cy.get('#headlessui-menu-button-1').should('have.text', 'Travel FromFort Lauderdale')
            cy.get('#headlessui-menu-button-3').should('have.text', 'Travel ToWest Palm Beach')
            cy.contains('Update: same price as Boca Raton and West Palm Beach, with an extra destination included.').should('be.visible')
        })
    })
})
