let titlesArr = [{
    title: "Pulp-Fiction",
    image: "url(./resources/images/pulp-fiction.jpg)",
    quote: 'quote :  "Look, I\'m not stupid. It\'s the Big Man\s wife. I\'m gonna sit across from her, chew my food with my mouth closed, laugh at her fucking jokes, and that\'s it."'
  },
  {
    title: "Fight-Club",
    image: "url(./resources/images/fight-club.jpg)",
    quote: 'quote :  "The first rule of project mayhem is you do not ask questions."'
  },
  {
    title: "Donnie-Darko",
    image: "url(./resources/images/donnie-darko.jpg)",
    quote: 'quote :  "28 days... 6 hours... 42 minutes... 12 seconds. That... is when the world... will end."'
  },
  {
    title: "Scarface",
    image: "url(./resources/images/scarface.jpg)",
    quote: 'quote :  "You wanna fuck with me? Okay. You wanna play rough? Okay. Say hello to my little friend!" '
  },
  {
    title: "Blade-Runner",
    image: "url(./resources/images/blade-runner.jpg)",
    quote: 'quote :  "Quite an experience to live in fear, isn\'t it? That\'s what it is to be a slave."'
  },
  {
    title: "the-Big-Lebowski",
    image: "url(./resources/images/the-big-lebowski.jpg)",
    quote: 'quote :  “I\’m the Dude, so that’s what you call me. That or, uh His Dudeness, or uh Duder, or El Duderino, if you’re not into the whole brevity thing."'
  },
  {
    title: "Clerks",
    image: "url(./resources/images/clerks.jpg)",
    quote: 'quote :  "Noinch, Noinch, Noinch, Schmokin Weed, Schmokin\' Weed, Doin\' Coke, Drinkin\' Beers..."',
  },
  {
    title: "The-Breakfast-Club",
    image: "url(./resources/images/the-breakfast-club.jpg)",
    quote: 'quote :  "Don\'t mess with the bull, young man. You\'ll get the horns."'
  }, {
    title: "The-Princess-Bride",
    image: "url(./resources/images/the-princess-bride.jpg)",
    quote: 'quote :  "I just work for Vizzini to pay the bills. There’s not a lot of money in revenge."'
  },
  {
    title: "Napoleon-Dynomite",
    image: "url(./resources/images/napoleon-dynomite.jpg)",
    quote: 'quote :  "Tina you fat lard"'
  },
  {
    title: "Office-Space",
    image: "url(./resources/images/office-space.jpg)",
    quote: 'quote :  "The ratio of people to cake is too big."'
  },
  {
    title: "Heathers",
    image: "url(./resources/images/heathers.jpg)",
    quote: 'quote :  "Dear Diary: My teen angst bullshit now has a body count."'
  },
  {
    title: "Clueless",
    image: "url(./resources/images/clueless.jpg)",
    quote: 'quote :  "my plastic surgeon doesn\'t want me doing any activity where balls fly at my nose."'
  },
  {
    title: "Mean-Girls",
    image: "url(./resources/images/mean-girls.jpg)",
    quote: 'quote :  "Get in loser. We’re going shopping."'
  },
  {
    title: "The-Blues-Brothers",
    image: "url(./resources/images/the-blues-brothers.jpg)",
    quote: 'quote :  "We had a band powerful enough to turn goat piss into gasoline."'
  }
];

let newGamePressed = false;
let titleToGuess = titlesArr[0].title;
let titleToGuessArr = [];
let underscoresArr = [];
let guessesArr = [];
let wrongGuessesArr = [];
let wins = 0;
let loses = 0;
let counter = 8;
let index;
//css elements
let underscores = document.getElementById("underscores");
let guesses = document.getElementById("guesses");
let wrongGuesses = document.getElementById("wrongGuesses");
let newGame = document.getElementById('newGame');
let container = document.getElementById('container');
let hint = document.getElementById('hint');
let image = "./resources/images/cinema-dark-display-8158.jpg";


//_____________________________RESETS AND ON EVERY RESET functi GOES THROUGH SECRET WORD ARRAY____________
// resets the blanks and displays new ones based on the next item in the titlesArr
function resetGame() {
  //saves the random index o be used later when accessing properties
  index = Math.floor(Math.random() * titlesArr.length);
  titleToGuess = titlesArr[index].title.toLowerCase();
  // console.log(titleToGuess);
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
  wrongGuesses.style.display = "block";
  //reset counter
  document.getElementById("counter").innerHTML = ("Guesses Left: " + counter);
  document.getElementById("counter").style.display = "block";
  //reset background image
  container.style.backgroundImage = "url(" + image + ")";
  //bring button back
  newGame.style.display = "block";
  //win message goes away
  document.getElementById("win").style.display = "none";
  //underscores reset
  underscores.style.display = "block";
  underscores.classList.remove("winningTitle");
  //styligng reset
  gameContainer.classList.remove("containerNone");
  gameContainer.classList.remove("containerBg");
  container.classList.remove("containerNone");
  //hint resets
  hint.innerHTML = ("");
  hint.style.backgroundColor = "rgba(0,0,0,0)";
  //lost reset
  document.getElementById("loose").style.display = "none";
}



//________WHEN NEW GAME BUTTON IS PRESSED, GAME RESETS
newGame.addEventListener('click', function () {
  resetGame();
  newGamePressed = true;
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
  } else if (newGamePressed) {
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
    if(newGamePressed){                  
    keynum = e.which;
    addGuessToArr();
    }
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

  //style and conent of the quote/hint
  hint.style.backgroundColor = "rgba(0,0,0,0.4)";
  hint.innerHTML = titlesArr[index].quote;
  
  //compare guessArr and titleToGuessArr and save the ones that don't match in wrongGuessArr
  titleToGuessArr = titleToGuess.split("");
  wrongGuessesArr = guessesArr.filter(
    (letter) => !titleToGuessArr.includes(letter)
  );

  
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

//___________________LOOSING SEQUENCE___________________
  //User only gets 8 wrong guesses
  if (wrongGuessesArr.length <= 8) {
    wrongGuesses.innerHTML = ("wrong guesses: " + wrongGuessesArr.join(" , "));
    document.getElementById("counter").innerHTML = ("Guesses Left: " + counter);
  } else {
    // alert("you lost!");
    document.getElementById("loose").style.display = "block";
    loses = loses + 1;
    document.getElementById("loses").innerHTML = ("Loses: " + loses);
    document.getElementById("unguessed-title").innerHTML = ("The movie was: " + titleToGuess);
    document.getElementById("unguessed-title").style.color = "white";
    setTimeout(function () {
      resetGame()
    }, 2400);
  }


  //___________________LOOSING SEQUENCE___________________
//If user won, and the guess array matches the to guess array
  if (underscoresArr.join("") === titleToGuess) {

    wins = wins + 1;
    document.getElementById("wins").innerHTML = ("Wins: " + wins);
    //timeout so the last letter loads before win notification
    setTimeout(function () {
      newGame.style.display = "none";
      document.getElementById("win").style.display = "block";
      document.getElementById("counter").style.display = "none";
      wrongGuesses.style.display = "none";
      let gameContainer = document.getElementById("gameContainer");
      gameContainer.classList.add("containerNone");
      container.classList.add("containerNone");
      underscores.style.display = "none";
      document.getElementById("underscores2").innerHTML = underscoresArr.join(" ");
      document.getElementById("underscores2").style.display = "block";
      document.getElementById("win").style.marginTop = "380px";
      hint.innerHTML = ("");

      hint.style.backgroundColor = "rgba(0,0,0,0)";
      container.style.backgroundImage = titlesArr[index].image;
    }, 500);

    setTimeout(function () {
      resetGame()
    }, 3000);
  }
}




//__________________________END OF COMPARE FUNCTION ________________