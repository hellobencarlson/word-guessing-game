// word options
const letters3 = ["hat", "cat", "why", "jog"]
const letters4 = ["even", "ball", "pail", "card"]
const letters5 = ["weird", "train", "threw", "crown"]

// SET UP THE GAME

function buildWord() {
   // HIDE OVERLAY
    document.getElementById("overlay").style.display = "none";
    
    // GET A WORD BASED ON SELECTION
    // event target listener, get class name
    var wordChoice = event.target.className
    
        // get a number between 0-4 (to pick word from array)
        var randomNumber = Math.floor(Math.random() * 4);
            // random is 0-1, multiply times 5 makes potential 0-4 (arrray of 5)
        console.log(randomNumber);
        // get the word from the array with that #
        if (wordChoice == "3") {
            wordReturn = letters3[randomNumber];
        } else if (wordChoice == "4") {
            wordReturn = letters4[randomNumber];
        } else {
            wordReturn = letters5[randomNumber];
        }
        
    // ADD WORD TO DISPLAY

        var stringWord = JSON.stringify(wordReturn);
        console.log(stringWord);
    // for each letter in word- add li
    for (var i = 0; i < stringWord.length; i++) {
        // get each letter in the word
        let currentLetter = stringWord.charAt(i);
         console.log(currentLetter);
        // if it's not quotes
         if (currentLetter != '"') {
            // create li 
             let newLi = document.createElement('li');
           
                newLi.classList.add("letter");
                 // letter to match from class
                 newLi.classList.add(currentLetter);
             
                  // add Li to UL
            document.getElementsByTagName('ul')['0'].appendChild(newLi);
             }
           
         }
     }


     // EVENT HANDLERS FOR GAME SET UP
document.getElementById('btn-group').firstElementChild.addEventListener("click", buildWord);
document.getElementById('btn-group').firstElementChild.nextElementSibling.addEventListener("click", buildWord);
document.getElementById('btn-group').lastElementChild.addEventListener("click", buildWord);



// MANAGE LETTER GUESSES


    // HIDE KEYBOARD CHOICES, & DISPLAY CHOSEN LETTERS

function collectClick() {
    var clicked = event.target

    // why doesn't this work if placed outside the function, need to repeat for enter listener
    const wordLetters = document.querySelectorAll('.letter');
    
    
   if (clicked.tagName = "BUTTON") {
    
        for (var i = 0; i < wordLetters.length; i++) {
            if (wordLetters[i].classList.contains('guess')) {
                console.log('guessed already');
            } else {
                console.log('click')
                wordLetters[i].classList.add("guess");
                wordLetters[i].innerHTML = clicked.innerHTML;
                 // hide letter once clicked, if word not full
                clicked.classList.add("invisible");
                break;
           }
        }
   
    }
}


document.getElementById('qwerty').addEventListener("click", collectClick);



 // CHECK FOR MATCH ON ENTER

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        const wordLetters = document.querySelectorAll('.letter');

        for (var i = 0; i < wordLetters.length; i++) {
            
            if (wordLetters[i].classList.contains(wordLetters[i].innerHTML)) {
                wordLetters[i].classList.add("green");
            }
        }


    }
    
 });
    // show if letter exists but in wrong place    
    // ***allow delete
       // *** check if it's an actual word
        // add levels if get it right?
       // *** stop allowing guesses once word filled
       // *** create rows for more guesses
       // can't click blanks as guesses
       // weird error if click between buttons

       // to do
// X clicks & 
// keying register whats selected
// display entry in boxes on first row
// thern check for match on enter
// run only on enter
// then move to lower rows
// reset the game

 // make enter button work
      
      
       
    