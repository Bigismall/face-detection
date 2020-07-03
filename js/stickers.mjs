function imageAsset(path) {
  const img = new Image();
  img.src = path;
  return img;
}

export const Stickers = {
  helmet: {
    src: imageAsset("images/helmet.png"),
    coords: face => [
      face.boundingBox.x - face.boundingBox.width * 0.5,
      face.boundingBox.y - 1.7 * face.boundingBox.height,
      face.boundingBox.width * 2,
      face.boundingBox.height * 1.8
    ]
  },
  terminator: {
    src: imageAsset("images/terminator-skull.png"),
    coords: face => [
      face.boundingBox.x - face.boundingBox.width / 4,
      face.boundingBox.y - face.boundingBox.height * 0.75,
      face.boundingBox.width * 1.5,
      face.boundingBox.height * 2
    ]
  }
};

export default function drawHelmet(
  canvasContext,
  detectedFaceCollection,
  sticker
) {
  detectedFaceCollection.map(face =>
    canvasContext.drawImage(sticker.src, ...sticker.coords(face))
  );
}
