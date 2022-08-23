import mongoose from "mongoose";

const qualificationSchema = new mongoose.Schema({
    level: { type: String, required: true },
    subject: { type: String, required: true },
    establishment: { type: String, required: true }
});

export default qualificationSchema;