-- File:    sql/load_data.sql
-- Purpose: Load some sample data into the database

USE NoteStack;

-- Load some sample data
INSERT INTO Note (id, title, content, dateCreated)
VALUES ('38f5dad0-a85e-4371-af75-6d67f8c9d14c', 'Note 1', 'Text for Note 1', STR_TO_DATE('2017-03-01 14:39:32', '%Y-%m-%d %H:%i:%s'));

INSERT INTO Note (title, content, dateCreated)
VALUES ('40ed55ad-12ba-45dc-b174-a4c41de52880', 'Note 2', 'Text for Note 2', STR_TO_DATE('2017-03-02 12:24:59', '%Y-%m-%d %H:%i:%s'));

INSERT INTO Note (title, content, dateCreated)
VALUES ('fbe4164c-eac2-46fb-bcb6-1e3151d47887', 'Note 3', 'Text for Note 3', STR_TO_DATE('2017-03-03 09:01:49', '%Y-%m-%d %H:%i:%s'));
