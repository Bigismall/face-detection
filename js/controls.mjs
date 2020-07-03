let isLandmarks = false;
let currentSticker = null;

function initControls(formName) {
  const form = document.getElementById(formName);

  form.addEventListener("change", function() {
    isLandmarks = document.getElementById("controls-landmarks").checked;
    let sticker = document.querySelector("input[type=radio]:checked").value;
    currentSticker = sticker === "none" ? null : sticker;
  });
}

export const getCurrentSticker = () => currentSticker;

export const displayLandmarks = () => isLandmarks;

export default initControls;
