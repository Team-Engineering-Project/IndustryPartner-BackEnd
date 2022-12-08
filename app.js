import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
import { router as graduatesRoute } from './routes/graduatesRoute.js';
import authRoutes from './routes/authRoutes.js';

const app = express();


app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use("/", authRoutes);
app.use(`/graduates`, graduatesRoute);

const PORT = process.env.PORT;
const DB = process.env.DB_URI;

const main = async () => {
    await mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
}

main()
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));
