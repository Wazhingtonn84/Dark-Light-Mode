const backGround = document.querySelector(".background");
const text = document.querySelector("h4");
const button = document.querySelector(".btn");

button.addEventListener("click", (event) => {
  const myBtn = event.target.textContent;
  myBtn === "Dark"
    ? (event.target.textContent = "Light")
    : (event.target.textContent = "Dark");
  button.classList.toggle("btnChange");
  backGround.classList.toggle("white");
  backGround.classList.toggle("dark");
  text.classList.toggle("text");
  text.classList.toggle("h4");
});
