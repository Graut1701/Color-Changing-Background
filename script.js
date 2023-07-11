const randomNumber = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

let intervalId;

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changBackgroundColor, 1000);
  }

  function changBackgroundColor() {
    document.body.style.backgroundColor = randomNumber();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
