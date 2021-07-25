const Display = require("./Display");

describe('Display', () => {
    it('should print slot in from-to format', () => {
        console.log = jest.fn();
        const slot = {
            from : "10.30",
            to : "13.00"
        };
        new Display().printSlot(slot);
        expect(console.log).toBeCalledTimes(1);
        expect(console.log).toBeCalledWith("10:30-13:00");

    });

});
