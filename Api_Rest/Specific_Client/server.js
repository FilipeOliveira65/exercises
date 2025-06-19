const express = require("express");
const data = require("./data.json");;

const app = express();

app.use(express.json());

app.get("/clients/:id", (req, res) => {
    const {id} = req.params;
    const client = data.find(Cli => Cli.id === Number(id));

    if (isNaN(id)) {
        return res.status(400).json({error: "The ID type is'nt a number"})
    }
    
    if(!client) {
        return res.status(404).json({message: "User not found"});
    } 

    res.json(client);
})

app.listen(3000, () => {
    console.log("Server is running")
})
