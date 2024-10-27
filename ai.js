function displayPoem(respose) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: respose.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "1fcdtd72630b3a012699b80444o4cf56";
  let prompt = "Generate a poem about ${instructions.Input.value}";
  let context =
    "User Instructions: You are a poetry fantic and you wnat to explore more poetry.Your mission is to wite a 4 line poem in basic HTML. Make sure to follow these user instructions.";
  let apiUrl =
    "https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}";

  console.log("generating poem");
  console.log("Prompt: ${prompt}");
  console.log("Context: ${context}");

  axios.get(apiUrl).then(dispayPoem);

  let poemElement = document.querySelector("#poem");
}

let poemFormElement = document.querySelector("#poem - generator - form");
poemFormElement.addEventListener("submit", generatePoem);
