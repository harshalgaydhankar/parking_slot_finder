class Display {

    constructor() {
    }
    printSlot(slot) {
        console.log(`${slot.from.replace('.',':')}-${slot.to.replace('.',':')}`)
    }
}

module.exports = Display;