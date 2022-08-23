import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
    title: { type: String, required: true }
});

export default achievementSchema;