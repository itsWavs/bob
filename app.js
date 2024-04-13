const inputText = document.getElementById("input_string");
const outputField = document.getElementById("output");
const bobifyButton = document.getElementById("bobifyButton");
const clipboardButton = document.getElementById("clipboardButton");
const slider = document.getElementById("slider");
const temperatureDisplay = document.getElementById("temperatureDisplay");

bobifyButton.addEventListener("click", handleBobify);
clipboardButton.addEventListener("click", handleClipboard);
slider.addEventListener("input", () => {
  displayTemperature();
  handleBobify();
});

// temperatureDisplay.innerText = slider.value;
displayTemperature();

function displayTemperature() {
  temperatureDisplay.innerText = slider.value + "%";
}
function bobify(inputString) {
  const outputArray = [];
  const loweredInput = inputString.toLowerCase();
  for (character of loweredInput) {
    const isUpper = Math.random() < slider.value / 100;
    outputArray.push(
      isUpper ? character.toUpperCase() : character.toLowerCase()
    );
  }
  return outputArray.join("");
}

function handleBobify() {
  const userString = inputText.value;
  outputField.innerText = bobify(userString);
}

function handleClipboard() {
  // Copy the text inside the text field
  navigator.clipboard.writeText(outputField.innerText);
}
