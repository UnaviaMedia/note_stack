-- File:    sql/db_auth.sql
-- Purpose: Create an API user and give them permissions to the appropriate stored procedures

USE NoteStack;

-- Grant harmless privilege (to create user if it doesn't exist) and then delete
--  http://stackoverflow.com/questions/3049929/checking-if-mysql-user-exists
GRANT USAGE ON *.* TO 'ns_api'@'localhost';
DROP USER 'ns_api'@'localhost';

-- Create API user for CRUD operations only
CREATE USER 'ns_api'@'localhost' IDENTIFIED BY 'Passw0rD';
GRANT SELECT, INSERT, DELETE, UPDATE, EXECUTE ON NoteStack.* TO 'ns_api'@'localhost';

-- Grant stored procedure execution
GRANT EXECUTE ON PROCEDURE NoteStack.sp_GetNote TO 'ns_api'@'localhost';
GRANT EXECUTE ON PROCEDURE NoteStack.sp_GetNotes TO 'ns_api'@'localhost';
GRANT EXECUTE ON PROCEDURE NoteStack.sp_CreateNote TO 'ns_api'@'localhost';
GRANT EXECUTE ON PROCEDURE NoteStack.sp_UpdateNote TO 'ns_api'@'localhost';
GRANT EXECUTE ON PROCEDURE NoteStack.sp_DeleteNote TO 'ns_api'@'localhost';

FLUSH PRIVILEGES;
