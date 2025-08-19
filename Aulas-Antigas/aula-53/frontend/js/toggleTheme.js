const toggleButton = document.getElementById("toggle-theme");

toggleButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");

  // Alterar texto do botão conforme o tema
  if (document.body.classList.contains("dark-theme")) {
    toggleButton.innerHTML = "<img src='./images/sol.png' alt='Tema claro'>";
  } else {
    toggleButton.innerHTML = "<img src='./images/lua.png' alt='Tema escuro'>";
  }
});