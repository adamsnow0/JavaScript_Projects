function myFunction1() {
    document.getElementById("Test").innerHTML = 0/0;
}

function myFunction2() {
    document.getElementById("Test1").innerHTML = isNaN('This is a string');
}

function myFunction3() {
    document.getElementById("Test2").innerHTML = isNaN('007');
}

console.log("This is part of the JavaScript course.");

function myFunction3A() {
    document.getElementById("Test3").innerHTML = typeof "Adam" + "<br>" + typeof 503;
}

function myFunction4 () {
    const myWindow = window.open();
    myWindow.document.write(10 == 10);
}

function myFunction5() {
    document.open();
    document.write(10 == 11);
    document.close();
}

function myFunction6() {
    document.getElementById("Test6").innerHTML = 25 === 25;
}

//This is an AND operator. Both must be true to return true
function myFunction7() {
    document.getElementById("Test7").innerHTML = 7 > 3 && 11 > 15;
}

//This is an OR operator. Either must be true to return true
function myFunction8() {
    document.getElementById("Test8").innerHTML = 7 > 3 || 11 < 15;
}

function myFunction9() {
    document.getElementById("Test9").innerHTML = "thirty" + 9;
}

function myFunction10() {
    document.getElementById("Test10").innerHTML = 75 < 74;
}

//a NOT operator. This will return false
function not_Function1() {
    document.getElementById("Not").innerHTML = !(30 > 15);
}

//a NOT operator. This is a double negative and will return true
function not_Function2() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}