import {Straight} from "../types/services/straight";
import {Reverse} from "../types/services/reverse";
import {BackendTime} from "../entities/backend-time";
import {Time} from "../entities/time";

class TimeConverter implements Straight<BackendTime, Time>, Reverse<BackendTime, Time> {
    straight(input: BackendTime): Time {
        const isDayValid: boolean = ((input.day >= 1) && (input.day <= 31));
        const isMonthValid: boolean = ((input.month >= 1) && (input.month <= 12));
        let isTimeValid: boolean = isMonthValid && isDayValid;

        if (isTimeValid) {
            for (let key in input) {
                if (input[key as keyof BackendTime] < 0) {
                    isTimeValid = false;
                }
            }
        }

        if (isTimeValid) {
            const {year, month, day} = input;

            return new Time(new Date(year, month - 1, day));
        } else {
            throw Error(`One of this values is not allowed: year ${input.year}, month ${input.month}, day ${input.day}`);
        }
    }

    reverse(input: Time): BackendTime {
        const {date} = input;
        const isValidDate: boolean = !isNaN(Number(date));
        if (isValidDate) {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return {
                day,
                month,
                year
            };
        } else {
            throw Error("Negative values is not allowed.");
        }
    }
}

const timeConverter = new TimeConverter();

export default timeConverter;
