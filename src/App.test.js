const App = require("./App");
const records = require("./input");

describe('App', () => {

    it('should delegate task to domains and get available slots', () => {
        console.log = jest.fn();
        App.run(records);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toBeCalledWith("14:00-16:00");
    });
});
