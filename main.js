// exe.1
// function PrintingToScreen (number) {
// let minNum = 0 ;
// let maxNum = 0 ;
// let stop = 0 ;
// while (stop < 1) {
// number = Number(prompt("type a number"));
// if (number > maxNum ) maxNum = number ;
// if (number < minNum) minNum = number ;
// if (number == 0) stop++ ;
// }
// document.getElementById("exe.1").innerHTML+=`<p>Low number : ${minNum} <br>  High number : ${maxNum}</p>`
// };
// PrintingToScreen () ;

// exe.2
// function returnDividedArray () {
// let firstArray = [];
// let dividedArray = [];
// let item ;
// for (let i = 0; i<10; i++){
// item = Number(prompt("type a number")) ;
// firstArray.push(item)
// item%2==0?dividedArray.push(item): ""
// };
// document.getElementById("exe.2").innerHTML+=`<p>${firstArray}</p>` ;
// return dividedArray ;
// }
// console.log(returnDividedArray());

// exe.3
// function randonArray (userChoise) {
// let randomArray = [];
// let ramdomNum = [] ;
// for (let i = 0; i<10; i++){
// ramdomNum = Math.round(Math.random()*10);
// randomArray.push(ramdomNum);
// }
// randomArray.forEach ((item) => {
// userChoise == item ?console.log("You won") : console.log("Not This Time");
// })
// };
// randonArray(prompt("type a number"));

// exe.4
// function checkFirstLetter(userName) {
//   let first = userName.substring(0, 1);
//   switch (first) {
//     case "A":
//       console.log("Nice");
//       break;

//     case "Z":
//       console.log("Good");
//       break;

//       default : console.log("none");
//   }
// }
// checkFirstLetter(prompt("type a name"));

// exe.5
// function fizBuzzGame () {
// for (let i = 0; i < 100; i++){
// if (i%3 == 0 && i%5== 0){
//     console.log("fiz Buzz");
// }
// else if (i%5 == 0){
//     console.log("buzz");
// }
// else if (i%3 == 0){
//     console.log("fizz");
// }
// else {
//     console.log("none");
// }
// }

// }
// fizBuzzGame();

// exe.6 
// function userNumbers () {
//     let userArray = [] ;
//     let stop = 0; 
//    while (stop < 10){
//    let userNumber = Number(prompt("type a number"));
//    if (userNumber >=1 && userNumber <= 100 && userArray.indexOf(userNumber) == -1) {
//        userArray.push (userNumber) ;
//        stop ++ ;
//    }
//    else {
//        stop -- ;
//    }
//    }
//    return userArray ;
//    }
   
//    console.log(userNumbers());

// function randomArray () {
//     let array = [] ;
//     let number  ;
//     for (let i = 0; i < 50; i++){
//     number = Math.round (Math.random () * 100) ;
//     if (array.indexOf(number) == -1) {
//         array.push(number)
//     }
//     else {
//         i-- ;
//     }
//     }
//     return array ;
// } ;

// console.log(randomArray());

// function finalLottery (array1, array2){
//     let counter = 0 ;
//     for (let i = 0; i < array1.length; i++){
//      array2.indexOf(array1[i]) != -1 ? counter ++ : "" ;
//     }
//     return `We found ${counter} matches` ;
// } ;
// console.log(finalLottery(userNumbers , randomArray));


// exe.1
// function printBuilding (heigth , width , floor  , appartments) {
//     let buliding = {} ;
//     buliding.heigth = heigth ;
//     buliding.width = width ;
//     buliding.floor = floor ;
//     buliding.appartments = appartments ;
//     for (let info in buliding){
//         console.log(`${info} : ${buliding[info]}`);
//     }
// }

// printBuilding (1200 , 300 , 4 , 6);

// exe.2
// function buliding (heigth , width , floor) {
//     this.heigth = heigth ;
//     this.width = width ;
//     this.floor = floor ;
// };

// let buliding1 = new buliding ( 10 ,  20 , 5 ) ;
// let buliding2 = new buliding (19 , 10 ,5) ;
// let buliding3 = new buliding (11 , 12 , 6) ;

// const BUILDINGSARRAY = [buliding1 , buliding2 , buliding3];
// console.log(BUILDINGSARRAY);

// function printBuildingsArray (array) {
//     for ( let i = 0 ; i<array.length; i++){
//         console.log(` heigth :${array[i].heigth} width:${array[i].width} floor:${array[i].floor}`);
//     }
// }

// printBuildingsArray (BUILDINGSARRAY);

// exe.3
// function moreThen5floor (array) {
// let newArray = [];
// for ( let i = 0; i<array.length; i++){
// array[i].floor>5? newArray.push(array[i]):""
// }
// return newArray ;
// }
// console.log(moreThen5floor(BUILDINGSARRAY));

// exe.1
// class Teacher {
//     firtsanme ;
//     lastname ;
//     hourwage ;
//     workhours ;
//     phone ;

//     constructor (firtsanme , lastname , hourwage , workhours , phone ) {
//         this.firtsanme = firtsanme ;
//         this.lastname = lastname ;
//         this.hourwage = hourwage ;
//         this.workhours = workhours ;
//         this.phone = phone ;
//     }
//     printTeacher = () => {
//         console.log(this);
//     }
// };

// let teacher1 = new Teacher ("Dave" , "champan" , 50 , 80 , "89778789");
// let teacher2 = new Teacher ("chris" , "wrigth" , 56 , 78  ,"78989898");
// let teacher3 =  new Teacher ("sean" , "eliot" , 59 , 67 , "98098998");

//exe.7
// let firstNameInp = document.getElementById ("name");
// let lastNmaeInp = document.getElementById("lname") ;
// let wageInp = document.getElementById ("wage") ;
// let phoneInp = document.getElementById("phone");
// let hoursInp = document.getElementById("hours");
// let btn = document.getElementById ("btn");

// let teacher4 ;
// btn.onclick = () => {
// teacher4 = new Teacher (
// firstNameInp.value ,
// lastNmaeInp.value ,
// wageInp.value ,
// hoursInp.value ,
// phoneInp.value )
// console.log(teacher4);
// for (let info in teacher4) {
// document.getElementById("para").innerHTML+=`<p>${info} : ${teacher4[info]}</p>`
// document.getElementById("table").innerHTML+=`<tr><td>${info}<td> ${teacher4[info]}<tr>`
// }
// }
