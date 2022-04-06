const express = require("express");
const cors = require("cors");

const {getHouses, deleteHouse, updateHouse, createHouse} = require("./controller.js");

const app = express();

app.use(cors());
app.use(express.json());




app.get("/api/houses", getHouses);
app.delete("/api/houses/:id", deleteHouse);
app.post("/api/houses", createHouse);
app.put("/api/houses/:id", updateHouse);


app.listen(4004, () => {
    console.log("Listening on port 4004");
});



