import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

import { router as graduatesRoute } from './routes/graduatesRoute.js';
import authRoutes from './routes/authRoutes.js';

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.use("/", authRoutes);
app.use(`/graduates`, graduatesRoute);

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);
