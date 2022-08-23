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
document.querySelector(".game-info .category span").innerHTML = randomName + " " + ;