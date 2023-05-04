class TrainPassesPage {
    visit() {
        cy.visit('https://www.gobrightline.com/train-passes')
        cy.viewport(1300, 900)
        cy.wait(2000)
        cy.contains('Build Your Pass')
    }
    visitBooking() {
        cy.visit('https://www.gobrightlinedev.com/booking')
        cy.wait(2000)

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
        // booking process objects
    selectStartBooking(bookingstart) {
        const startFromBooking = cy.get('.blte-tickets-form__first-row input.blte-widget-input__input[placeholder="Select from"]')
        startFromBooking.click({ multiple: true })
        cy.get(':nth-child(1) > .blte-od-desktop-select__list > :nth-child(1) > .blte-od-desktop-select__listItems').contains(bookingstart).click()
    }

    selectBookingDestination(bookingDestination) {
        cy.get(':nth-child(3) > .blte-od-desktop-select__list > :nth-child(1) > .blte-od-desktop-select__listItems').contains(bookingDestination).click()
    }

    selectBookingDeparture() {
        const selectDeparture = cy.get('.blte-tickets-form__first-row input.blte-widget-input__input[placeholder="Add departure"]')
        selectDeparture.click()
        cy.get('[aria-label="Choose Friday, May 5, 2023 as your check-in date. It’s available."] > .blte-date-range-picker__day').click()
    }
    searchTickets() {
        cy.get('#booking-root > div > header > div.blte-booking-header__tickets-container > div > div > div > div > div > div > form > div.blte-tickets-form__second-row > button').click()
    }
    selectTrainOption() {
        cy.get('#booking-root > div > div.blte-booking-page > div > div.blte-train-selection-body__train-results > div.blte-train-selection-body__route-items > div > div > div > div:nth-child(1) > div.blte-route-item__prices > button.blte-price-item.blte-price-item--class-smart').click()
    }
    bookingPassengerForm() {
        cy.get('.aem-GridColumn--default--7 > :nth-child(1) > .blte-rti-step__card').should('be.visible')
    }
    bookingPassengerName(passengerName) {
        const enterName = cy.get('input[name="passengers.0.passenger.firstName"')
        enterName.click().type(passengerName)

    }
    bookingPassengerSurname(passengerSurname) {
        const enterSurname = cy.get('input[name="passengers.0.passenger.lastName"')
        enterSurname.click().type(passengerSurname)
    }
    bookingDateofBirth(passengerBirth) {
        const enterDateofBrith = cy.get('input[name="passengers.0.passenger.dateOfBirth"')
        enterDateofBrith.click().type(passengerBirth)
    }

    bookingEmail(passengerEmail) {
        const enterEmail = cy.get('input[name="passengers.0.passenger.email"')
        enterEmail.click().type(passengerEmail)
    }
    bookingPrefix(passengerPrefix) {
        const choosePrefix = cy.get('input[name="passengers.0.passenger.phoneNumber.countryCode"')
        choosePrefix.click()
        cy.get('#booking-57b9734d3b > div.Popover.Popover-below.blte-phone-number__country-code > div > div > div').contains(passengerPrefix).click()
    }

    bookingPhoneNo(passengerPhoneNo) {
        const enterPhoneNo = cy.get('input[name="passengers.0.passenger.phoneNumber.number"')
        enterPhoneNo.click().type(passengerPhoneNo)
    }
    bookingContinue() {
        cy.get('#booking-root > div > div.blte-booking-page > div > div > div > div.aem-GridColumn.aem-GridColumn--default--7.aem-GridColumn--offset--default--0.aem-GridColumn--default--none.aem-GridColumn--desktop--6.aem-GridColumn--offset--desktop--1 > div:nth-child(1) > div > form > div > div.blte-passenger-info__actions-container > div > button').contains('Save and Continue').click()
        cy.get('#booking-root > div > div.blte-booking-page > div > div > div > div.aem-GridColumn.aem-GridColumn--default--7.aem-GridColumn--offset--default--0.aem-GridColumn--default--none.aem-GridColumn--desktop--6.aem-GridColumn--offset--desktop--1 > div:nth-child(1) > div > form > div > div.blte-passenger-info__actions-container > div > button').contains('Save and Continue').click()
    }
}

export default new TrainPassesPage()