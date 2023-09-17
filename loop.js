//EXPLORE LOOP

const j = 10;
for (let i = 0; i < j; i++) {
    console.log('hello');
}

//PROBLEMS 
//Using a for loop print all even numbers up to and including n. Don’t include 0.
let eArray = []
let i = 0;
const eNum = (n) => {
    for (i; i <= n; i++) {
        if (i % 2 == 0 && i != 0) {
            eArray.push(i);
        }
    }
    return eArray;
}
let r = eNum(50);
console.log(r);

//Given a number n Calculate the factorial of the number
let f = 1;
let m = 1;
const fCal = (n) => {
    for (m; m <= n; m++) {
        f = f * m;
    }
    return f;
}
let rF = fCal(4);
console.log(rF)


//Sum of n number and return result in an Object
let sArray = [];
let s = 0;
let a = 0;
let b = 0;
const sF = (n) => {
    for (a; a <= n; a++) {
        sArray.push(a);
        if (a == n) {
            for (b; b < sArray.length; b++) {
                s += sArray[b]
            }
        }
    }
    return {
        numberLIst: sArray,
        sumResult: s
    };
}
let sResult = sF(100);
console.log(sResult)
