// This function is for addition
function addition() {
    var Addition = 5 + 20;
    document.getElementById("Math1").innerHTML = "5 + 20 = " + Addition;
}

// This function is for subtraction
function subtraction() {
    var Subtraction = 20 - 5;
    document.getElementById("Math2").innerHTML = "20 - 5 = " + Subtraction;
}

//This function is for multiplication
function multiplication() {
    var simple_Math = 5 * 20;
    document.getElementById("Math3").innerHTML = "5 x 20 = " + simple_Math;
}

//This function is for division
function division() {
    var simple_Math = 20 / 5;
    document.getElementById("Math4").innerHTML = "20 / 5 = " +simple_Math;
}

//This function is for multiple operations
function more_Math() {
    var simple_Math = (1 + 2) * 15 / 3 - 5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 15, divided by 3 and then subtracted by 5 = " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 30 % 8;
    document.getElementById("Math6").innerHTML = "When you divide 30 by 8 you have a remainder of: " + simple_Math;
}