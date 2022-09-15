import express from 'express';
import router from './routes/index';
const port: number = 3000;
const app = express();
app.use('/api', router);
app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('connected');
});
app.listen(port, (): void => {
  console.log('I am here');
});
export default app;
