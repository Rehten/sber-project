import {Time} from "./time";

describe('Time', () => {
    it('should contain date property', function () {
        const time: Time = new Time(new Date());

        expect(time.date).not.toBeNull();
        expect(time.date).toBeDefined();
    });

    it('should correct calculate weekday on initialization', function () {
        const time: Time = new Time(new Date('2020-01-02T00:00:00'));

        expect(time.weekday).toBe(4);
    });

    it('should contain correct information about work-day', function () {
        const thursdayTime: Time = new Time(new Date('2020-01-02T00:00:00'));
        const fridayTime: Time = new Time(new Date('2020-01-03T00:00:00'));
        const saturdayTime: Time = new Time(new Date('2020-01-04T00:00:00'));

        expect(thursdayTime.isWorkDay).toBe(true);
        expect(fridayTime.isWorkDay).toBe(true);
        expect(saturdayTime.isWorkDay).toBe(false);
    })
});
