import TrainPassesPage from './trainPassesPage'

describe('Boca Raton to West Palm Beach', () => {
    it.only('updates the form when Boca Raton and West Palm Beach are selected', () => {
        TrainPassesPage.visit()
        TrainPassesPage.clickBuildYourPassButton()
        TrainPassesPage.selectStartingPoint('Boca Raton')
        TrainPassesPage.selectDestination('West Palm Beach')
        TrainPassesPage.assertFormUpdate('Fort Lauderdale', 'West Palm Beach')
    })
})