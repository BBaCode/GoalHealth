const express = require("express");
const router = express.Router();
const fs = require("fs");
const goalsList = require("../data/goalCheckList.json")

router.post("",(req,res)=>{
    const goals = goalsList
    const newGoal = "Hellow World 122"

    goals.push(newGoal)
    const stringifiedGoals = JSON.stringify(goals)

    fs.writeFileSync('../data/goalCheckList.json', stringifiedGoals)
    res.send(goals)
})


module.exports = router;