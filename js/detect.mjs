const options = {
  fastMode        : true,
  maxDetectedFaces: 10,
};

async function detectFace(image) {
  const bitmap = await createImageBitmap(image);
  const detector = new window.FaceDetector(options);
  const detection = await detector.detect(bitmap);
  return {bitmap, detection};
}

export default detectFace;
