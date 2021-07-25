const {interval} = require("../constants")

function adjustTimeToNextSlotTime(time) {
    let newTime = parseFloat(time) + interval;
    if (newTime - parseInt(newTime) >= 0.60) {
        newTime = newTime + 0.40;
    }
    return newTime.toFixed(2);
}

function getSlotSpan(slots) {
    return {
        from: slots[0].time,
        to: adjustTimeToNextSlotTime(slots[slots.length - 1].time)
    }
}

module.exports = {adjustTimeToNextSlotTime, getSlotSpan};