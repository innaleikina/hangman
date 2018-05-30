let titlesArr = ["Pulp-Fiction", "Fight-Club", "Donnie-Darko", "Scarface", "Blade-Runner", "the-Big-Lebowski", "Clerks", "The-Breakfast-Club", "The-Princess-Bride", "Napoleon-Dynomite", "Office-Space", "Heathers", "Clueless", "Mean-Girls", "The-Blues-Brothers"];
// let i = 0;
let titleToGuess = titlesArr[0];
let titleToGuessArr = [];
let underscoresArr = [];
let guessesArr = [];
let underscores = document.getElementById("underscores");
let guesses = document.getElementById("guesses");
let wrongGuesses = document.getElementById("wrongGuesses");
let newGame = document.getElementById('newGame');
let container = document.getElementById('container');
let wrongGuessesArr = [];
let wins = 0;
let loses = 0;
let counter = 8;
let image = "./resources/images/cinema-dark-display-8158.jpg";


//_____________________________RESETS AND ON EVERY RESET GOES THROUGH SECRET WORD ARRAY____________
// resets the blanks and displays new ones based on the next item in the titlesArr
function resetGame() {
  titleToGuess = titlesArr[Math.floor(Math.random() * titlesArr.length)].toLowerCase();
  console.log(titleToGuess);
  // console.log(titleLength);
  newGame.innerHTML = "new game";
  //resets underscores arr
  underscoresArr = [];
  //resets guesses arr
  guessesArr = [];
  counter = 8;
  makeUnderscores();
  //resets wrong guesses
  wrongGuessesArr = [];
  wrongGuesses.innerHTML = ("");
  document.getElementById("counter").innerHTML = ("Guesses Left: " + counter);
  container.style.backgroundImage = "url(" + image + ")";
  newGame.style.display = "block";
  document.getElementById("win").style.display = "none";
  document.getElementById("counter").style.display = "block";
  wrongGuesses.style.display = "block";
  underscores.classList.remove("winningTitle");
  gameContainer.classList.remove("containerNone");
  gameContainer.classList.remove("containerBg");
  container.classList.remove("containerNone");
}


//________WHEN NEW GAME BUTTON IS PRESSED, GAME RESETS
newGame.addEventListener('click', function () {
  resetGame();
});


//__________________________________CONVERTS MOVIE NAMES INTO BLANKS________
function makeUnderscores() {
  for (var i = 0; i < titleToGuess.length; i++) {
    if (titleToGuess[i] === "-") {
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
  wrongGuessesArr = guessesArr.filter(
    (letter) => !titleToGuessArr.includes(letter)
  );

  for (var i = 0; i < wrongGuessesArr.length; i++) {
    if (wrongGuessesArr.length == 0) {
      counter = 8;
    } else if (wrongGuessesArr.length == 1) {
      counter = 7;
    } else if (wrongGuessesArr.length == 2) {
      counter = 6;
    } else if (wrongGuessesArr.length == 3) {
      counter = 5;
    } else if (wrongGuessesArr.length == 4) {
      counter = 4;
    } else if (wrongGuessesArr.length == 5) {
      counter = 3;
    } else if (wrongGuessesArr.length == 6) {
      counter = 2;
    } else if (wrongGuessesArr.length == 7) {
      counter = 1;
    } else if (wrongGuessesArr.length == 8) {
      counter = 0;
    }
  }

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





  //If user won, and rhe guess array matches the to guess array
  if (underscoresArr.join("") === titleToGuess) {

    wins = wins + 1;
    document.getElementById("wins").innerHTML = ("Wins: " + wins);
    //timeout so the last letter loads before win notification
    setTimeout(function () {
      newGame.style.display = "none";
      document.getElementById("win").style.display = "block";
      document.getElementById("counter").style.display = "none";
      wrongGuesses.style.display = "none";
      underscores.classList.toggle("winningTitle");
      let gameContainer = document.getElementById("gameContainer");
      gameContainer.classList.toggle("containerNone");
      gameContainer.classList.toggle("containerBg");
      container.classList.toggle("containerNone");

      // document.getElementById("counter").innerHTML = ;
      // alert('You won!');
      //background image changes based on which word the user guessed

      //   $('#container')
      // .animate({opacity: 0}, 'slow', function() {
      //     $(this)
      //         .css({'background-image': image})
      //         .animate({opacity: 1});
      // });

      if (underscoresArr.join("") === "fight-club") {
        container.style.backgroundImage = "url(./resources/images/fight-club.jpg)"
      } else if (underscoresArr.join("") === "donnie-darko") {
        container.style.backgroundImage = "url(./resources/images/donnie-darko.jpg)"
      } else if (underscoresArr.join("") === "scarface") {
        container.style.backgroundImage = "url(./resources/images/scarface.jpg)"
      } else if (underscoresArr.join("") === "blade-runner") {
        container.style.backgroundImage = "url(./resources/images/blade-runner.jpg)"
      } else if (underscoresArr.join("") === "the-big-lebowski") {
        container.style.backgroundImage = "url(./resources/images/the-big-lebowski.jpg)"
      } else if (underscoresArr.join("") === "clerks") {
        container.style.backgroundImage = "url(./resources/images/clerks.jpg)"
      } else if (underscoresArr.join("") === "the-breakfast-club") {
        container.style.backgroundImage = "url(./resources/images/the-breakfast-club.jpg)"
      } else if (underscoresArr.join("") === "the-princess-bride") {
        container.style.backgroundImage = "url(./resources/images/the-princess-bride.jpg)"
      } else if (underscoresArr.join("") === "office-space") {
        container.style.backgroundImage = "url(./resources/images/office-space.jpg)"
      } else if (underscoresArr.join("") === "heathers") {
        container.style.backgroundImage = "url(./resources/images/heathers.jpg)"
      } else if (underscoresArr.join("") === "napoleon-dynomite") {
        container.style.backgroundImage = "url(./resources/images/napoleon-dynomite.jpg)"
      } else if (underscoresArr.join("") === "clueless") {
        container.style.backgroundImage = "url(./resources/images/clueless.jpg)"
      } else if (underscoresArr.join("") === "pulp-fiction") {
        container.style.backgroundImage = "url(./resources/images/pulp-fiction.jpg)"
      } else if (underscoresArr.join("") === "mean-girls") {
        container.style.backgroundImage = "url(./resources/images/mean-girls.jpg)"
      } else if (underscoresArr.join("") === "the-blues-brothers") {
        container.style.backgroundImage = "url(./resources/images/the-blues-brothers.jpg)"
      }
    }, 500);

    setTimeout(function () {
      resetGame()
    }, 3000);
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