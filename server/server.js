import express from 'express';
import cors from 'cors';
import pinRoute from './routes/pin.route.js';
import { seedDatabase } from './utils.js';



const app = express();
app.use(cors());

app.use('/pins', pinRoute);

app.listen(8000, async () => {
    console.log('App is started');
    await seedDatabase();
})