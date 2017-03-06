-- File:	sql/tables.sql
-- Purpose:	Create the database and tables

-- NOTE: This script must be run as the root/admin user and will create the database tables

CREATE DATABASE IF NOT EXISTS NoteStack;
USE NoteStack;

CREATE TABLE Note (
	id				VARCHAR(50)	PRIMARY KEY,
	title			VARCHAR(50) NOT NULL,
	content			VARCHAR(50) NOT NULL,
	dateCreated		DATETIME	NOT NULL DEFAULT CURRENT_TIMESTAMP,
	dateModified	DATETIME	NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
