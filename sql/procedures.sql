USE NoteStack;

DELIMITER $$

/**
 * Get a single note
 * @param	p_id	ID of the note to get
 */
DROP PROCEDURE IF EXISTS sp_GetNote$$

CREATE PROCEDURE sp_GetNote(IN p_id TINYINT)
BEGIN
	SELECT id, title, content, dateCreated, dateModified
	FROM Note
	WHERE id = p_id
	LIMIT 1;
END$$


/**
 * Get a list of notes with optional queries
 * @param	p_limit		Amount of notes
 * @param	p_offset	Starting point
 * @param	p_order		Sorting order
 */
DROP PROCEDURE IF EXISTS sp_GetNotes$$

CREATE PROCEDURE sp_GetNotes(IN p_limit INT, IN p_offset INT, IN p_order VARCHAR(5))
BEGIN
	-- A limit of 0 should be no limit, and also disables offset
	IF p_limit = 0 THEN
		SET p_limit = 18446744073709551615;
		SET p_offset = 0;
	END IF;
	
	SELECT id, title, content, dateCreated, dateModified
	FROM Note
	ORDER BY
    	(CASE WHEN p_order = 'asc' THEN dateCreated END) ASC,
    	dateCreated DESC
	LIMIT p_offset, p_limit;
END$$


/**
 * Create a note
 * @param	p_id		ID of the note to created
 * @param	p_title		Note title
 * @param	p_content	Note content
 */
DROP PROCEDURE IF EXISTS sp_CreateNote$$

CREATE PROCEDURE sp_CreateNote(IN p_title VARCHAR(50), IN p_content TEXT)
BEGIN
	INSERT INTO Note(title, content)
	VALUES(p_title, p_content);
END$$


/**
 * Update a note
 * @param	p_id		ID of the note to update
 * @param	p_title		Updated note title
 * @param	p_content	Updated note content
 */
DROP PROCEDURE IF EXISTS sp_UpdateNote$$

CREATE PROCEDURE sp_UpdateNote(IN p_id INT, IN p_title VARCHAR(50), IN p_content TEXT)
BEGIN
	UPDATE Note
	SET title = p_title, content = p_content
	WHERE id = p_id;
END$$

/**
 * Delete a note
 * @param	p_id	ID of the note to delete
 */
DROP PROCEDURE IF EXISTS sp_DeleteNote$$

CREATE PROCEDURE sp_DeleteNote(IN p_id TINYINT)
BEGIN
    DELETE FROM Note
    WHERE id = p_id;
END$$

DELIMITER ;


-- Grant permissions for API user
GRANT EXECUTE ON NoteStack.* TO 'ns_api'@'localhost';
FLUSH PRIVILEGES;