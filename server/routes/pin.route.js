import mongoose from 'mongoose';
import {Router} from 'express';
import { Pin } from '../schemas/Pin.schema.js';

const pinRoute = Router();

pinRoute.get('/', async (request, response) => {
    console.log('CHALA');
    const pins = await Pin.find();
    response.json(pins);
})


export default pinRoute;