function generatePoem(event) {
  event.preventDefault();
  alert("Generting poem");
}

let poemFormElement = document.querySelector("#poem - generator - form");
poemFormElement.addEventListener("submit", generatePoem);

