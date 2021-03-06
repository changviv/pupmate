DROP DATABASE IF EXISTS puppers_db;

CREATE DATABASE puppers_db;

USE puppers_db;

CREATE TABLE puppers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    breed VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    size VARCHAR(2) NOT NULL,
    gender VARCHAR(1) NOT NULL,
    neutered BOOLEAN DEFAULT true,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    photo VARCHAR(255) 
);
