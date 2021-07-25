const Calender = require("./Calender");

describe('Calender', () => {

    it('should have startTime and endTime Property which denotes working slots in calender', () => {
        const calender = new Calender( 10, 11);
        expect(calender.slots.length).toEqual(12);
    });

    it('should return list of available slots', () => {
        const calender = new Calender( 10, 11);
        const availableSlots = calender.getAvailableSlots();
        expect(availableSlots[0].from).toEqual("10.00");
        expect(availableSlots[0].to).toEqual("11.00");
    });


    it('should book slots with given timeslots', () => {
        const timeSlotsToBeBooked = [
            {
                from: 10.15,
                to: 10.30
            },
            {
                from: 10.40,
                to: 10.50
            },

        ];
        const expectedAvailableSlots = [
            {from: '10.00', to: '10.15'},
            {from: '10.30', to: '10.40'},
            {from: '10.50', to: '11.00'}
        ];
        const calender = new Calender( 10, 11);

        calender.book(timeSlotsToBeBooked);
        const availableSlots = calender.getAvailableSlots();
        expect(availableSlots).toEqual(expectedAvailableSlots);
    });
});
