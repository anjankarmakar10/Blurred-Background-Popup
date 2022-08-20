const container = document.querySelector(".container");
const popupContainer = document.querySelector(".popup-container");
const btnOder = document.querySelector(".btn-order");
const btnJoin = document.querySelector(".btn-join");
const exit = document.querySelector(".exit");

btnOder.addEventListener("click", () => {
  container.classList.add("active");
  popupContainer.classList.remove("active");
});

exit.addEventListener("click", () => {
  container.classList.remove("active");
  popupContainer.classList.add("active");
});
