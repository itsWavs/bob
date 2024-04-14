const inputText = document.getElementById("input_string");
const outputField = document.getElementById("output");
const bobifyButton = document.getElementById("bobifyButton");
const clipboardButton = document.getElementById("clipboardButton");
const slider = document.getElementById("slider");
const temperatureDisplay = document.getElementById("temperatureDisplay");

bobifyButton.addEventListener("click", handleBobify);
clipboardButton.addEventListener("click", handleClipboardCopy);
slider.addEventListener("input", () => {
  displayTemperature();
  handleBobify();
  handleClipboardEnabling();
});

displayTemperature();
handleClipboardEnabling();

function displayTemperature() {
  temperatureDisplay.innerText = slider.value + "%";
}

function handleClipboardEnabling() {
  const outputEmpty = outputField.innerText.trim() === "";
  outputEmpty
    ? (clipboardButton.disabled = true)
    : (clipboardButton.disabled = false);
}

function bobify() {
  const outputArray = [];
  const loweredInput = inputText.value.toLowerCase();
  for (character of loweredInput) {
    const isUpper = Math.random() < slider.value / 100;
    outputArray.push(
      isUpper ? character.toUpperCase() : character.toLowerCase()
    );
  }
  return outputArray.join("");
}

function handleBobify() {
  outputField.innerText = bobify();
  handleClipboardEnabling();
}

function handleClipboardCopy() {
  // Copy the text inside the text field
  navigator.clipboard.writeText(outputField.innerText);
}
