const Slot = require("./Slot");
const {interval} = require("../../constants");
const {adjustTimeToNextSlotTime, getSlotSpan} = require("../../utils");

class Slots extends Array {
    constructor(startTime = 10, endTime = 18) {
        super();
        this.initialiseSlots(startTime, endTime, interval);
    }

    initialiseSlots(startTime, endTime, interval) {
        for (let i = startTime; i < endTime; i += interval) {
            if (i - parseInt(i) < 0.60) {
                this.push(new Slot(i.toFixed(2)));
            }
        }
    }

    getAvailableSlots() {
        const availableChunks = [];
        const availableSlots = [];
        for (let i = 0; i < this.length; i++) {
            if (this[i].isAvailable) {
                availableChunks.push(this[i])
            } else {
                if(availableChunks.length > 0) {
                    availableSlots.push(getSlotSpan(availableChunks));
                }
                availableChunks.splice(0, availableChunks.length)
            }
        }
        if (availableChunks.length === this.length) {
            availableSlots.push(getSlotSpan(this));
        }
        else {
            availableSlots.push(getSlotSpan(availableChunks));
        }
        return availableSlots;

    }

    book(timeSlotsToBeBooked) {
        let startIndex, endIndex;
        timeSlotsToBeBooked.forEach((timeSlot) => {
            startIndex = this.findIndex(slot => slot.time == timeSlot.from);
            endIndex = this.findIndex(slot => slot.time == timeSlot.to);
            for (let i = startIndex; i < endIndex; i++) {
                this[i].book();
            }
        });
    }
}

module.exports = Slots;