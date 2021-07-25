const Slot = require("./Slot");
const {interval} = require("../../constants");

class Slots extends Array {
    constructor(startTime = 10, endTime = 18) {
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