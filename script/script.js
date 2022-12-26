const addAccountButton = document.querySelector(".add-account");
const popup = document.querySelector(".popup");
addAccountButton.addEventListener("click", () => {
  popup.classList.remove("hidden");
  const close = document.querySelector(".close");
  close.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
});
