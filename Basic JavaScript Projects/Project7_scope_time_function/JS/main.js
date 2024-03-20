//funciton utilizing global variable
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

document.write("<br>");

//funciton utilizing local variable
function Add_numbers_3() {
    var Y = 20;
    document.write(10 + Y + "<br>");
}
function Add_numbers_4() {
    var Y = 20;
    document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4();

//funciton utilizing console.log() method and an error
function Add_numbers_5() {
    var Z = 30;
    console.log(25 + Z);
}
function Add_numbers_6() {
    console.log(Z + 100);
}
Add_numbers_5();
Add_numbers_6();

document.write("<br>");
