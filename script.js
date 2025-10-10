// Store all advice organized per category - now paired together
const advice = {
    dating: [
        {
            trixie: "Dating advice 1 from Trixie",
            katya: "Dating advice 1 from Katya"
        },
        {
            trixie: "Dating advice 2 from Trixie",
            katya: "Dating advice 2 from Katya"
        }
    ],
    career: [
        {
            trixie: "Career advice 1 from Trixie",
            katya: "Career advice 1 from Katya"
        },
        {
            trixie: "Career advice 2 from Trixie",
            katya: "Career advice 2 from Katya"
        }
    ],
    family: [
        {
            trixie: "Family advice 1 from Trixie",
            katya: "Family advice 1 from Katya"
        },
        {
            trixie: "Family advice 2 from Trixie",
            katya: "Family advice 2 from Katya"
        }
    ],
    friends: [
        {
            trixie: "Friends advice 1 from Trixie",
            katya: "Friends advice 1 from Katya"
        },
        {
            trixie: "Friends advice 2 from Trixie",
            katya: "Friends advice 2 from Katya"
        }
    ],
    beauty: [
        {
            trixie: "If your friend has a fan, you put that prop on your head, just to like one up them.",
            katya: "But also, remove all the functionality so you don't get any of the benefits of having a fan."
        },
        {
            trixie: "The best thing is to have someone watch you at all times to just groom the back of your head like a troll doll.",
            katya: "How do you as an aging, decrepit, old, senile woman maintain just a shred of your dignity? Through makeup. "
        }
    ]
};

// Function to get a random paired advice set from a category
function getRandomAdvicePair(category) {
    const adviceArray = advice[category];
    const randomIndex = Math.floor(Math.random() * adviceArray.length);
    return adviceArray[randomIndex]; // Returns the whole pair object
}

// Main function that runs when button is clicked
function generateAdvice() {
    const category = document.getElementById('problem-category').value;

    if (!category) {
        showError('Choose a category first, honey! 💅');
        return;
    }

    hideError();

    const advicePair = getRandomAdvicePair(category); // Get one paired set

    document.getElementById('trixie-advice').textContent = advicePair.trixie;
    document.getElementById('katya-advice').textContent = advicePair.katya;

    document.getElementById('results-section').classList.add('show');
}

// Add click event to button
document.getElementById('get-advice-btn').addEventListener('click', generateAdvice);

// Function to show custom error message
function showError(message) {
    let errorEl = document.getElementById('error-message');
    if (!errorEl) {
        errorEl = document.createElement('div');
        errorEl.id = 'error-message';
        document.querySelector('main').appendChild(errorEl);
    }
    errorEl.textContent = message;
    errorEl.classList.add('show');
}

// Function to hide error message
function hideError() {
    const errorEl = document.getElementById('error-message');
    if (errorEl) {
        errorEl.classList.remove('show');
    }
}