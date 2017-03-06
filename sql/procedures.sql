-- File:    sql/procedures.sql
-- Purpose: Created stored procedures for data access

USE NoteStack;

DELIMITER $$

DROP PROCEDURE IF EXISTS sp_GetNote$$

/**
 * Get a single note
 * @param TINYINT	p_id	ID of the note to get
 */
CREATE PROCEDURE sp_GetNote(IN p_id TINYINT)
BEGIN
	SELECT id, title, content, dateCreated, dateModified
	FROM Note
	WHERE id = p_id
	LIMIT 1;
END$$


DROP PROCEDURE IF EXISTS sp_GetNotes$$

/**
 * Get a list of notes with optional queries
 * @param INT		p_limit		Amount of notes
 * @param INT		p_offset	Starting point
 * @param VARCHAR	p_order		Sorting order
 */
CREATE PROCEDURE sp_GetNotes(IN p_limit INT, IN p_offset INT, IN p_order VARCHAR(5))
BEGIN
	-- A limit of 0 should be no limit, and also disables offset
	IF p_limit = 0 THEN
		-- No specified offset should use the current row count (avoids actually limiting anything)
		SELECT COUNT(*) INTO p_limit FROM Note;
		SET p_offset = 0;
	END IF;

	SELECT id, title, content, dateCreated, dateModified
	FROM Note
	ORDER BY
    	(CASE WHEN p_order = 'asc' THEN dateCreated END) ASC,
    	dateCreated DESC
	LIMIT p_offset, p_limit;
END$$


DROP PROCEDURE IF EXISTS sp_CreateNote$$

/**
 * Create a note
 * @param VARCHAR	p_title		Note title
 * @param TEXT		p_content	Note content
 */
CREATE PROCEDURE sp_CreateNote(IN p_title VARCHAR(50), IN p_content TEXT)
BEGIN
	INSERT INTO Note(title, content)
	VALUES(p_title, p_content);
END$$


DROP PROCEDURE IF EXISTS sp_UpdateNote$$

/**
 * Update a note
 * @param INT		p_id		Note ID to update
 * @param VARCHAR	p_title		Note title
 * @param TEXT		p_content	Note content
 */
CREATE PROCEDURE sp_UpdateNote(IN p_id INT, IN p_title VARCHAR(50), IN p_content TEXT)
BEGIN
	UPDATE Note
	SET title = p_title, content = p_content
	WHERE id = p_id;
END$$


DROP PROCEDURE IF EXISTS sp_DeleteNote$$

/**
 * Delete a note
 * @param TINYINT	p_id	ID of the note to delete
 */
CREATE PROCEDURE sp_DeleteNote(IN p_id TINYINT)
BEGIN
    DELETE FROM Note
    WHERE id = p_id;
END$$

DELIMITER ;
