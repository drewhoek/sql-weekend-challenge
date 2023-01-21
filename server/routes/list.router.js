const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET request to aquire data from database
router.get("/gettasks", (req, res) => {
    console.log("router list");
    const queryText = `SELECT * FROM "list";`;

    pool
        .query(queryText)
        .then((result) => {
            console.log("successful select from database");
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`error ${queryText}`, error);
            res.sendStatus(505);
        });
});

// POST request to add new task to list
router.post("/newtask", (req, res) => {
    console.log("post task", req.body);
    const task = req.body.task;
    const complete = req.body.complete;
    const timeCompleted = req.body.timeCompleted;

    // if (!task || !complete || !timeCompleted) {
    //   const errorMessage = "error message";
    //   console.log(errorMessage);
    //   res.status(400).send(errorMessage);
    // }

    const queryText = `
        INSERT INTO "list" ("task", "complete", "timeCompleted" )
        VALUES ($1, $2, $3);`;

    pool
        .query(queryText, [task, complete, timeCompleted])
        .then((response) => {
            console.log('Successful POSt on /newtask')
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`error ${queryText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;
