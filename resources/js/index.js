let titlesArr = ["Pulp-Fiction", "Fight-Club", "Donnie-Darko", "Scarface", "Blade-Runner", "the-Big-Lebowski", "Clerks", "The-Breakfast-Club", "The-Princess-Bride", "Napoleon-Dynomite", "Office-Space", "Heathers"];
let i = 0;
let titleToGuess = titlesArr[0];
let titleToGuessArr = [];
let underscoresArr = [];
let guessesArr = [];
let underscores = document.getElementById("underscores");
let guesses = document.getElementById("guesses");
let wrongGuesses = document.getElementById("wrongGuesses");
let newGame = document.getElementById('newGame');
let wrongGuessesArr = [];
let wins = 0;
let loses = 0;
let counter = 8;



//_____________________________RESETS AND ON EVERY RESET GOES THROUGH SECRET WORD ARRAY____________
// resets the blanks and displays new ones based on the next item in the titlesArr
function resetGame() {
  i = (i + 1) % titlesArr.length;
  titleToGuess = titlesArr[i].toLowerCase();
  console.log(titleToGuess);
  // console.log(titleLength);
  newGame.innerHTML = "new game";
  //resets underscores arr
  underscoresArr = [];
  //resets guesses arr
  guessesArr = [];
  counter = 8;
  makeUnderscores();
  wrongGuesses.innerHTML = ("");
}


//________WHEN NEW GAME BUTTON IS PRESSED, GAME RESETS
newGame.addEventListener('click', function () {
  resetGame();
});


//__________________________________CONVERTS MOVIE NAMES INTO BLANKS________
function makeUnderscores() {
  for (var i = 0; i < titleToGuess.length; i++) {
    if (titleToGuess[i] === "-") {
      //adds multiple spaces to an array, so when the array is joined there is still visible space between multiple words
      underscoresArr.push("-");
    } else {
      underscoresArr.push("_");
    }
  }
  underscores.innerHTML = underscoresArr.join(" ");
}


//____________________________________STORING USER GUESSES____________
//for now works even before a game is started
var keynum;

function addToGuessArr() {
  if (guessesArr.includes(String.fromCharCode(keynum))) {
    console.log("letter has been used already")
  } else {
    guessesArr.push(String.fromCharCode(keynum));
    //call the compare function on click
    compare();
  }
}

function myKeyPress(e) {
  if (window.event) { // IE                    
    keynum = e.keyCode;
    addToGuessArr();
  } //duplicate code for netscape/firefox/opera
  else if (e.which) { // Netscape/Firefox/Opera                   
    keynum = e.which;
    addGuessToArr();
  }
}

//__________________________START OF COMPARE FUNCTION ________________
//_____________COMPARE LATEST INPUT WITH ORIGINAL ARRAY CHANGE BLANKS
//_____________FILL RIGHT GUESSES AND SHOW WRONG GUESSES ON THE SCREEN____________

function compare() {
  for (i = 0; i < titleToGuess.length; i++) {
    if (titleToGuess.charAt(i) === guessesArr[guessesArr.length - 1]) {
      underscoresArr.splice(i, 1, guessesArr[guessesArr.length - 1]);
      underscores.innerHTML = underscoresArr.join(" ");
    }
  }

  titleToGuessArr = titleToGuess.split("");
  //compare guessArr and titleToGuessArr and save the ones that don't match in wrongGuessArr
  wrongGuessesArr = guessesArr.filter((letter) => !titleToGuessArr.includes(letter));

  //User only gets 8 wrong guesses
  if (wrongGuessesArr.length <= 8) {
    wrongGuesses.innerHTML = ("wrong guesses: " + wrongGuessesArr.join(" , "));
    document.getElementById("counter").innerHTML = ("Guesses Left: " + counter);
  } else {
    alert("you lost!");
    loses = loses + 1;
    document.getElementById("loses").innerHTML = ("Loses: " + loses);
    newGame.style.display = "none";
    resetGame();
  }

  if (underscoresArr.join("") === titleToGuess) {

    // underscores.innerHTML = titleToGuess.split("").join(" ");
    wins = wins + 1;
    document.getElementById("wins").innerHTML = ("Wins: " + wins);
    alert('You won!');
    setTimeout(function(){
      resetGame()
    }, 2000);
  }

  // var counterHelper = wrongGuessesArr.length-1;
  // console.log(counterHelper);
  //    if(counterHelper < wrongGuessesArr.length){
  //   counter = counter -1;
  //   console.log(counter);
  // }
  // console.log(wrongGuessesArr);
}



//__________________________END OF COMPARE FUNCTION ________________