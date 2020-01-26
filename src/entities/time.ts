export class Time {
    public readonly weekday: number = this.date.getDay();
    public readonly isWorkDay: boolean = this.weekday <= 5;

    constructor(
        public readonly date: Date
    ) {}
}
