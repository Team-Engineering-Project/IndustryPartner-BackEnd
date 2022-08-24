import mongoose from "mongoose";

const professionalSkillSchema = new mongoose.Schema({
    skill: { type: String, required: true },
    progress: { type: String, required: true }
})

export default professionalSkillSchema;