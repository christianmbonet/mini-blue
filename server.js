require("dotenv").config();

import express from "express";

let app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

let port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`app is running on ${port}`);
})