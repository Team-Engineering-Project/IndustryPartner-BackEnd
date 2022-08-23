import mongoose from "mongoose";

const flairSchema = new mongoose.Schema({
    type: { type: String, required: true },
    description: { type: String, required: true }
})

export default flairSchema;