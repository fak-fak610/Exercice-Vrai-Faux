document.getElementById("trueBtn").addEventListener("click", function () {
  const result = document.getElementById("result");
  result.textContent =
    "Erreur ! La Juventus n'est pas le club le plus titré d'Italie.";
  result.style.color = "red";
});

document.getElementById("falseBtn").addEventListener("click", function () {
  const result = document.getElementById("result");
  result.textContent =
    "Correct ! La Juventus n'est pas le club le plus titré d'Italie.";
  result.style.color = "green";
});
