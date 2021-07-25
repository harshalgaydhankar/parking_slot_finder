const {adjustTimeToNextSlotTime} = require("./index");

describe('Utils Test', () => {

    it('should adjust time to next slot time', () => {
        const actualTime = adjustTimeToNextSlotTime("10.50")
        expect(actualTime).toEqual("10.55");
    });

    it('should adjust time to next slot time by an hr if mins cross 60', () => {
        const actualTime = adjustTimeToNextSlotTime("10.55")
        expect(actualTime).toEqual("11.00");
    });
});
