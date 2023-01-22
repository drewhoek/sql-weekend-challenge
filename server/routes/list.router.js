const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET request to aquire data from database
router.get("/gettasks", (req, res) => {
    console.log("router list");
    const queryText = `SELECT * FROM "list" ORDER BY "complete", "task";`;

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

    // if (!task || !complete || !timeCompleted) {
    //   const errorMessage = "error message";
    //   console.log(errorMessage);
    //   res.status(400).send(errorMessage);
    // }

    const queryText = `
        INSERT INTO "list" ("task")
        VALUES ($1);`;

    pool
        .query(queryText, [task])
        .then((response) => {
            console.log('Successful POST on /newtask')
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`error ${queryText}`, error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    console.log('In DELETE route /list', req.params);
    let id = req.params.id;
    const query = `DELETE FROM "list" WHERE id=$1;`;
    if (!id || id === '') {
        res.status(400).send('Error in request');
    } else {
        pool.query(query, [id]).then(() => {
            res.sendStatus(204);
        }).catch((error) => {
            console.log(`Error deleting task`, error);
            res.sendStatus(500);
        });
    }
});

router.put('/:id', (req, res) => {
    console.log(`Updating task with id ${req.params}`);
    let queryText = `UPDATE "list" SET "complete"= NOT "complete" WHERE id=$1 RETURNING *;`;
    pool.query(queryText, [req.params.id]).then((result) => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error in editomg list', error);
      res.sendStatus(500);
    });
  });

module.exports = router;
