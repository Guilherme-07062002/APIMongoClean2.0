// import 'module-alias/register';
import mongoose from 'mongoose';
// import dotenv from 'dotenv';

//if (!process.env.PORT) dotenv.config();

mongoose.connect('mongodb://127.0.0.1:27017/apiMongo').then(async () => {
  const app = (await import('./config/app')).default;
  app.listen(process.env.PORT, () => console.log('Server is running'));
});
