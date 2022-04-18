const btn = document.querySelector(".hamburger-button");
const cross = document.querySelector(".cross");

btn.addEventListener("click", function() {
  const modal = document.querySelector("#navigation-modal");
  modal.classList.add("modal-show");
});

cross.addEventListener("click", function() {
  const modal = document.querySelector("#navigation-modal");
  modal.classList.remove("modal-show");
});