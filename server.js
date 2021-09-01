require("dotenv").config();

import express from "express";

let app = express();

app.use(bodyparser.json());

let port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`app is running on ${port}`);
})