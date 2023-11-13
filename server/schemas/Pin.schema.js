import mongoose from "mongoose";

const pin = mongoose.Schema({
    title: String,
    imgUrl: String,
    description: String,
})


export const Pin = mongoose.model('Pin', pin);
