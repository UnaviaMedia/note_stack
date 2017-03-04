USE NoteStack;

-- Load some sample data
INSERT INTO Note (title, content, dateCreated)
VALUES ('Note 1', 'Text for Note 1', STR_TO_DATE('2017-03-01 14:39:32', '%Y-%m-%d %H:%i:%s'));

INSERT INTO Note (title, content, dateCreated)
VALUES ('Note 2', 'Text for Note 2', STR_TO_DATE('2017-03-02 12:24:59', '%Y-%m-%d %H:%i:%s'));

INSERT INTO Note (title, content, dateCreated)
VALUES ('Note 3', 'Text for Note 3', STR_TO_DATE('2017-03-03 09:01:49', '%Y-%m-%d %H:%i:%s'));
