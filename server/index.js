const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getFortune, addFortune} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortunes", getFortune)
app.post("/api/fortune", addFortune)


app.listen(3000, () => console.log("Love you 3000"));
