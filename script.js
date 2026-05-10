// Function to check if a year is a leap year
function checkIsLeapYear() {
    const yearInput = document.getElementById('yearInput').value;
    var isLeapYear = false;
    if (yearInput % 4 == 0) {
        isLeapYear = true;
    }
    if (yearInput % 100 == 0) {
        isLeapYear = false;
    }
    if (yearInput % 400 == 0) {
        isLeapYear = true;
    }
    if (isLeapYear == false) {
        window.alert(yearInput + " isn't a leap year");
    }
    else {
        window.alert(yearInput + " is a leap year");
    }

    document.getElementById('yearInput').value = '';
}