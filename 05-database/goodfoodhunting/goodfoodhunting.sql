-- Relational database store things in tables (spreadsheet)

CREATE TABLE dishes (
   id SERIAL4 PRIMARY KEY,
   image_url VARCHAR(400),
   name VARCHAR(200)
);

CREATE TABLE users (
   id SERIAL4 PRIMARY KEY,
   email VARCHAR(400)
);

INSERT INTO dishes (name, image_url) VALUES ('pudding', 'https://i.imgur.com/a6EDWko.jpg?1');

INSERT INTO dishes (name, image_url) VALUES ('cake', 'https://i.imgur.com/a2mAkYQ.jpg');

ALTER TABLE dishes ADD COLUMN created_at TIMESTAMP;

-- pudding, http://blah.com/pudding.png - records
-- cake, http://blah.com/cake.jpg - records
