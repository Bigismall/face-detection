function imageAsset(path) {
  const img = new Image();
  img.src = path;
  return img;
}

export const Stickers = {
  helmet: {
    src: imageAsset("images/helmet.png"),
    coords: (face, hx, hy) => [
      face.boundingBox.x - face.boundingBox.width * 0.5 - hx,
      face.boundingBox.y - 1.7 * face.boundingBox.height - hy,
      face.boundingBox.width * 2,
      face.boundingBox.height * 1.8
    ]
  },
  skull: {
    src: imageAsset("images/terminator-skull.png"),
    coords: (face, hx, hy) => [
      face.boundingBox.x - face.boundingBox.width / 4 - hx,
      face.boundingBox.y - face.boundingBox.height * 0.75 - hy,
      face.boundingBox.width * 1.5,
      face.boundingBox.height * 2
    ]
  }
};

export default function drawSticker(
  canvasContext,
  detectedFaceCollection,
  stickerName
) {
  detectedFaceCollection.map(face => {
    if (stickerName) {
      const eyes = face.landmarks.filter(item => item.type === "eye");
      const angle = Math.atan2(
        eyes[1].locations[0].y - eyes[0].locations[0].y,
        eyes[1].locations[0].x - eyes[0].locations[0].x
      );

      canvasContext.translate(
        canvasContext.canvas.width / 2,
        canvasContext.canvas.height / 2
      );
      canvasContext.rotate(angle);
      canvasContext.drawImage(
        Stickers[stickerName].src,
        ...Stickers[stickerName].coords(
          face,
          canvasContext.canvas.width / 2,
          canvasContext.canvas.height / 2
        )
      );
    }
  });
}
