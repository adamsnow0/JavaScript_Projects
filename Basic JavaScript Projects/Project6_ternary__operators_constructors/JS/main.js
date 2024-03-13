//function utilizing ternary operator
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//function utilizing ternary operator
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age_1").value;
    Can_vote = (Age < 18) ? "We're sorry. You are not yet old enough":"Congrats! You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

//function utilizing ternary operator
function Drink_Function() {
    var Age, Can_drink;
    Age = document.getElementById("Age_2").value;
    Can_drink = (Age < 21) ? "So sorry, but you're not yet old enough":"Welcome! You are old enough";
    document.getElementById("Drink").innerHTML = Can_drink + " to drink."
}

//Constructor function using "this" and "new" keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trial Hawk", 2018, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//Constructor function using "this" and "new" keywords
function Animal(Breed, Gender, Age, Color) {
    this.Animal_Breed = Breed;
    this.Animal_Gender = Gender;
    this.Animal_Age = Age;
    this.Animal_Color = Color;
}
var Willow = new Animal("Siamese-Himalayan", "female", 8, "white and tan");
var Jasper = new Animal("Ragdoll", "male", 8, "gray and white");
var Colby = new Animal("Maine Coon", "male", 6, "orange and white");
function myFunction_Cats() {
    document.getElementById("New_and_This").innerHTML = "Willow is our " + Willow.Animal_Gender + " " + Willow.Animal_Breed + " cat, who is a beautiful " + Willow.Animal_Color + " color. She is our oldest cat, turning " + Willow.Animal_Age + " this year.";
}

