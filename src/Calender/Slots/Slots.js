const Slot = require("./Slot");
const {interval} = require("../../constants");
const {adjustTimeToNextSlotTime} = require("../../utils");

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
                    availableSlots.push({
                        from: availableChunks[0].time,
                        to: adjustTimeToNextSlotTime(availableChunks[availableChunks.length - 1].time)
                    });
                }
                availableChunks.splice(0, availableChunks.length)
            }
        }
        if (availableChunks.length === this.length) {
            availableSlots.push({
                from: this[0].time,
                to: adjustTimeToNextSlotTime(this[this.length - 1].time)
            });
        }
        else {
            availableSlots.push({
                from: availableChunks[0].time,
                to: adjustTimeToNextSlotTime(availableChunks[availableChunks.length - 1].time)
            });
        }
        return availableSlots;

    }

    book(timeSlotsToBeBooked) {
        let startIndex, endIndex;
        timeSlotsToBeBooked.forEach((timeSlot) => {
            startIndex = this.findIndex(slot => slot.time == timeSlot.from);
            endIndex = this.findIndex(slot => slot.time == timeSlot.to);
            console.log(startIndex + " " + endIndex);
            for (let i = startIndex; i < endIndex; i++) {
                this[i].book();
            }
        });
    }
}

module.exports = Slots;