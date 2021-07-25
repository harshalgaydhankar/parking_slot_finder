const Calender = require("../Calender/Calender");

class Employee {
    constructor(name, startTime, endTime) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.calender = new Calender(startTime, endTime);
    }
 }

 module.exports = Employee;