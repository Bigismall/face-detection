function drawFace(canvasContext, detectedFaceCollection) {
  canvasContext.lineWidth = 5;
  detectedFaceCollection.map((face) => {
    canvasContext.strokeStyle = '#cc0';
    canvasContext.strokeRect(face.boundingBox.x, face.boundingBox.y, face.boundingBox.width, face.boundingBox.height);
    canvasContext.strokeStyle = '#0c0';
    face.landmarks.map((landmark) => {
      const location = landmark.locations[0];
      canvasContext.beginPath();
      canvasContext.arc(location.x, location.y, 30, 0, 2 * Math.PI);
      canvasContext.stroke();
    });

  });
}

export default drawFace;