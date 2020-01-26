import timeConverter from "./time-converter";
import {Time} from "../types/entities/time";
import {BackendTime} from "../types/entities/backend-time";

describe('TimeConverter', () => {
    let backendTime: BackendTime;
    let clientTime: Time;

    beforeEach(() => {
        backendTime = {
            year: 2020,
            day: 1,
            month: 1
        };
        clientTime = new Time(new Date("2017-01-26"));
    });

    // Converter to backendTime
    it('should transform input object to another object', () => {
        const rslt: Time = timeConverter.straight(backendTime);

        expect(rslt).toBeDefined();
        expect(rslt).not.toBeNull();
        expect(typeof rslt).toBe('object');
    });

    it('should fail on negative values', () => {
        const negativeBackendTime: BackendTime = {
            year: -1001,
            day: 1,
            month: 2
        };
        const test = () => {
            timeConverter.straight(negativeBackendTime);
        };

        expect(test).toThrow(Error);
    });

    it('should correct transform to BackendTime', () => {
        const rslt: Time = timeConverter.straight(backendTime);

        expect(rslt.date.getFullYear()).toBe(backendTime.year);
        expect(rslt.date.getDate()).toBe(backendTime.day);
        expect(rslt.date.getMonth()).toBe(backendTime.month - 1);
    });

    it('should have throw error if date invalid', () => {
        const invalidBackendTimeValues: Array<BackendTime> = [
            {
                ...backendTime,
                month: 0
            },
            {
                ...backendTime,
                day: -200
            }
        ];
        const validBackendTimeValues: Array<BackendTime> = [
            {
                year: 0,
                month: 1,
                day: 1
            },
            {
                year: 1970,
                month: 1,
                day: 1
            }
        ];

        invalidBackendTimeValues.forEach((value: BackendTime): void => {
            const testWithError = (): void => {
                timeConverter.straight(value);
            };

            expect(testWithError).toThrow(Error);
        });
        validBackendTimeValues.forEach((value: BackendTime): void => {
            const testWithoutError = (): void => {
                timeConverter.straight(value);
            };

            expect(testWithoutError).not.toThrow(Error);
        });
    });

    // Converter to clientTime
    it('should reverse transformation input object to another object', () => {
        const rslt: BackendTime = timeConverter.reverse(clientTime);

        expect(rslt).toBeDefined();
        expect(rslt).not.toBeNull();
        expect(typeof rslt).toBe('object');
    });

    it('should fail if date is invalid', () => {
        const invalidDate: Time = new Time(new Date(1000000000000000000000000000000000));
        const test = () => {
            timeConverter.reverse(invalidDate);
        };

        expect(test).toThrow(Error);
    });

    it('should correct transform to Time', () => {
        const rslt: BackendTime = timeConverter.reverse(clientTime);

        expect(rslt.day).toBe(clientTime.date.getDate());
        expect(rslt.month).toBe(clientTime.date.getMonth() + 1);
        expect(rslt.year).toBe(clientTime.date.getFullYear());
    });

    it('should have same values after appl straight + reverse methods to initial value', () => {
        const srcTime: Time = new Time(new Date("2017-01-26"));
        const transformedTime: Time = timeConverter.straight(timeConverter.reverse(srcTime));
        const srcBackendTime: BackendTime = {
            year: 2000,
            day: 1,
            month: 2
        };
        const transformedBackendTime: BackendTime = timeConverter.reverse(timeConverter.straight(srcBackendTime));


        expect(srcTime.date.getDate()).toBe(transformedTime.date.getDate());
        expect(srcTime.date.getMonth()).toBe(transformedTime.date.getMonth());
        expect(srcTime.date.getFullYear()).toBe(transformedTime.date.getFullYear());

        expect(srcBackendTime.day).toBe(transformedBackendTime.day);
        expect(srcBackendTime.month).toBe(transformedBackendTime.month);
        expect(srcBackendTime.year).toBe(transformedBackendTime.year);
    });
});
