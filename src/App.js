const records = require("./input");
const Employee = require("./Employee/Employee");
const SlotFinder = require("./SlotFInder/SlotFinder");
const Display = require("./Display/Display");

function run(records){
    const employees = records.map((record) => {
        const emp = new Employee(record.name, record.startTime, record.endTime)
        emp.calender.book(record.bookedSlots);
        return emp;
    });
    const availableSlots = new SlotFinder().getAvailableSlots(employees);
    const display = new Display();
    availableSlots.forEach(slot => display.printSlot(slot));
}

module.exports = {run};
run(records);