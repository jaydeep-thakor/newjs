import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    name: { type: String, required: true, default: "JD" },
    age: { type: Number, min: 18, max: 65 },
    desc: String,
    contact: Number,
    isTrue: Boolean,
})

export const Todo = mongoose.model("todo", todoSchema)