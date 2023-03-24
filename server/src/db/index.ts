import Mongoose, { ConnectOptions } from "mongoose";
import dotenv from 'dotenv';
import Movie from "./MovieSchema";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL as string;

Mongoose.connect(MONGO_URL, {
  useNewUrlParser: true
} as ConnectOptions).then(
  () => {
    console.log("Connected to MongoDB");
  }
);

export {
  Movie as MovieModel
}
