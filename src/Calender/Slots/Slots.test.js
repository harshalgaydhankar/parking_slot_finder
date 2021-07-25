const Slots = require("./Slots");

describe('Slots', () => {

    it('should extend array', () => {
        const slots = new Slots();
        expect(slots instanceof Array).toEqual(true);
    });
});
