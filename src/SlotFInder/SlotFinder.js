const {isOverlappingSlots} = require("../utils");

class SlotFinder {
    constructor() {
    }

    getAvailableSlots(employees) {
        let availableSlots = undefined;
        let employeeAvailableSlots = undefined;
        let isFirst = true;
        employees.forEach((employee) => {
            employeeAvailableSlots = employee.calender.getAvailableSlots();
            if (isFirst) {
                availableSlots = employeeAvailableSlots
                isFirst = false;
            } else {
                availableSlots = this.getInterSection(availableSlots, employeeAvailableSlots);
            }
        });
        return availableSlots;
    }

    getInterSection(availableSlots, employeeAvailableSlots) {
        let interSection = [];
        availableSlots.forEach((slot) => {
            employeeAvailableSlots.forEach((employeeSlot) => {
                if(isOverlappingSlots(slot, employeeSlot)){
                    interSection.push({
                        from : Math.max(slot.from, employeeSlot.from).toFixed(2),
                        to: Math.min(slot.to, employeeSlot.to).toFixed(2)
                    })
                }
            })
        })
        return interSection;
    }
}

module.exports = SlotFinder;