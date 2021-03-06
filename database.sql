CREATE TABLE "artist" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(80) not null,
    "birthdate" date
);

INSERT INTO "artist" ("name", "birthdate")
VALUES ('Ella Fitzgerald', '04-25-1917');

INSERT INTO "artist" ("name", "birthdate")
VALUES ('Dave Brubeck', '12-06-1920');

INSERT INTO "artist" ("name", "birthdate")
VALUES ('Miles Davis', '05-26-1926' );

INSERT INTO "artist" ("name", "birthdate")
VALUES ('Esperanza Spalding', '10-18-1984');


CREATE TABLE "song" (
"id" SERIAL PRIMARY KEY,
"title" varchar(255),
"length" varchar(10),
"released" date 


);

INSERT INTO "song" ("title", "length", "released")
VALUES ('Take Five', '5:24', '1959-09-29');

INSERT INTO "song" ("title", "length", "released")
VALUES ('So What', '9:22', '1959-08-17');

INSERT INTO "song" ("title", "length", "released")
VALUES ('Black Gold', '5:17', '2012-02-01');

