const Calender = require("./Calender");

describe('Calender', () => {

    it('should have interval property which states calender interval', () => {
        const calender = new Calender(5);
        expect(calender.interval).toEqual(5);
    });

    it('should have startTime and endTime Property which denotes working slots in calender', () => {
        const calender = new Calender(5, 10, 6);
        expect(calender.interval).toEqual(5);
        expect(calender.startTime).toEqual(5);
        expect(calender.endTime).toEqual(5);
    });
});
