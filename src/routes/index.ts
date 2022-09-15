import express from 'express';
import image from './api/images';

const router = express.Router();

router.use('/images', image);

router.get('/', (req: express.Request, res: express.Response): void => {
  res.send('connected to main');
});
export default router;
