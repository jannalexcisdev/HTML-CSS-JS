// function myFunction() {
//     document.getElementById('demowhereto').innerText = "Hello World Test";
// }



// let w,x,y,z;
// x = 5;
// y = 6;
// z = x + y;
// w = 5;
// let a ="volvo" +16+19
// let b = 16 + 19 + 'volvo'

// function myFunction() {
//     document.getElementById('demo3').innerHTML = 'the value of z is ' + z + ' .'
//     document.getElementById('demo4').innerHTML = z
// }

// function demoFunction () {
//     document.getElementById('demo5').innerText = 'Jann' + ' ' + "Alexcis"
//     document.getElementById('demo6').innerText = a 
//     document.getElementById('demo7').innerHTML = b 

// }

// function demoFunction1 () {
//     document.getElementById('demo8').innerHTML = a + "<br>" + b
//     document.getElementById('demo9').innerHTML = (x==y) +'<br>' +  (w==x)
// }



// const person = {
//     firstName:'John',
//     lastName:'Doe',
//     age:10
// };
// function myFunction() {
//     document.getElementById('demo10').innerHTML = person.firstName + ' ' + person.lastName + ' is ' + person.age;
// }



// function myFunction(p1,p2) {
//     return p1 * p2
// }

// function myResult() {
//     let result = myFunction(4, 3);
//     document.getElementById("demo11").innerHTML = result;
// }


// //JSON result string in json notaion
// const person = {
//     name:'Jann',
//     age:23, 
//     city: 'Rosario'
// };
// document.getElementById('demo21').innerHTML = JSON.stringify(person)



// function Person (firstName, lastName, age, eyeColor) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.eyeColor = eyeColor;
// }

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// const mySister = new Person("Anna", "Rally", 18, "green");
// const mySelf = new Person("Johnny", "Rally", 22, "green");
// myFather.nationality = "English";
// Person.prototype.nationality = "Filipino";

// myMother.changeName = function (name) {
//     this.lastName = name;
// };
// myMother.changeName('Doe')

// document.getElementById('demo22').innerHTML = 'He is ' + myFather.nationality;
// document.getElementById('demo23').innerHTML = myMother.firstName + " " + myMother.lastName


// function displayDate(){
//     document.getElementById('demo24').innerHTML = Date ();
// }




var text = "Apple, Banana, Kiwi";
let newText =text.slice(0,5);
let newerText =text.slice(-12, -6);
document.getElementById('demo25').innerHTML = text.charAt(0);
document.getElementById('demo26').innerHTML = text.charAt(6);
document.getElementById('demo27').innerHTML = newerText;

//PAG SUBSTING HALOS SAME NG SLICE ANG PAGKAKAIBA LANG AY YUNG FIRST YUNG SLICE TAS YUNG SECOND VARIABLE AY KUNG GANO KAHABA KUKUNIN