const button = document.getElementById('openModal');
const modalTxt = document.querySelector('.p-8');
const modal = document.querySelector('.modal-wrapper');

button.addEventListener('click', openModal);
function openModal() {
  modal.classList.toggle('invisible');
}

modalTxt.addEventListener('click', closeModal);

document.addEventListener('keydown', function(event) {
  const isEscKey = event.key === "Escape";
  if (isEscKey) {
    modal.classList.toggle('invisible');
  }
});

function closeModal() {
  modal.classList.toggle('invisible');
}

