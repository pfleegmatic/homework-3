//add the link when js is done <script type = "text/javascript" src = "assets/javascript/psychic-game.js"></sc
//Define letters that can be chosen. Generate letter array.

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//var letter = letter.random();

//allows lower and upper case

//variables needed for display (counters). Assign (=) values to what we start with at the beginning of the game for Wins, Losses, guessesLeft, guessesSoFar, userGuess, and letterPickedByComputer 
//Define initial variables.
var wins = 0;
var losses = 0;
var guessesLeft = 9;

var guessesSoFar = []; //populate from any letter in array

//what the user inputs into the computer. develop an onkeyup
var userGuess = null;

var computerPick = letters[Math.floor(Math.random() * letters.length)];
//Want the computer to pick a random letter out of the array. To set up random return, use Math.random() with Math.floor(), apply what you want to be chosen randomly (the letters variable), and number of letters available in letter array using .length to return random letters (which is stored in variable letterPickedByComputer).



//log into console.
console.log("Wins: "+ wins +
            " Losses: " + losses +
            " Guesses Left: " + guessesLeft +
            " Guesses Taken So Far: " + guessesSoFar +
            " Letter picked by computer: " + computerPick);


//record or listen for the event, starting with the user keying in their input
//key event as a function.
document.onkeyup = function(event){

//Next, set up so lower and upper cases input don't matter, disallow numbers/other characters types:
//The fromCharCode() method converts Unicode values into characters. Note: This is a static method of the String object, and the syntax is always String.fromCharCode().
//event.key property returns the identifier of the key that was pressed when a key event occured.
//converts input or identifier of keypressed (string) to toLowerCase(); 


var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


// 1) not guessing same letter, 2) and staying within letter array.
    if (guessesSoFar.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length]=userGuess;
        // if it is a new letter then decrease remaining guesses by 1
        guessesLeft--;

//if and then statement if user guess is right

if (userGuess === computerPick){
    wins ++;//add the win for the round
    console.log("Win!");
    //done w/ win and loss counter
    //now start process over for the other variables
    guessesLeft = 9;
    guessesSoFar = [];
    computerPick = letters[Math.floor(Math.random() * letters.length)];

console.log("Wins: " + wins + 
    " Losses: " + losses + 
    " GuessesLeft: " + guessesLeft + 
    " Guesses so far: " + guessesSoFar + 
    " Computer picked: " + computerPick);

}


if (guessesLeft === 0){
    losses++;//add the loss for the round
    console.log("Loss!");
    guessesLeft = 9;
    guessesSoFar = [];
    computerPick = letters[Math.floor(Math.random() * letters.length)];

console.log("Wins: " + wins + 
    " Losses: " + losses + 
    " GuessesLeft: " + guessesLeft + 
    " Guesses so far: " + guessesSoFar + 
    " Computer picked: " + computerPick);

    };

}; //closure of document.onkey event



//<!--write a code that will give the user only 9 chances to guess the letter, a loop for this -->

//for(var i = 0; i < 9; i ++);



//how do I get the characters or inputs from javascript to line up with the html on the screen? What do I need to link up?
var html =  "<h4>Guess what letter I'm thinking of?</h4>" + 
            "<h4>Wins: " + wins + "</h4>" + 
            "<h4>Losses: " + losses + "</h4>" + 
            "<h4>Guesses Left: " + guessesLeft + "</h4>" + 
            "<h4>Your guesses so far(letters enter here): " + guessesSoFar + "</h4>";



// place html into the game ID
//$("#guessgame").innerHTML=html;
document.querySelector("#guessgame").innerHTML = html;
}



