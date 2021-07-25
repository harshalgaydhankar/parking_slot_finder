const Slots = require("./Slots");

describe('Slots', () => {

    it('should extend array', () => {
        const slots = new Slots();
        expect(slots instanceof Array).toEqual(true);
    });

    it('should initialise slots with default startTime and endTime with difference of default interval 5 mins', () => {
        const slots = new Slots();
        expect(slots.length).toEqual(96);
    });

    it('should return list of available slots with startTime and endTime', () => {
        const slots = new Slots(10, 11);
        const availableSlots = slots.getAvailableSlots();
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
        const slots = new Slots(10, 11);
        expect(slots.length).toEqual(12);
        slots.book(timeSlotsToBeBooked);
        const availableSlots = slots.getAvailableSlots();
        expect(availableSlots).toEqual(expectedAvailableSlots);
    });

});
