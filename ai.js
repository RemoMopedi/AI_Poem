function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Come, And Be My Baby"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  let poemElement = document.querySelector("#poem");
}

let poemFormElement = document.querySelector("#poem - generator - form");
poemFormElement.addEventListener("submit", generatePoem);
