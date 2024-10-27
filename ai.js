function displayPoem(response) {
  console.log("Poem generated");

  const poemDiv = document.querySelector(".poem");
  poemDiv.innerHTML = "";

  new Typewriter(poemDiv, {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

async function generatePoem(event) {
  event.preventDefault();

  const instructionsInput = document.querySelector("#user-instructions").value;

  if (!instructionsInput.trim()) {
    alert("Please enter a topic for the poem.");
    return;
  }

  const prompt = `User Instructions: Generate a poem about ${instructionsInput}`;
  const context =
    "You are a poetry fanatic and you want to explore more poetry. Your mission is to write a 4-line poem. Make sure to follow these user instructions.";
  const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(
    context
  )}&key=1fcdtd72630b3a012699b80444o4cf56`; 

  console.log("Generating poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  try {
    const response = await axios.get(apiUrl);
    displayPoem(response);
  } catch (error) {
    console.error("Error generating poem:", error);
    alert("An error occurred while generating the poem. Please try again.");
  }
}

const poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

