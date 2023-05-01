import TrainPassesPage from './trainPassesPage'

describe('Miami to Fort Lauderdale Monthly Commuter Pass', () => {
    it.only('should successfully purchase a Monthly Commuter Pass with auto-renew for Miami to Fort Lauderdale', () => {
        TrainPassesPage.visit()
        TrainPassesPage.clickBuildYourPassButton()
        TrainPassesPage.selectStartingPoint('Miami')
        TrainPassesPage.selectDestination('Fort Lauderdale')
        TrainPassesPage.selectTicketOptions()
        TrainPassesPage.assertPrice('$285')
        TrainPassesPage.addToCart();
        TrainPassesPage.goToCheckout();
        TrainPassesPage.verifyRedirectToCartPage()
        TrainPassesPage.assertCartPrices('$299', '$284.05')
        TrainPassesPage.assertPricesEqual('$285', '$284 .05')

    })
})