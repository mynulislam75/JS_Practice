//create object
// let createObj=Object();
// console.log(createObj);
// createObj.firstName="Marufa";
// console.log(createObj);
// createObj.secondName="Sabrina";
// console.log(createObj);

//remove an element from object
let createObj={
    name:"Mynul",
    age:23,
    salary:2.5,
    school:"JUST"
}
delete createObj.age;
// console.log(createObj);

//check an element in object
console.log("age" in createObj);
console.log("school" in createObj)

//for in loop in object
 for (let getKey in createObj){
    // console.log(getKey)
    // console.log(createObj[getKey])
    if ("name" in createObj){
        // console.log('woooowwww');
    }
 }
//  console.log(createObj.name);
//  console.log(createObj["school"]);

 //OBJECT REVISION

 let createObject={
    name:"Mynul",
    age:23,
    home:"Rajshahi",
    District:"Bangmara",
 }
//  console.log(createObject)

 //ADDING NEW ELEMENT IN OBJECT
 createObject.addNew="Marufa";
//  console.log(createObject);

 //REMOVING AN ELEMENT FROM OBJECT
 delete createObject.District;
//  console.log(createObject);

 //TEST OBJECT PROPERTY
 let testProperty="name" in createObject
//  console.log(testProperty);
 let testAgain="District" in createObject;
//  console.log(testAgain);

 //ACCESS OBJECT PROPERTY
 console.log(createObject.home);
 console.log(createObject["home"])

 //FOR IN LOOP IN OBJECT
 for (let getKeys in createObject ){
    let getValue=createObject[getKeys];
 }