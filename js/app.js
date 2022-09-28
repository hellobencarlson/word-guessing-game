// to do
// X clicks & 
// keying register whats selected
// display entry in boxes on first row
// thern check for match on enter
// run only on enter
// then move to lower rows

// reset the game

// git hub


const phrases = ["what does the fox say", "happy birthday", "good morning", "hey there", "how are you"]

// GET RANDOM PHRASE

function getRandomPhrase() {
    // get a number between 0-4
    var randomNumber = Math.floor(Math.random() * 5);
        // random is 0-1, multiply times 5 makes potential 0-4 (arrray of 5)
    console.log(randomNumber);
    // get the phrase from the array with that #
    phraseReturn = phrases[randomNumber];
    // return phraseReturn;
    console.log(phraseReturn);
    
}

// getRandomPhrase();


// ADD PHRASE TO DISPLAY

function addPhraseToDisplay() {
    // var newPhrase = this.phrase;
    var stringPhrase = JSON.stringify(phraseReturn);
    console.log(stringPhrase);
    // for each letter in phrase- add li
    for (var i = 0; i < stringPhrase.length; i++) {
        // get each letter in the phrase
        let currentLetter = stringPhrase.charAt(i);
         console.log(currentLetter);
        // if it's not quotes
         if (currentLetter != '"') {
            // create li 
             let newLi = document.createElement('li');
             // add Li with space class if space
            // indexOf meaning contains " " (space) and at currentLetter (0)
           if (currentLetter == " ") {
              
               newLi.classList.add("space");
             } else {
        //          if not a space, add  hidden letter
                newLi.classList.add("hide");
                 newLi.classList.add("letter");
                 // letter to match from class
                // is class with letter needed??
                 newLi.classList.add(currentLetter);
                 newLi.innerHTML = currentLetter;
             }
            // add Li to UL
            document.getElementsByTagName('ul')['0'].appendChild(newLi);
         }
     }
}
 

 addPhraseToDisplay();

 // COLLECT SELECTED KEY



 function collectClick() {
    var clicked = event.target
   if (clicked.tagName = "BUTTON") {
       console.log(clicked.innerHTML);
       // hide letter once clicked
       clicked.classList.add("invisible");
      
    // add loop
        var returnPhrase = document.getElementsByClassName("letter");

       for (var i = 0; i < returnPhrase.length; i++) {
          if (clicked.innerHTML == returnPhrase[i].innerHTML) {
              returnPhrase[i].classList.remove('hide');
          }
       }
    }

}

document.getElementById('qwerty').addEventListener("click", collectClick);