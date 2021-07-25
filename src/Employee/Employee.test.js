const Employee = require("./Employee");
const Calender = require("../Calender/Calender");

describe('Employee', () => {

    it('should have name, startTime and endTime Property which denotes working hours', () => {
        const employee = new Employee('Tushar', 10, 18);
        expect(employee.name).toEqual('Tushar');
        expect(employee.startTime).toEqual(10);
        expect(employee.endTime).toEqual(18);
    });

    it('should have calender associated with employee to check his availability', () => {
        const employee = new Employee('Tushar', 10, 18);
        expect(employee.calender instanceof Calender).toEqual(true);
        expect(employee.calender.getAvailableSlots().length).toEqual(1);
    });


});
