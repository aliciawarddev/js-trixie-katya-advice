// Store all advice organized per category and queen
const advice = {
    dating: {
        trixie: ["Dating advice 1", "Dating advice 2"],
        katya: ["Dating advice 1", "Dating advice 2"]
    },
    career: {
        trixie: ["Career advice 1", "Career advice 2"],
        katya: ["Career advice 1", "Career advice 2"]
    }, 
    family: {
        trixie: ["Family advice 1", "Family advice 2"],
        katya: ["Family advice 1", "Family advice 2"]
    }, 
    friends: {
        trixie: ["Friends advice 1", "Friends advice 2"],
        katya: ["Friends advice 1", "Friends advice 2"]
    }, 
    life: {
        trixie: ["Life advice 1", "Life advice 2"],
        katya: ["Life advice 1", "Life advice 2"]
    }
};

// Function to pick random advice from a specific category and queen
function getRandomAdvice(category, queen) {
    const adviceArray = advice[category][queen]; // Get the array of advice for this category/queen
    return adviceArray[Math.floor(Math.random() * adviceArray.length)]; // Return random advice from array
}

// Main function that runs when button is clicked
function generateAdvice() {
    const category = document.getElementById('problem-category').value; // Get selected category from dropdown

    if (!category) { // Check if user selected a category
        alert('Choose a category first!'); // Show error message
        return; // Exit function early
    }

    const trixieAdvice = getRandomAdvice(category, 'trixie'); // Get random Trixie advice
    const katyaAdvice = getRandomAdvice(category, 'katya'); // Get random Katya advice

    document.getElementById('trixie-advice').textContent = trixieAdvice; // Display Trixie's advice
    document.getElementById('katya-advice').textContent = katyaAdvice; // Display Katya's advice

    document.getElementById('results-section').classList.add('show'); // Make results visible with CSS animation
}

// Add click event to button to run generateAdvice function
document.getElementById('get-advice-btn').addEventListener('click', generateAdvice);
