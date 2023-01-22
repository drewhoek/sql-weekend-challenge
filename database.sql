CREATE TABLE "list" (
  "id" serial primary key,
  "task" varchar(250) NOT NULL,
  "complete" BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO "list" ("task") 
VALUES ('Wash dishes'),
('Take out garbage'),
('Do laundry'),
('Feed cat'),
('Make bed'),
('Vaccuum floor');
