const Slot = require("./Slot");

class Slots extends Array {
    constructor(startTime = 10, endTime = 18, interval = 0.05) {
        super();
        this.initialiseSlots(startTime, endTime, interval);
    }

    initialiseSlots(startTime, endTime, interval) {
        for (let i = startTime; i<endTime; i +=interval ){
            if(i - parseInt(i) < 0.60) {
                this.push(new Slot(i));
            }
        }
    }

}

module.exports = Slots;