//LETSSS EXPLORE BASIC OPERATOR

//ADDITION
function myFunction(a, b) {
    let result = a + b;
    return result;
}
let resultIs = myFunction(10, 20);
console.log(resultIs)

//SUBTRACTION
const myFuntionTwo = (a, b) => {
    let subtraction = a - b;
    return subtraction;
}
let subResult = myFuntionTwo(10, 30);
console.log(subResult);

//MULTIPLICATION
let am = 93;
let bm = 10;
const multiplication = (c, d) => {
    let mulResult = c * d;
    return mulResult;
}
let resultM = multiplication(am, bm);
console.log(resultM);

//DIVISION
const divFunction = (c, d) => {
    let divCal = c / d;
    return divCal;
}
let divResult = divFunction(am, bm);
console.log(divResult);

//REMAINDER
const remainFunction = (c, d) => {
    let remainderCal = c % d;
    return remainderCal;
}
let remainderResult = remainFunction(am, bm);
console.log(remainderResult);

//UNARY OPERATION

let stringONe = "121";
let stringTwo = "231";

const stringFunction = (c, d) => {
 let r=+stringONe+ +stringTwo;
 return r;
}
let resultOfS=stringFunction(stringONe,stringTwo);
console.log(resultOfS);

//INCREAMENT DECREAMNE OPERATOR

const inCreDecreamentFunction =(c,d)=>{
    let result=c++;
    let result2=d++;
    return result,result2;
}
let resultOfC=inCreDecreamentFunction(am,bm);
console.log(resultOfC);