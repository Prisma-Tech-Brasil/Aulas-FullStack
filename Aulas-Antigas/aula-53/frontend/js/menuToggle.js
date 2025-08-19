const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("nav-links-active"); // Adiciona ou remove a classe que exibe o menu
});