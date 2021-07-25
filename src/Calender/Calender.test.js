

describe('Calender', () => {

    it('should have interval property which states calender interval', () => {
        Calender calender =- new Calender(5);
        expect(calender.interval).toEqual(5);
    });
});
