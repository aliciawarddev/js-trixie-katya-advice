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
    beauty: {
        trixie: ["If your friend has a fan, you put that prop on your head, just to like one up them", "Beauty advice 2"],
        katya: ["But also, remove all the functionality so you don't get any of the benefits of having a fan", "Beauty advice 2"]
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
        showError('Choose a category first, honey! 💅'); // Show custom error message
        return; // Exit function early
    }

    hideError(); // Hide error when successful

    const trixieAdvice = getRandomAdvice(category, 'trixie'); // Get random Trixie advice
    const katyaAdvice = getRandomAdvice(category, 'katya'); // Get random Katya advice

    document.getElementById('trixie-advice').textContent = trixieAdvice; // Display Trixie's advice
    document.getElementById('katya-advice').textContent = katyaAdvice; // Display Katya's advice

    document.getElementById('results-section').classList.add('show'); // Make results visible with CSS animation
}

// Add click event to button to run generateAdvice function
document.getElementById('get-advice-btn').addEventListener('click', generateAdvice);

// Function to show custom error message
function showError(message) {
    let errorEl = document.getElementById('error-message'); // Look for existing error element
    if (!errorEl) { // If it doesn't exist, create it
        errorEl = document.createElement('div'); // Create new div
        errorEl.id = 'error-message'; // Give it an ID
        document.querySelector('main').appendChild(errorEl); // Add it to advice section
    }
    errorEl.textContent = message; // Set the error message text
    errorEl.classList.add('show'); // Make it visible
}

// Function to hide error message
function hideError() {
    const errorEl = document.getElementById('error-message'); // Find error element
    if (errorEl) { // If it exists
        errorEl.classList.remove('show'); // Hide it
    }
}