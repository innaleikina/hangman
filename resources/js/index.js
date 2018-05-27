let titlesArr = ["Pulp-Fiction", "Fight-Club", "Donnie-Darko", "Scarface", "Blade-Runner", "the-Big-Lebowski", "Clerks", "The-Breakfast-Club", "The-Princess-Bride", "Napoleon-Dynomite", "Office-Space", "Heathers", "Clueless","Mean-Girls","The-Blues-Brothers"];
let i = 0;
let titleToGuess = titlesArr[0];
let titleToGuessArr = [];
let underscoresArr = [];
let guessesArr = [];
let underscores = document.getElementById("underscores");
let guesses = document.getElementById("guesses");
let wrongGuesses = document.getElementById("wrongGuesses");
let newGame = document.getElementById('newGame');
let body = document.getElementById('body');
let wrongGuessesArr = [];
let wins = 0;
let loses = 0;
let counter = 8;



//_____________________________RESETS AND ON EVERY RESET GOES THROUGH SECRET WORD ARRAY____________
// resets the blanks and displays new ones based on the next item in the titlesArr
function resetGame() {
  titleToGuess = titlesArr[Math.floor(Math.random()*titlesArr.length)].toLowerCase();
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
  body.style.backgroundImage = "url(file:///Users/bradleyjones/Desktop/code/homeworks/javascript/hangman/resources/images/cinema-dark-display-8158.jpg)"
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

    wins = wins + 1;
    document.getElementById("wins").innerHTML = ("Wins: " + wins);
    //timeout so the last letter loads before win notification
   setTimeout(function(){
    alert('You won!');
    //background image changes based on which word the user guessed
    if(underscoresArr.join("") === "fight-club" ){
      body.style.backgroundImage = "url(./resources/images/fight-club.jpg)"
    } else if (underscoresArr.join("") === "donnie-darko"){
      body.style.backgroundImage = "url(./resources/images/donnie-darko.jpg)"
    } else if (underscoresArr.join("") === "scarface"){
      body.style.backgroundImage = "url(./resources/images/scarface.jpg)"
    }else if (underscoresArr.join("") === "blade-runner"){
      body.style.backgroundImage = "url(./resources/images/blade-runner.jpg)"
    } else if (underscoresArr.join("") === "the-big-lebowski"){
      body.style.backgroundImage = "url(./resources/images/the-big-lebowski.jpg)"
    } else if (underscoresArr.join("") === "clerks"){
      body.style.backgroundImage = "url(./resources/images/clerks.jpg)"
    }else if (underscoresArr.join("") === "the-breakfast-club"){
      body.style.backgroundImage = "url(./resources/images/the-breakfast-club.jpg)"
    } else if (underscoresArr.join("") === "the-princess-bride"){
      body.style.backgroundImage = "url(./resources/images/the-princess-bride.jpg)"
    } else if (underscoresArr.join("") === "office-space"){
      body.style.backgroundImage = "url(./resources/images/office-space.jpg)"
    } else if (underscoresArr.join("") === "heathers"){
      body.style.backgroundImage = "url(./resources/images/heathers.jpg)"
    } else if (underscoresArr.join("") === "napoleon-dynomite"){
      body.style.backgroundImage = "url(./resources/images/napoleon-dynomite.jpg)"
    } else if (underscoresArr.join("") === "clueless"){
      body.style.backgroundImage = "url(./resources/images/clueless.jpg)"
    } else if (underscoresArr.join("") === "pulp-fiction"){
      body.style.backgroundImage = "url(./resources/images/pulp-fiction.jpg)"
    }else if (underscoresArr.join("") === "mean-girls"){
      body.style.backgroundImage = "url(./resources/images/mean-girls.jpg)"
    } else if (underscoresArr.join("") === "the-blues-brothers"){
      body.style.backgroundImage = "url(./resources/images/the-blues-brothers.jpg)"
    }
   },1000);
    

   


    setTimeout(function(){
      resetGame()
    }, 5000);
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