import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });


import { router as graduatesRoute } from './routes/graduatesRoute.js';

const port = process.env.PORT;
const host = process.env.HOST;
const app = express();


const main = async () => {
    console.log(`Connecting to DB @ ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
}

main().catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

app.use(`/graduates`, graduatesRoute);

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
})

export default server;