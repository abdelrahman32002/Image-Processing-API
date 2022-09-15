import express from 'express';
import middleware from '../../utilities/image_parameters_checker';
import resizeTo from '../../utilities/resize';
import sizeOf from 'image-size';
import path from 'path';
import fs from 'fs';
const image = express.Router();

image.get(
  '/',
  middleware,
  async (req: express.Request, res: express.Response): Promise<void> => {
    const name = req.query.name as string;

    const width = Number(req.query.width);

    const height = Number(req.query.height);

    const processedImage = `./processed_images/${name}.jpg`;

    if (fs.existsSync(processedImage)) {
      const dim = sizeOf(processedImage);
      if (dim.width != width || dim.height != height) {
        await resizeTo(name, width, height);
      }
    }
    if (!fs.existsSync(processedImage)) {
      await resizeTo(name, width, height);
    }

    const toBePassed = `processed_images/${name}.jpg`;

    res.sendFile(path.join(path.resolve('./'), toBePassed));
  }
);
export default image;
