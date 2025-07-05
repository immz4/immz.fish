"use strict"

let fishMode = false;

const fishModeOnText = "<#FISH MODE ON#>";
const fishModeOffText = "<#FISH MODE OFF#>";

const fishModeButton = document.querySelector("#fish-mode");

if (!fishModeButton) {
    throw new Error("no fish toggle :(");
}

fishModeButton.textContent = fishModeOffText;

const fishModeHandler = () => {
    if (fishMode) {
        fishMode = false;
        fishModeButton.textContent = fishModeOffText;
    } else {
        fishMode = true;
        fishModeButton.textContent = fishModeOnText; 
    }
}

fishModeButton.addEventListener("click", fishModeHandler);

fishModeButton.addEventListener("keydown", fishModeHandler);