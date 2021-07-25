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

});
