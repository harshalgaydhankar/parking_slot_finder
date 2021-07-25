const SlotFinder = require("./SlotFinder");
const Employee = require("../Employee/Employee");

describe('SlotFinder', () => {

    it('should return common available slots for all employees', () => {
        const employees = [];
        const jack = new Employee("Jack",8,17);
        const amy = new Employee("Amy",9,18);
        const phill = new Employee("Phill",8,17);
        jack.calender.book([
            {
                from: 13.30,
                to: 14.00
            },
            {
                from: 15.10,
                to: 16.00
            },
        ]);
        amy.calender.book([
            {
                from: 10.20,
                to: 10.30
            },
            {
                from: 13.00,
                to: 14.00
            },
        ]);
        phill.calender.book([
            {
                from: 9.00,
                to: 12.00
            },
            {
                from: 14.00,
                to: 15.00
            },
            {
                from: 15.30,
                to: 15.45
            }
        ]);
        employees.push(jack);
        employees.push(amy);
        employees.push(phill);
        const expectedAvailableSlots = [
            {from: '12.00', to: '13.00'},
            {from: '15.00', to: '15.10'},
            {from: '16.00', to: '17.00'}
        ];

        const actualAvailableSlots = new SlotFinder().getAvailableSlots(employees);

        expect(actualAvailableSlots).toEqual(expectedAvailableSlots);
    });

});
