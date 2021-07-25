const Slots = require("./Slots/Slots");

class Calender {
    constructor(startTime, endTime) {
        this.slots = new Slots(startTime, endTime);
    }

    getAvailableSlots() {
        return this.slots.getAvailableSlots();
    }

    book(timeSlotsToBeBooked) {
        return this.slots.book(timeSlotsToBeBooked);
    }
}

module.exports = Calender;