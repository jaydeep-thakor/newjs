import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/todo.js";

let connection = await mongoose.connect("mongodb://localhost:27017/todo");

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({
    name: "Jaydeep Thakor", // if I do not write name: "Jaydeep Thakor", it will set it jd automatically
    desc: "It is a todo",
    age: 20, // if I Write age more than 65 it will throw an error
    // contact: "jaydeep", it will throw an error that validation failed
    contact: "9988776655",
    isTrue: false,
    });
    todo.save(); 
  res.send('Hello World!')
})

app.get('/viewFirstTodo', async (req, res) => {
    let todo = await Todo.findOne({})
    res.json({
        name: todo.name,
        desc: todo.desc
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


