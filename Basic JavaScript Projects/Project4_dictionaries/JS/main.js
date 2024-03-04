//Creating a dictionary with KVPs
function my_Dictionary() {
    var Car = {
        Brand:"Subaru",
        Model:"Forester",
        Color:"Forest Green",
        Age:"1"
    };
    document.getElementById("Dictionary").innerHTML = Car.Color;
}

//A dictionary with two of the same key as a mistake, to see what output is when code is run in HTML
function my_Dictionary2() {
    var Animal = {
        Species:"Cat",
        Breed:"Maine Coon",
        Gender:"Male",
        Color:"Orange-White",
        Species:"Meow!"
    };
    document.getElementById("Animal").innerHTML = Animal.Species;
}

//Operators as words, instead of symbols
function my_Dictionary3() {
    var Car = {
        Brand:"Toyota",
        Model:"Tacoma",
        Color:"Graphite",
        Age:"4"
    };
    delete Car.Age;
    document.getElementById("Dictionary3").innerHTML = Car.Age;
}

