// Alert

//Question NO #1

// alert("Hello, welcome you here new user.");

//Question NO #2

// alert("Error! Please enter valid passsword.");

//Question NO #3

// var a = "Welcome to JS land...";
// var b = "Happy Coding";
// document.write(a + "<br>" + b);

//Question NO #4

// alert("Welcome to JS land...");
// alert("Happy Coding");

//Question NO #5

// Done by Console



// Variables

// var userName;
// var myName = "Bilal Ahmad";
// var message;
// message = "Hello World";
// alert(message);

// var name = "Bilal Ahmad";
// var age = "15";
// var status = "Certified Web And Mobile Developer";
// alert(name);
// alert(age);
// alert(status);

// alert("Pizza  \r\n pizz \r\n piz \r\n pi \r\n p");

// var email = "bilalahmad147500@gmail.com";
// alert("my email address is " + email);

// var book = "A smarter way to learn JavaScript.";
// alert(book);

// document.write("yeah! I can write HTML through Javascript.");

// Variables for Numbers

// var age = "15";
// alert("I am " + age + " years old.");

// for (var i=1; i++;){
//     alert("you have visited website " + i + " times.")
// }

// var birthYear = 2001;
// var type = typeof(birthYear);
// document.write("my birth year is " + birthYear + "<br>  year document type is " + type);

// var name = "bilal";
// var title = "shirts";
// var quantity = 5;
// document.write(name + " visits this online store " + " and bought "+ quantity + title);


// var a = +prompt("enter num1 : ");
// var b = +prompt("enter num2 : ");
// var c = a + b;
// var c = a - b;
// var c = a * b;
// var c = a / b;
// var c = a % b;
// document.write("sum of " + a + " and " + b + " is " + c);
// document.write("sub of " + a + " and " + b + " is " + c);
// document.write("mul of " + a + " and " + b + " is " + c);
// document.write("div of " + a + " and " + b + " is " + c);
// document.write("mod of " + a + " and " + b + " is " + c);

// var a;
// document.write("Value of a is  " + a);
// a = 10;
// document.write("<br> initial value is " + a);
// a++;
// document.write("<br>increament is " + a);
// a--;
// document.write("<br>decreament is " + a);

// var a = +prompt("price of one ticket is : ");
// var num = +prompt("enter number of tickets : ");
// var total = a * num;
// document.write("price of tickets is " + total);

// var a = +prompt("enter number for table", 5);
// var b = +prompt("enter num upto", 10);
// for (var i = 1; i <= b; i++) {
//     document.write(a + " * " + i + " = " + a * i +"<br>");
// }

// var i1 = +prompt("enter price for item 1");
// var q1 = +prompt("enter quantity for item 1");
// var i2 = +prompt("enter price for item 2");
// var q2 = +prompt("enter quantity for item 2"); 
// var shipping = +prompt("enter shipping charges for items");
// var total = (i1 * q1) + (i2 * q2) + shipping;
// document.write("item one price is "+ i1);
// document.write("<br>item one quantity is "+ q1);
// document.write("<br>item two price is "+ i2);
// document.write("<br>item two quantity is "+ q2);
// document.write("<br>item charges is "+ shipping);
// document.write("<br>total chrages is " + total);


// var cities = ["karachi", "lahore", "multan", "sahiwal"];
// var city = prompt("enter city name :");
// if (city === "karachi"){
//     alert("welcome to city of lites.");
// }
// else if (city === "lahore"){
//     alert("welcome to heart of Pakistan.");
// }
// else if (city === "multan"){
//     alert("welcome to city of caints.");
// }
// else if (city === "sahiwal"){
//     alert("welcome among loving people.");
// }
// else{
//     alert("enter right name of city.");
// }


// var gender = prompt("enter gender: 'm' for male and 'f' for female");
// if (gender === "m"){
//     alert("welcome you here Sir");
// }
// else if ( gender === "f"){
//     alert("welcome you here Mam");
// }
// else{
//     alert("enter right command.");
// }

// var fuel = +prompt("enter remaining fuel :");
// if ( fuel < 0.25){
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("fuel is enough.");
// }


// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// true

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// } if (c === 14) {
//     alert("condition 4 is true");
// }


// condition 2 and 4 is true.


// var x = prompt("enter char :");
// if (x >= 'A' && x <= 'Z'){
//     alert("this char is on upper case.");
// }
// else if (x >= 'a' && x <= 'z'){
//     alert("this char is on lower case.");
// }
// else{
//     alert("Not a char.");
// }

// var a = +prompt("enter number");
// var b = +prompt("enter number");
// if (a > b) {
//     document.write(a);
// }
// else if ( a < b){
//     document.write(b);
// }
// else if ( a === b){
//     document.write(b);
// }
// else{
//     alert("incorrect command.");
// }

// var passsword = "12345";
// var inputPassword = prompt("enter password");
// if (passsword === inputPassword){
//     alert("Correct Password");
// }
// else if (inputPassword === ""){
//     alert("enter Password");
// }
// else{
//     alert("inCorrect Password");
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     alert(greeting);
// }
// else {
//     greeting = "Good evening";
//     alert(greeting);
// }


// Arrays Chapter


// var names = ["uqman", "jawad", "bilal", "zubair", "talha"];

// var numbers = [1,2,3,4,5,6,7];

// var qualification = ["SSC"," HSC"," BCS"," BS"," BCOM"," MS"," M. Phil"," PhD"];
// document.write("Qualification : <br> ")
// for (var i=1; i<qualification.length; i++){
//     document.write(i + " : " + qualification[i] + "<br>");
// }

// var names = ["bilal", "zubair", "talha"];
// var marks = [300, 350, 400];
// var totalMarks = 500;
// for (var i = 0,j = 0; i < name.length, j < marks.length ; i++, j++){
//     document.write("Score of " + names[i] + " and marks is " + marks[j]+ ".  Percentage is " + (marks[j]/500 * 100) + "<br>") ;
// }

// var marks = [480,310,420,270,350,120,380];
// marks.sort();
// document.write(marks);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();
document.write(energy);
console.log(typeof(fruits));
console.log(typeof(energy));




