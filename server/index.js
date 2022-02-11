const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const todoList = require('./db.json')
const ctrl = require('./controller')

//Endpoints

app.get("/api/compliment", ctrl.getCompliment)
app.get("/api/fortune", ctrl.getFortune)
app.get("/api/todo", ctrl.getAllToDo)
app.delete("/api/todo/:id", ctrl.deleteTask)
app.post('/api/todo', ctrl.createTask)


app.listen(4000, () => console.log("Server running on 4000"));