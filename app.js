import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

import { router as graduatesRoute } from './routes/graduatesRoute.js';
import authRoutes from './routes/authRoutes.js';

const port = process.env.PORT;
const host = process.env.HOST;
const app = express();

const main = async () => {
    console.log(`Connecting to DB @ ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
}

main().catch(err => console.log(err));

app.use(cors({
    origin: ["https://cors-anywhere.herokuapp.com/http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.use("/", authRoutes);
app.use(`/graduates`, graduatesRoute);

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
})

export default server;
