let titlesArr = ["", "Pulp Fiction", "Fight Club", "Donnie Darko", "Scarface", "Blade Runner", "the Big Lebowski", "The Rocky Horror Picture Show", "Clerks", "The Breakfast Club", "The Princess Bride", "Napoleon Dynomite", "Office Space", "Heathers"];
let i = 0;
let newGame = document.getElementById('newGame');

let titleToGuess = titlesArr[0];
let underscores = document.getElementById("underscores");
let underscoresArr = [];
var guessesArr = [];
let guesses = document.getElementById("guesses");


let currentUnderscores;




//_____________________________________________GOES THROUGH SECRET WORD ARRAY____________


// resets the blanks and displays new ones based on the next item in the titlesArr
newGame.addEventListener('click', function () {
  i = i + 1;
  i = i % titlesArr.length
  titleToGuess = titlesArr[i];
  titleLength = titleToGuess.length;
  console.log(titleToGuess);
  console.log(titleLength);
  newGame.innerHTML = "New Game";
  //resets the undersocres to 0
  underscoresArr = [];
  guessesArr = [];
  wrongGuesses.innerHTML = guessesArr;
  makeUnderscores();
});



//_____________________________________________CONVERTS MOVIE NAMES INTO BLANKS________


function makeUnderscores() {
  for (var i = 0; i < titleToGuess.length; i++) {
    if (titleToGuess[i] === " ") {
      //adds multiple spaces to an array, so when the array is joined there is still visible space between multiple words
      underscoresArr.push(" \xa0\xa0\xa0\xa0\ ");
    } else {
      underscoresArr.push("_");
    }
  }
  console.log(underscoresArr.join(" "));
  underscores.innerHTML = underscoresArr.join(" ");
}

//____________________________
// function makeUnderscores(){
//   currentUnderscores = titleToGuess.replace(/[a-zA-z]/g, "_");
//   console.log (currentUnderscores);
//   underscores.innerHTML = currentUnderscores;
//   }
//____________________________


//_____________________________________________STORING USER GUESSES____________


function myKeyPress(e) {
  var keynum;

 if (window.event) { // IE                    
    keynum = e.keyCode;
    if (guessesArr.includes(String.fromCharCode(keynum))) {
      console.log("letter has been used already")
      //alert("You used this letter already. Try another one :) ");
    } else {
      guessesArr.push(String.fromCharCode(keynum));
    }
     wrongGuesses.innerHTML = guessesArr.join(" , ");
  }
  else if(e.which){ // Netscape/Firefox/Opera                   
    keynum = e.which;
    
  }

  console.log(guessesArr);
}

//_____________________________________________COMPARE INPUT WITH ORIGINAL ARRAY____________



//_____________________________________________CHANGE BLANKS TO RIGHT GUESSES____________