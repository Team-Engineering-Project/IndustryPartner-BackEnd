import mongoose from "mongoose";

const technicalSkillSchema = new mongoose.Schema({
    skill: { type: String, required: true },
    progress: { type: String, required: true}
})

export default technicalSkillSchema;