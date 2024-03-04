//Addition operators
function addition() {
    var Addition = 5 + 20;
    document.getElementById("Math1").innerHTML = "5 + 20 = " + Addition;
}

//Subtraction operators
function subtraction() {
    var Subtraction = 20 - 5;
    document.getElementById("Math2").innerHTML = "20 - 5 = " + Subtraction;
}

//Multiplication operators
function multiplication() {
    var simple_Math = 5 * 20;
    document.getElementById("Math3").innerHTML = "5 x 20 = " + simple_Math;
}

//Division operators
function division() {
    var simple_Math = 20 / 5;
    document.getElementById("Math4").innerHTML = "20 / 5 = " +simple_Math;
}

//For multiple operations
function more_Math() {
    var simple_Math = (1 + 2) * 15 / 3 - 5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 15, divided by 3 and then subtracted by 5 = " + simple_Math;
}

//For modulus operator to return division remainder
function modulus_Operator() {
    var simple_Math = 30 % 8;
    document.getElementById("Math6").innerHTML = "When you divide 30 by 8 you have a remainder of: " + simple_Math;
}

//For operation to return a negative number
function negation_Operator() {
    var x = 30;
    document.getElementById("Math7").innerHTML = -x;
}

//To increase a number by one increment
function increment_Operator() {
    var X = 11;
    X++;
    document.getElementById("Math8").innerHTML = X;
}

//To decrease a number by one 
function decrement_Operator() {
    var X = 12.35;
    X--;
    document.getElementById("Math9").innerHTML = X;
}

//Method to return a randon number between 0 and 100.
function getRandom() {
    document.getElementById("Math10").innerHTML = Math.random() * 100;
}