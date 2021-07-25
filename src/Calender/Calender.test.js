const Calender = require("./Calender");

describe('Calender', () => {

    it('should have startTime and endTime Property which denotes working slots in calender', () => {
        const calender = new Calender( 10, 18);
        expect(calender.startTime).toEqual(10);
        expect(calender.endTime).toEqual(18);
    });
});
