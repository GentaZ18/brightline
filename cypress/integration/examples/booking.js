import trainPassesPage from './trainPassesPage'
import TrainPassesPage from './trainPassesPage'

describe('Booking Process', () => {
    it('searches and books a one way ticket with one adult and "smart"', () => {
        TrainPassesPage.visitBooking()
        TrainPassesPage.selectStartBooking('Boca Raton')
        TrainPassesPage.selectBookingDestination('Miami')
        trainPassesPage.selectBookingDeparture()
        TrainPassesPage.searchTickets()
        TrainPassesPage.selectTrainOption()
        TrainPassesPage.bookingPassengerForm()
        TrainPassesPage.bookingPassengerName('Genta')
        TrainPassesPage.bookingPassengerSurname('Zabelaj')
        TrainPassesPage.bookingDateofBirth('05182000')
        TrainPassesPage.bookingEmail('gentiana@91.life')
        TrainPassesPage.bookingPrefix('+355')
        TrainPassesPage.bookingPhoneNo('688328638')
        TrainPassesPage.bookingContinue()
    })
})