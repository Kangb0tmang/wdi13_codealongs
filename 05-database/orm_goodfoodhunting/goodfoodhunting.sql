r-- Relational database store things in tables (spreadsheet)

CREATE TABLE dishes (
   id SERIAL4 PRIMARY KEY,
   image_url VARCHAR(400),
   name VARCHAR(200)
);

CREATE TABLE users (
   id SERIAL4 PRIMARY KEY,
   email VARCHAR(400)
);

ALTER TABLE users ADD COLUMN password_digest VARCHAR(400);

INSERT INTO dishes (name, image_url) VALUES ('pudding', 'https://i.imgur.com/a6EDWko.jpg?1');

INSERT INTO dishes (name, image_url) VALUES ('cake', 'https://i.imgur.com/a2mAkYQ.jpg');

CREATE TABLE comments (
   id SERIAL4 PRIMARY KEY,
   content VARCHAR(400) NOT NULL,
   dish_id INTEGER NOT NULL,
   FOREIGN KEY (dish_id) REFERENCES dishes (id) ON DELETE RESTRICT
);

ALTER TABLE comments ADD COLUMN user_id INTEGER;
-- ALTER TABLE comments ADD CONSTRAINT FOREIGN KEY (user_id) REFERENCES users (id);

-- pudding, http://blah.com/pudding.png - records
-- cake, http://blah.com/cake.jpg - records
