// JavaScript for Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');

// Check saved mode in localStorage
const currentMode = localStorage.getItem('theme') || 'light';
if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '🌞'; // Change button icon to light mode
}

// Toggle Dark/Light Mode
darkModeToggle.addEventListener('click', () => {
    const body = document.body;

    // Toggle dark mode class
    body.classList.toggle('dark-mode');

    // Change button text/icon
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '🌞';
        localStorage.setItem('theme', 'dark');
    } else {
        darkModeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});
