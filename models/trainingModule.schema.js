import mongoose from "mongoose";

const trainingModuleSchema = new mongoose.Schema({
    module: { type: String, required: true },
    challenge: { type: String, required: true },
    result: { type: String, required: true }
})

export default trainingModuleSchema;