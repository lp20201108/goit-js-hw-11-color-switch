// Есть массив цветов в hex-формате и кнопки Start и Stop.

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

    const randomColor = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
const refs = {
  startBtn: document.querySelector('[data-action = "start"]'),
  stopBtn: document.querySelector('[data-action = "stop"]'),
 };

 
refs.startBtn.addEventListener('click', startColorHandler);
refs.stopBtn.addEventListener('click', stopColorHandler);


let intervalId = 0; 
// refs.startBtn.disabled = true;
// refs.stopBtn.disabled = false;


function startColorHandler(event) {

if (refs.startBtn.disabled) {
      return;
  }
 
  intervalId = setInterval(() => {
  refs.startBtn.disabled = true;
document.body.style.backgroundColor = colors[randomColor(0, colors.length-1)];
 }, 1000);

};

function stopColorHandler(event) {
  refs.startBtn.disabled = false;
    clearInterval(intervalId);
    
 
};

