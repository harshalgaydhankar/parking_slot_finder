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

function isOverlappingSlots(firstSlot, secondSlot){
    return Math.max(parseFloat(firstSlot.from), parseFloat(secondSlot.from)) < Math.min(parseFloat(firstSlot.to), parseFloat(secondSlot.to));
}

module.exports = {adjustTimeToNextSlotTime, getSlotSpan, isOverlappingSlots};