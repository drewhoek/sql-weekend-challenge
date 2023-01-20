CREATE TABLE "list" (
  "id" serial primary key,
  "task" varchar(250) NOT NULL,
  "complete" BOOLEAN NOT NULL,
  "timeCompleted" TIMESTAMP
);

INSERT INTO "list" ("task", "complete", "timeCompleted") 
VALUES ('Wash dishes', FALSE, NULL),
('Take out garbage', FALSE, NULL),
('Do laundry', FALSE, NULL),
('Feed cat', FALSE, NULL),
('Make bed', FALSE, NULL),
('Vaccuum floor', FALSE, NULL);