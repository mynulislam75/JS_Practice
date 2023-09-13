//EXPLORE LOOP

const j = 10;
for (let i = 0; i < j; i++) {
    console.log('hello');
}

//PROBLEMS 
//Using a for loop print all even numbers up to and including n. Don’t include 0.
let eArray = []
let i=0;
const eNum = (n) => {
    for (i; i <= n; i++) {
        if (i % 2 == 0 && i!=0) {
            eArray.push(i);
        }
    }
    return eArray;
}
let r=eNum(100);
console.log(r)
