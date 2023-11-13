// seedDB.js
// Adjust the path based on your project structure

import mongoose from "mongoose";
import faker from "faker";

import { Pin } from "./schemas/Pin.schema.js";

// Connect to MongoDB
mongoose.connect('mongodb://localhost/pinterest-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to generate dummy pins
const generateDummyPins = (count) => {
  const pins = [];
  for (let i = 0; i < count; i++) {
    pins.push({
      title: faker.lorem.words(),
      image_url: faker.image.imageUrl(),
      description: faker.lorem.sentence(),
    });
  }
  return pins;
};

// Seed the database with dummy pins
export const seedDatabase = async () => {
  try {
    // Clear existing data
    await Pin.deleteMany({});

    // Generate dummy pins
    const dummyPins = generateDummyPins(10); // Adjust the count as needed

    // Insert dummy pins into the database
    const insertedPins = await Pin.insertMany(dummyPins);

    console.log(`${insertedPins.length} pins inserted into the database.`);
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    // Disconnect from the database
    mongoose.disconnect();
  }
};

