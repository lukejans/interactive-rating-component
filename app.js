const mainContainer = document.querySelector('.main-container');
const thankContainer = document.querySelector('.thank-container');

const submitButton = document.getElementById('submit-btn');
const restartButton = document.getElementById('restart-btn');

const rated = document.getElementById('rated');
const rateLvl = document.querySelectorAll('.rate');

submitButton.addEventListener('click', () => {
  thankContainer.classList.remove('hidden');
  mainContainer.style.display = 'none';
});

restartButton.addEventListener('click', () => {
  thankContainer.classList.add('hidden');
  mainContainer.style.display = 'flex';
});

rateLvl.forEach((rate) => {
  rate.addEventListener('click', () => {
    rated.innerHTML = rate.innerHTML;
    console.log(rate.innerHTML);
  });
});
