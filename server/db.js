import mongoose from "mongoose";

export const db = mongoose.connect('mongodb+srv://admin:admin@task-app-cluster.apqmdns.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('CONNECTED');
})