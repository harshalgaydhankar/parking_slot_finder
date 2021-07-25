const Slot = require("./Slot");

describe('Slot', () => {
    it('should have properties which denotes slot time and availability', () => {
        const slot = new Slot(10,true);
        expect(slot.time).toEqual(10);
        expect(slot.isAvailable).toEqual(true);
    });
});
