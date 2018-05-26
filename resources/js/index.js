let titlesArr = ["", "Pulp Fiction", "Fight Club", "Donnie Darko", "Scarface", "Blade Runner", "the Big Lebowski", "The Rocky Horror Picture Show", "Clerks", "The Breakfast Club", "The Princess Bride", "Napoleon Dynomite", "Office Space", "Heathers"];
let i = 0;
let newGame = document.getElementById('newGame');

let titleToGuess = titlesArr[0];
let titleToGuessArr = [];
let underscores = document.getElementById("underscores");
let underscoresArr = [];
let guessesArr = [];
let guesses = document.getElementById("guesses");
let wrongGuesses = document.getElementById("wrongGuesses");
let wrongGuessesArr;
let wins = 0;
let loses = 0;


let currentUnderscores;


//_____________________________________________GOES THROUGH SECRET WORD ARRAY____________
// resets the blanks and displays new ones based on the next item in the titlesArr
function resetGame() {
  i = i + 1;
  titleToGuess = titlesArr[i].toLowerCase();
  titleLength = titleToGuess.length;
  console.log(titleToGuess);
  console.log(titleLength);
  newGame.innerHTML = "new game";
  underscoresArr = [];
  //rsets guesses arr
  guessesArr = [];
  makeUnderscores();
  wrongGuesses.innerHTML = ("");
}




newGame.addEventListener('click', function () {
  resetGame();
});


//_____________________________________________CONVERTS MOVIE NAMES INTO BLANKS________


function makeUnderscores() {
  titleToGuessArr
  for (var i = 0; i < titleToGuess.length; i++) {
    if (titleToGuess[i] === " ") {
      //adds multiple spaces to an array, so when the array is joined there is still visible space between multiple words
      underscoresArr.push(" \xa0\xa0\xa0\xa0\ ");
    } else {
      underscoresArr.push("_");
    }
  }
  underscores.innerHTML = underscoresArr.join(" ");
}


//_____________________________________________STORING USER GUESSES____________
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
//_____________COMPARE LATEST INPUT WITH ORIGINAL ARRAY CHANGE BLANKS
//_____________TO RIGHT GUESSES AND SHOW WRONG GUESSES ON THE SCREEN____________

function compare() {
  for (i = 0; i < titleToGuess.length; i++) {
    if (titleToGuess.charAt(i) === guessesArr[guessesArr.length - 1]) {
      underscoresArr.splice(i, 1, guessesArr[guessesArr.length - 1]);
      underscores.innerHTML = underscoresArr.join(" ");
      // console.log("its a match!")
    }
  }

  titleToGuessArr = titleToGuess.split("");

  //compare guessArr snf titleToGuessArr and save the ones that don't match in wrongGuessArr
  wrongGuessesArr = guessesArr.filter((word) => !titleToGuessArr.includes(word));
  //User only gets 8 wrong guesses
  if (wrongGuessesArr.length <= 8) {
    wrongGuesses.innerHTML = ("wrong guesses: " + wrongGuessesArr.join(" , "));
  } else {
    alert("you lost!");
    loses = loses + 1;
    document.getElementById("loses").innerHTML = ("Loses: " + loses);
    newGame.style.display = "none";
    resetGame();
  }
}


//_________________________________________________________