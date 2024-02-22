window.alert("Hello & welcome!") //An alert box with a message and an OK button

var A = "Welcome to this webpage we call \'home\'."; //This is defining a variable
document.write(A); //Writing a specifically defined variable into HTML output

document.write("<br><br>We're so glad to have you here.<br><br>As my dad always says, \"Mi casa es su casa!\"<br>"); //Used a backslash escape in a string

document.write("<br>\"The magic thing about home is that it feels good to leave,"
+ " and it feels even better to come back.\""
+ " - Wendy Wunder, Author<br><br>"); //Concatenating a string

document.write("Of our three cats, my favorite is: ")
var Myself = "Adam", Husband = "Doug", Cat1 = "Willow", Cat2 = "Jasper", Cat3 = "Colby"; //Defining multiple variables
document.write(Cat2); //Writing a specifically defined variable into HTML output

//Defining two variables and concatenating them
var Sent1 = "<br><br>This is the beginning of the string";
var Sent2 = " and this is the end of the string";
document.write(Sent1 + Sent2);

document.write("<br><br>Thank you" + " " + "for stopping by." + " " + "See you next time!"); //Added an expression to create a message 