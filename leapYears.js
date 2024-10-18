const leapYears = function (year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {

            if (year % 400 === 0) {
                return true;
            }
            return false;
        }

        else {
            return true;
        }
    }

    else {
        return false;
    }

};

const year = prompt("Type the year");
const isLeapYear = leapYears(year);

if (isLeapYear) {
    alert("It's a leap year :)")
}
else {
    alert("It isn't a leap year :(")
}