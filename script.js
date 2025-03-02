// script.js

const jokeButton = document.getElementById('jokeButton');
const jokeDisplay = document.getElementById('joke');
const loadingDisplay = document.getElementById('loading');
const categorySelect = document.getElementById('categorySelect');

async function fetchJoke() {
    const selectedCategory = categorySelect.value;
    loadingDisplay.style.display = 'block'; // Show loading message
    jokeDisplay.textContent = ''; // Clear previous joke

    try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/${selectedCategory}`);
        const data = await response.json();

        if (data.type === 'single') {
            jokeDisplay.textContent = data.joke;
        } else {
            jokeDisplay.textContent = `${data.setup} - ${data.delivery}`;
        }
    } catch (error) {
        jokeDisplay.textContent = 'Oops! Something went wrong. Please try again.';
    } finally {
        loadingDisplay.style.display = 'none'; // Hide loading message
    }
}

// Fetch a joke when the button is clicked
jokeButton.addEventListener('click', fetchJoke);

// Fetch a joke on initial load
fetchJoke();
