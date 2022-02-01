

export default class User {

    constructor(firstName, lastName, address, year, month, day) {
        this.first_Name = firstName;
        this.last_Name = lastName;
        this.address = address;
        this.dob = this.dobDate(year, month, day);
    }

    dobDate(year, month, day) {
        const date = new Date();
        date.setFullYear(year);
        date.setMonth(month);
        date.setDate(day);
        date.setHours(0, 0, 0, 0);  //sets T all to 0

        return date;
    }

    getUser(arr) {
        let userData = [this.first_Name, this.last_Name, this.address, this.dob]

        return arr.push(userData);
    }


}
