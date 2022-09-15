import sharp from 'sharp';
import path from 'path';
const resizeTo = async (
  name: string,
  width: number,
  height: number
): Promise<void> => {
  try {
    const imagePath = path.join(`./images`, `${name}.jpg`);
    const processedImage = `./processed_images/${name}.jpg`;
    await sharp(imagePath).resize(width, height).toFile(processedImage);
  } catch (error) {
    console.log(error);
  }
};
export default resizeTo;
