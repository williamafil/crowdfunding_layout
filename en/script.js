// Modal
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

// Accordion
let previousElement = null;
document
  .querySelectorAll(".accordion-card > input[type=radio]")
  .forEach(function (item) {
    item.addEventListener("click", function (e) {
      previousElement && previousElement.classList.toggle("active-accordion");
      e.target.parentNode.classList.toggle("active-accordion");
      previousElement = e.target.parentNode;
    });
  });
