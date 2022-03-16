const express = require("express");
const quotesData = require("../data/aspirationalQuotes.json");
const router = express.Router();

router.get("/", (req,res)=>{
    const randNum = Math.floor(Math.random()*quotesData.length)

    res.send(quotesData[randNum])
})


module.exports = router;