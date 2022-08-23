// Make letters 
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get letters container
let lettersContainer = document.querySelector(".letters");

// Make array of letters 
let lettersArray = Array.from(letters);

// Loop over array
lettersArray.forEach(letter =>{

    // Create span
    let letterSpan = document.createElement("span");

    // Add text
    let spanText = document.createTextNode(letter);

    // Append text to span
    letterSpan.appendChild(spanText);

    // Add class to span
    letterSpan.className = "letter-box";

    // Append span to container
    lettersContainer.appendChild(letterSpan);
    
})

// Object of words + categories

const words = {
    programming : ["php","js","react","node","c","go","ruby"],
    people: ["hitler","bob marley","elon musk","haredy","rashedy"],
    movies: ["focus","home alone","parasite","inception","prestige"],
    countries: ["palestine","syria","egypt","qatar","jordon"],
}

// Get keys of object
let allKeys = Object.keys(words);
// Make random number
let randomNumber = Math.floor(Math.random() * allKeys.length);

// Category
let randomName = allKeys[randomNumber];

// Category words
let randomValue = words[randomName];

// Random number depend on words
let randomValueNumber = Math.floor(Math.random() * randomValue.length);

// Chosen word
let randomValueName = randomValue[randomValueNumber];

// Create span
document.querySelector(".game-info .category span").innerHTML = randomName;

// Select chosen word element
let lettersGuessContainer = document.querySelector(".letters-guess");

// Get array of letters from selected word
let lettersAndSpaces = Array.from(randomValueName);

// Loop over each letter
lettersAndSpaces.forEach(letter =>{
    // Create empty span
    let span = document.createElement("span");

    // If letter is space
    if (letter === " ") {
        
        // Add class to span
        span.className = "with-space";
    }

    // Append span to its container
    lettersGuessContainer.appendChild(span);

});

// Select letters guess span
let guessSpan = document.querySelectorAll(".letters-guess span");

// set wrong attempts
let wrongAttempts = 0;

// get hanger draw element
let hanger = document.querySelector(".hangman-draw");

// Add event on letters
document.addEventListener("click",(e) => {
    
    // Make the status
    let theStatus = false;

    // Check if target is letter
    if (e.target.className === "letter-box") {
        
        // Add class to this target
        e.target.classList.add("clicked");

        // Set this target to variable
        let selectedLetter = e.target.innerHTML.toLowerCase();

        // Get array of letters from chosen word
        let theChosenWord = Array.from(randomValueName.toLowerCase());

        // Loop over selected word letters
        theChosenWord.forEach((wordLetter , wordIndex) =>{

            // Check if selected letter matched word letter
            if (selectedLetter === wordLetter) {
                
                // Update the status
                theStatus = true;

                // Loop over all spans
                guessSpan.forEach((span,spanIndex)=>{
                    // Get the selected span position
                    if (wordIndex === spanIndex) {

                        // Add the letter to the span
                        span.innerHTML = selectedLetter;    
                    }
                })
            }
        }); 
        // Outside the loop
        // check the status
       if (theStatus !== true) {
        
        // play failed sound

        // Increase worng attempt
        wrongAttempts++

        // Add draw
        hanger.classList.add(`wrong-${wrongAttempts}`)

        // check if he failed 8 times
        if (wrongAttempts == 8) {
        // trigger function end game
         endGame();
        lettersContainer.classList.add("finished")
        }
        
    }  
        else{
        // play success sound
    }   
    }   
       
});

// create function end game
function endGame() {
        
    // create div
    let div = document.createElement("div");

    // Add text to the div
    let text = document.createTextNode(` Game over, the word is : ${randomValueName}`);

    // append textt to div
    div.appendChild(text);

    // add class to div
    div.className = "popup";

    // Append div to body
    document.body.appendChild(div);
}