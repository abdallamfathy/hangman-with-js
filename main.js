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