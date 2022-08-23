import mongoose from "mongoose";

const personalityTypeSchema = new mongoose.Schema({
    type: { type: String, required: true },
    description: { type: String, required: true }
})

export default personalityTypeSchema;