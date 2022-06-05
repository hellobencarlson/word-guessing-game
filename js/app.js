
const phrases = ["what does the fox say", "happy birthday", "good morning", "hey there", "how are you"]


function getRandomPhrase() {
    // get a number between 0-4
    var randomNumber = Math.floor(Math.random() * 5);
        // random is 0-1, multiply times 5 makes potential 0-4 (arrray of 5)
    console.log(randomNumber);
    // get the phrase from the array with that #
    var phraseReturn = phrases[randomNumber];
    // return phraseReturn;
    console.log(phraseReturn);
}

getRandomPhrase();