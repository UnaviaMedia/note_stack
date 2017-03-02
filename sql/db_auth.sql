-- This script must be run as the root/admin user and will create the following for this project:
--	-- Database
--	-- User

CREATE DATABASE IF NOT EXISTS NoteStack;

-- Create admin user for DB operations
CREATE USER 'ns_admin'@'localhost' IDENTIFIED BY 'Passw0rD';
GRANT ALL PRIVILEGES ON NoteStack.* TO 'ns_admin'@'localhost';

-- Create API user for CRUD operations only
CREATE USER 'ns_api'@'localhost' IDENTIFIED BY 'Passw0rD';
GRANT SELECT, INSERT, DELETE, UPDATE ON NoteStack.* TO 'ns_api'@'localhost';

FLUSH PRIVILEGES;
