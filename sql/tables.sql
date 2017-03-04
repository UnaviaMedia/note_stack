-- This script must be run as the root/admin user and will create the database tables

CREATE DATABASE IF NOT EXISTS NoteStack;
USE NoteStack;

CREATE TABLE Note (
	id				INT			PRIMARY KEY AUTO_INCREMENT,
	title			VARCHAR(50) NOT NULL,
	content			VARCHAR(50) NOT NULL,
	dateCreated		DATETIME	NOT NULL DEFAULT CURRENT_TIMESTAMP,
	dateModified	DATETIME	NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
