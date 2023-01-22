# To-Do List Weekend Challenge

## Description

Duration: 3 days

This project is a To-Do list with an input to add a task that is linked to a database. Once the new task is added to the database it is given the default value of FALSE by the database. The task and the status of complete are then displayed on the DOM with buttons to mark the task as complete/incomplete and a button to delete the task.

When the "Mark as complete/incomplete" button is pressed it changes the value for "complete" to whatever is its current opposite boolean value. This also changes a few classes. The first class will turn the background color and text color of a table row to a different color from the incomplete tasks. Completed task rows are now green while incomplete continue to alternate between white and gray. The next class changes the text within the buttons to display correcly to mark as complete if the task is currently incomplete or to mark as incomplete when the task is currently complete.

When the "delete" button is pressed that task is removed from the database using its ID stored on the button using the data tag. The DOM is then refreshed to display the current tasks on the list.

## Prerequisites

Please install the following for the app to work on a local machine:

- Node.js
- Express
- Postgres
- Postico 

## Installation 

1. Create a database named your "weekend-to-do-app",
2. The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an npm install express and npm install pg
4. Run npm run server in your terminal
5. Open your page on whatever localhost:PORT you have specified

## Usage

1. Input a task into the input field
2. Click add to input that task to the database (task will be appended to the DOM)
3. Press "Mark as Complete" to mark task as complete
4. If you wish you can mark a complete task as incomplete by pressing "Mark as Incomplete"
5. Press "Delete" to delete task from table and database.

## Built With 

- HTML
- CSS 
- Javascript
    - Node.js
    - Express
    - Postgres
    - JQuery
- SQL 

## Acknowledgment

Thanks to Mason and Blaine for the instruction and my cohort mates for helping when I needed it!
