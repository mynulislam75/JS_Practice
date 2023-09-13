//TRY IF ELSE 
if (2 > 3) {
    console.log(123)
}
else {
    console.log(4567)
}
//TRY IT BY TERNARY OPERATOR
let result = (2 < 3) ? 'okay,that is true' : 'whatttt';
console.log(result);

//BASIC GRADING CALCULATION
let x = 69;
const gradingCalculation = (a) => {
    const resultIs = (a >= 80) ? 'A+' : (a < 80 && a >= 70) ? 'A-' : (a < 70 && a >= 60) ? 'B' : (a < 60 && a >= 50) ? 'B-' : (a < 50 && a >= 40) ? 'C' : 'F';
    return resultIs;
}
let finalResult = gradingCalculation(x);
console.log(finalResult);

// Write a program to read any day number in integer and display the day name in word format also 
// Also write a program in C to read any Month Number in integer and display the number of days for this month.


const arrayOfMonth = ["","January", "February", "March", "April", "May", "June", "July", "August", "September", "Octeber", "November", "December"];
// console.log(arrayOfMonth[0])
const arrayOfDay = ["", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday"]
let dayNumber = 5;
let monthNumber = 7;
const dayMonthCalculation = (y, z) => {

    if (y <= 7 || z <= 12) {
        const dayResult = arrayOfDay[y];
        const monthResult = arrayOfMonth[z];
        return {
            month: monthResult,
            day: dayResult
        }
    }
    else {
        return 'please enter a valid month and day number';
    }

}
const finalResultIs = dayMonthCalculation(dayNumber, monthNumber);
console.log(finalResultIs);
