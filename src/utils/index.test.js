const {isOverlappingSlots} = require("./index");
const {adjustTimeToNextSlotTime, getSlotSpan} = require("./index");

describe('Utils Test', () => {

    it('should adjust time to next slot time', () => {
        const actualTime = adjustTimeToNextSlotTime("10.50")
        expect(actualTime).toEqual("10.55");
    });

    it('should adjust time to next slot time by an hr if mins cross 60', () => {
        const actualTime = adjustTimeToNextSlotTime("10.55")
        expect(actualTime).toEqual("11.00");
    });

    it('should get slot time span', () => {
        const slots = [
            {
                time : "10.00",
                isAvailable : true,
            },
            {
                time : "10.05",
                isAvailable : true,
            }
        ];

        const actualSlotSpan = getSlotSpan(slots)
        expect(actualSlotSpan).toEqual({
            "from": "10.00",
            "to": "10.10"
        });
    });

    it('should return true if slot time span is overlapped', () => {
        const first = {
            from : "10.30",
            to: "13.00"
        };
        const second = {
            from : "12.00",
            to: "14.40"
        };

        const actual = isOverlappingSlots(first, second);
        expect(actual).toEqual(true);
    });

    it('should return false if slot time span is not overlapped', () => {
        const first = {
            from : "10.30",
            to: "13.00"
        };
        const second = {
            from : "15.00",
            to: "18.40"
        };

        const actual = isOverlappingSlots(first, second);
        expect(actual).toEqual(false);
    });

});
