CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  devoured BOOL DEFAULT false,
  PRIMARY KEY(id)
);

-- Insert a set of records.
INSERT INTO burgers (name, devoured) VALUES ('Cheese Burger', false);
INSERT INTO burgers (name, devoured) VALUES ("Chicken Burger", false);
INSERT INTO burgers (name, devoured) VALUES ("Baconator",false);
INSERT INTO burgers (name, devoured) VALUES ("Whooper", false);
