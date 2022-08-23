import mongoose from "mongoose";

const diligenceSchema = new mongoose.Schema({
    disclosure: { type: Boolean },
    rightToWork: { type: Boolean },
    identity: { type: Boolean },
    education: { type: Boolean },
    credit: { type: Boolean }

})

export default diligenceSchema;