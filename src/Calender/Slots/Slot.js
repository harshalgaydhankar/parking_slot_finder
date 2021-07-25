class Slot {
    constructor(time, isAvailable = true) {
        this.time = time;
        this.isAvailable = isAvailable;
    }

    book(){
        this.isAvailable = false;
    }
}

module.exports = Slot;