const body = document.querySelector('body');
const calculator = document.querySelector('.calculator');
const buttons = document.querySelectorAll('.button');
const toggleCheckbox = document.getElementById('toggle');
const svgs = document.querySelectorAll('.svg');

toggleCheckbox.addEventListener('change', () => {
  if (toggleCheckbox.checked) {
    body.classList.add('dark-mode');
    calculator.classList.add('dark-mode');
    buttons.forEach(button => button.classList.add('dark-mode'));
    svgs.forEach(svg => svg.classList.add('dark-mode'));
  } else {
    body.classList.remove('dark-mode');
    calculator.classList.remove('dark-mode');
    buttons.forEach(button => button.classList.remove('dark-mode'));
    svgs.forEach(svg => svg.classList.remove('dark-mode'));
  }
});