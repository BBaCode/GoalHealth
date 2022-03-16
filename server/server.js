const express = require("express");
const app = express();
const cors = require("cors");
const aspirationalQuotes = require("./routes/aspirationalQuotes");
const goalCheckList = require("./routes/goalCheckList");

const SERVER_PORT = 8080

app.use(cors());


app.use("/quotes",aspirationalQuotes);

app.use("/goals", goalCheckList);

app.listen(SERVER_PORT,()=>{
    console.log(`This server is listening on port: ${SERVER_PORT}`)
})