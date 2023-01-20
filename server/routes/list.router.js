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

module.exports = router;
