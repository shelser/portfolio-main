// ``
const timerBlock = document.querySelector('.timer__time');
const deadLine = '30 january 2026';

let interval;

const updateBlock = () => {
   const date = new Date().getTime();
    const dateDeadline = new Date(deadLine).getTime();
    const timeRemining = (dateDeadline - date) / 1000;

    const days = Math.floor(timeRemining / 60 / 60 / 24);
    const hours = Math.floor((timeRemining / 60 / 60) % 24);
    const minutes = Math.floor((timeRemining / 60) % 60)
    const seconds = Math.floor(timeRemining  % 60)

    const fDays = days > 10 ? days : `0${days}`;
    const fHours = hours > 10 ? hours : `0${hours}`;
    const fMinutes = minutes > 10 ? minutes : `0${minutes}`;
    const fSeconds = seconds > 10 ? seconds : `0${seconds}`;

    timerBlock.textContent = `${fDays}:${fHours}:${fMinutes}:${fSeconds}`;

    if (timeRemining <= 0) {
        clearInterval(interval);
        timerBlock.textContent = `00:00:00`
    }
};

updateBlock();
interval = setInterval(updateBlock, 500);




