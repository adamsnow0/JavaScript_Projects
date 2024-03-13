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
