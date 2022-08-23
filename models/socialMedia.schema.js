import mongoose from "mongoose";

const socialMediaSchema = new mongoose.Schema({
    github: { type: String, required: true },
    linkedIn: { type: String, required: true }
})

export default socialMediaSchema;