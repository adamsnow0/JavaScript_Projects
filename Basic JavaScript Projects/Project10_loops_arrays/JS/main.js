//while loop
function Call_Loop() {
    var Digit = "";
    let X = 1;
    while(X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//for loop
function for_Loop() {
    let Instruments = ["Violin", "Cello", "Clarinet", "Oboe", "Piccolo", "Double Bass", "Flute"];
    var Content = "";
    var Y;
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//array object
function city_Array() {
    var City = [];
    City[0] = "San Diego";
    City[1] = "Los Angeles";
    City[3] = "Portland";
    City[4] = "Tucson";
    City[5] = "Princeville";
    document.getElementById("City").innerHTML = "Two of my favorite cities to visit are " + City[0] + " and " + City[4] + ".";
}