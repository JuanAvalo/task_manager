/*
    This script creates the DB and all the tables needed
    including keys and relationships.
*/

CREATE DATABASE crudproject;

USE crudproject;

CREATE TABLE IF NOT EXISTS user (
    idUser INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    username VARCHAR(30),
    password VARCHAR(64),
    PRIMARY KEY (idUser)
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS quote (
    idQuote INT NOT NULL AUTO_INCREMENT,
    idUser INT,
    date DATE,
    text VARCHAR(255),
    author VARCHAR(255),
    PRIMARY KEY (idQuote),
    FOREIGN KEY (idUser) REFERENCES user(idUser)
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS task (
    idTask INT NOT NULL AUTO_INCREMENT,
    idUser INT,
    date DATE,
    state TINYINT,
    content VARCHAR(255),
    PRIMARY KEY (idTask),
    FOREIGN KEY (idUser) REFERENCES user(idUser)
)ENGINE = InnoDB;