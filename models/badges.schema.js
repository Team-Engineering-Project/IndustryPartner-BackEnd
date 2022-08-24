import mongoose from "mongoose";

const badgesSchema = new mongoose.Schema({
    java8: { type: Boolean },
    agileExplorer: { type: Boolean }
});

export default badgesSchema;