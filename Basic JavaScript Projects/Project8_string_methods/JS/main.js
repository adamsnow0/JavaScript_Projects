//function using concat() method
function full_Sentence() {
    var part_1 = "I am very ";
    var part_2 = "happy to see ";
    var part_3 = "that you were able to ";
    var part_4 = "join us today!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//function using slice() method
function slice_Method() {
    var Sentence = "All work and no play makes you boring and no fun.";
    var Section = Sentence.slice(31,37);
    document.getElementById("Slice").innerHTML = Section;
}

//String toUpperCase() method
let str1 = "Hello and welcome to all my family and friends!";
console.log(str1.toUpperCase());

//String search() method
let str2 = "Willow, Jasper and Colby loved their big brother Bentley.";
console.log(str2.search("Jasper"));

//toString() method
function string_Method() {
    var X = 250;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function other_string_Method() {
    let text = "Welcome to our humble abode.";
    let result = text.toString();
    document.getElementById("str3").innerHTML = result;
}

//toPrecision() method
function precision_Method() {
    var Y = 15937.0246879531258741963
    document.getElementById("Precision").innerHTML = Y.toPrecision(10);
}

//valueOf() method
function value_Method() {
    const animals = ["Bentley", " Willow", " Jasper", " Colby", " Phoebe"];
    const myArray = animals.valueOf();
    document.getElementById("Value").innerHTML = myArray;
}

//toFixed() method
function Fixed_Method() {
    let num1 = 1.0326358;
    let n = num1.toFixed(4);
    document.getElementById("Fixed").innerHTML = n;
}