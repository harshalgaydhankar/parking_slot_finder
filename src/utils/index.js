const {interval} = require("../constants")

function adjustTimeToNextSlotTime(time) {
    let newTime = parseFloat(time) + interval;
    if (newTime - parseInt(newTime) >= 0.60) {
        newTime = newTime + 0.40;
    }
    return newTime.toFixed(2);
}

module.exports = {adjustTimeToNextSlotTime};