const path = require("path");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.static(path.join(__dirname, "build")));

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let id = 2;
const todoList = [
  {
    id: 1,
    text: "할일 1",
    done: false,
  },
];

app.get("/api/todo", (req, res) => {
  res.json(todoList);
});

app.post("/api/todo", (req, res) => {
  const { text, done } = req.body;
  console.log("req.body : ", req.body);
  todoList.push({
    id: id++,
    text,
    done,
  });
  return res.send("success");
});


app.listen(process.env.PORT || 4000, () => {
  console.log("server start!");
});
