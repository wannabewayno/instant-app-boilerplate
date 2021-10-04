module.exports = class Time {
    constructor() {
        this.millisecond = 1;
        this.second =  1e3 * this.millisecond;
        this.minute = 60 * this.second;
        this.hour = 60 * this.minute;
        this.day = 24 * this.hour;
        this.week = 7 * this.day;
        this.month = 30 * this.day; // not exact 30 is closer than 31.
        this.year = 365 * this.day;
    }
}