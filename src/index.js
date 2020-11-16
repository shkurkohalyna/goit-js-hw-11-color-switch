import './styles.css';

let timerId = null;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

startBtn.addEventListener("click", startButton);

stopBtn.addEventListener("click", () => {
startBtn.classList.remove('active');
    console.log('stop');
    
    clearInterval(timerId);
});

function startButton() {
    if (startBtn.classList.contains('active')) {
        console.log('кнопка не активна');
    } else {
        startBtn.classList.add('active');
        console.log('start');
        timerId = setInterval(randomBackground
        , 1000);
    };
    
};

function randomBackground() {
    const min = 0;
    const max = colors.length - 1;
    const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
};