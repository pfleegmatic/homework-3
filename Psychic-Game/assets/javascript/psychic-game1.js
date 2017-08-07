
//add the link when js is done <script type = "text/javascript" src = "assets/javascript/psychic-game.js"></sc
//Define letters that can be chosen. Generate letter array.

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//var letter = letter.random();

//allows lower and upper case

//variables needed for display (counters). Assign (=) values to what we start with at the beginning of the game for Wins, Losses, guessesLeft, guessesSoFar, userGuess, and letterPickedByComputer 
//Define initial variables.
var Wins = 0;

var Losses = 0;

var guessesLeft = 9;

var guessesSoFar = []; //populate from any letter in array

//what the user inputs into the computer. develop an onkeyup
var userGuess = null;

var letterPickedByComputer = letters[Math.floor(Math.random() * letters.length)];
//We want the computer to pick a random letter out of the array. To set up random return, use Math.random() with Math.floor(), apply what you want to be chosen randomly (the letters variable), and number of letters available in letter array using .length to return random letters (which is stored in variable letterPickedByComputer).



//I've been seeing people logging this into console, so I will do the same.
console.log("Wins: "+ Wins +
            " Losses: " + Losses +
            " Guesses Left: " + guessesLeft +
            " Guesses Taken So Far: " + guessesSoFar +
            " Letter picked by computer: " + letterPickedByComputer);


//record or listen for the event, starting with the user keying in their input
//key event as a function.
document.onkeyup = function(event){

//Next, set up so we won't need to worry about user input lower and upper cases variances:
//The fromCharCode() method converts Unicode values into characters. Note: This is a static method of the String object, and the syntax is always String.fromCharCode().
//event.key property returns the identifier of the key that was pressed when a key event occured.
//converts input or identifier of keypressed (string) to toLowerCase(); 
//Pattern noticed in assignment, everything in the function seems to be about string methods. 

var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


//I didn't figure how to code or set "boundaries" limiting what can be counted as a guess 1) not guessing same letter, 2) and staying within letter array.


//if and then statement if user guess is right

if (userGuess === letterPickedByComputer){
    Wins +1;
    console.log("Win!");
    alert("you got it!");
    //done w/ win and loss counter
    //now start process over for the other variables
    guessesLeft = 9;
    guessesSoFar = [];
    letterPickedByComputer = letters[Math.floor(Math.random() * letters.length)];

};

if (userGuess !== letterPickedByComputer){
    console.log("Try again!");
    alert("No bueno. Try again!");
    };

if (guessesLeft === 0){
    Loss-1;
    console.log("Loss!");
    alert("Game over!");
    guessesLeft = 9;
    guessesSoFar = [];
    letterPickedByComputer = letters(Math.floor(Math.random() * letters.length));

    };

}; //closure of document.onkey event



//<!--write a code that will give the user only 9 chances to guess the letter, a loop for this -->

for(var i = 0; i < 9; i ++);



//how do I get the characters or inputs from javascript to line up with the html on the screen? What do I need to link up?
var html =  "<h1>The Psychic Game</h1>" + 
            "<h3>Guess what letter I'm thinking of</h3>" + 
            "<h3>Wins: " + Wins + "</h3>" + 
            "<h3>Losses: " + Losses + "</h3>" + 
            "<h3>Guesses Left: " + guessesLeft + "</h3>" + 
            "<h3>Your guesses so far: " + guessesSoFar + "</h3>";

 $("#guessgame").innerHTML=html;



