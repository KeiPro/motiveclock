let timerInterval;
let seconds = 0;

export function initTimerEvents() {
    document.getElementById('startTimer').addEventListener('click', startTimer);
    document.getElementById('stopTimer').addEventListener('click', stopTimer);
    document.getElementById('resetTimer').addEventListener('click', resetTimer);
}

function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    document.getElementById('timer').textContent = '00:00:00';
}

function updateTimer() {
    seconds++;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    document.getElementById('timer').textContent = 
        `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

function pad(value) {
    return String(value).padStart(2, '0');
}