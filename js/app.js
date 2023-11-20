const navBtnDOM = document.getElementById("nav-btn");
const links = document.getElementById("nav-links");
navBtnDOM.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// footer date
const date = document.getElementById("date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
