import 'module-alias/register';
import { MongoDBClient } from '@/../mongo';
import dotenv from 'dotenv';
import setupRoutes from './config/setup-routes';

if (!process.env.PORT) dotenv.config();

const mongo = new MongoDBClient()

mongo.connect().then(async () => {
  const app = (await import('./config/app')).default;
  setupRoutes(app);
  app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
});

export { mongo };
