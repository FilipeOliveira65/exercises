const express = require("express");
const app = express();

const data = require("./data.json");

app.use(express.json())

//Return all data inside the data base;
app.get("/clients", (req, res) => {
    res.json(data)
})

app.listen(3000, () => {
    console.log("Server is  running.")
})