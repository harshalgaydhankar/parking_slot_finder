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
        const slots = new Slots(10, 18);
        const availableSlots = slots.getAvailableSlots(10, 18);
        expect(availableSlots[0].from).toEqual(10);
        expect(availableSlots[0].to).toEqual(18);
    });

});
