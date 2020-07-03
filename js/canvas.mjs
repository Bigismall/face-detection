const EYE_TO_FACE = 0.135;
const MOUTH_TO_FACE_X = 0.4;
const MOUTH_TO_FACE_Y = 0.16;
const TWO_PI = 2 * Math.PI;

const drawLandmark = {
  eye: drawEye,
  mouth: drawMonth
};

function drawEye(canvasCtx, location, face) {
  const eyeRadius = Math.round(face.boundingBox.width * EYE_TO_FACE);

  canvasCtx.strokeStyle = "#fc0";
  canvasCtx.beginPath();
  canvasCtx.arc(location.x, location.y, eyeRadius, 0, TWO_PI);
  canvasCtx.stroke();
}

function drawMonth(canvasCtx, location, face) {
  const mouthWidth = Math.round(face.boundingBox.width * MOUTH_TO_FACE_X);
  const mouthHeight = Math.round(face.boundingBox.height * MOUTH_TO_FACE_Y);

  canvasCtx.strokeStyle = "#c00";
  canvasCtx.strokeRect(
    location.x - mouthWidth / 2,
    location.y - mouthHeight / 2,
    mouthWidth,
    mouthHeight
  );
}

function drawBoundingBox(canvasCtx, face) {
  canvasCtx.strokeStyle = "#08c";
  canvasCtx.strokeRect(
    face.boundingBox.x,
    face.boundingBox.y,
    face.boundingBox.width,
    face.boundingBox.height
  );
}

function drawFace(canvasContext, detectedFaceCollection) {
  canvasContext.lineWidth = 2;

  detectedFaceCollection.map(face => {
    drawBoundingBox(canvasContext, face);
    face.landmarks.map(landmark => {
      drawLandmark[landmark.type](canvasContext, landmark.locations[0], face);
    });
  });
}

export default drawFace;
