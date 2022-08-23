import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    description: { type: String, required: true },
    person: { type: String, required: true }
})

export default feedbackSchema;