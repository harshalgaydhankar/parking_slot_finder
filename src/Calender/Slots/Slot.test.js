const Slot = require("./Slot");

describe('Slot', () => {
    it('should have properties which denotes slot time and availability', () => {
        const slot = new Slot(10,true);
        expect(slot.time).toEqual(10);
        expect(slot.isAvailable).toEqual(true);
    });

    it('should return isAvailable as false once the slot is booked', () => {
        const slot = new Slot(10);
        expect(slot.time).toEqual(10);
        expect(slot.isAvailable).toEqual(true);
        slot.book();
        expect(slot.isAvailable).toEqual(false);
    });
});
