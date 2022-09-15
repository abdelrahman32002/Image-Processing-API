import express from 'express';
import fs from 'fs';

const rightParameters = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  if (!req.query.name || !req.query.width || !req.query.height) {
    res.send('Please include parameters (name, width, height) in the URL');
    return;
  } else {
    if (Number.isNaN(Number(req.query.width))) {
      res.send('Width must be a number');
      return;
    } else if (Number.isNaN(Number(req.query.height))) {
      res.send('Height must be a number');
      return;
    }
  }
  next();
  //)
};

const existingFile = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const imagePath = `./images/${req.query.name}.jpg`;
  if (fs.existsSync(imagePath)) {
    next();
  } else {
    res.send('Error 404 :The image does not exist');
  }
};
const middleware = [rightParameters, existingFile];
export default middleware;
