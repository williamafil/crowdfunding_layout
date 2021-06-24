const loginBtn = document.querySelector(".login-btn");
const loginClose = document.querySelector(".login-close");
const regClose = document.querySelector(".reg-close");
const regBtn = document.querySelector(".reg-btn");

function toggleModal(e) {
  document
    .querySelector(`#${this.dataset.type}-modal`)
    .classList.toggle("open");
}

loginBtn.addEventListener("click", toggleModal);
regBtn.addEventListener("click", toggleModal);
loginClose.addEventListener("click", toggleModal);
regClose.addEventListener("click", toggleModal);
