# NoteStack
NoteStack is an extremely simple web app developed as a code-along to learn a custom JavaScript stack.

## Stack
The stack involved is a mix of technologies, including the following:

- NodeJS
- ExpressJS
- React
- Redux
- MySQL
- SASS

## Helpful Docs
- [Node.js MySQL GitHub](https://github.com/mysqljs/mysql)
- [Express Docs](https://expressjs.com)

## Install
Download or clone the repository after configuring the server setup

```bash
# MySQL
sudo apt install -y mysql-server
sudo mysql_secure_installation

# Create database
mysql -u root -p -e "DROP DATABASE IF EXISTS NoteStack;"
mysql -u root -p < sql/tables.sql
mysql -u root -p < sql/load_data.sql
mysql -u root -p < sql/procedures.sql
mysql -u root -p < sql/db_auth.sql

# NodeJS
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt install -y nodejs build-essentials

cd {{project_directory}}

# NPM
npm install

# Add following line to .bashrc and then source file, adds node_modules to $PATH
export PATH="./node_modules/.bin:$PATH"
source ~/.bashrc

# Start server and build webpack
npm run start
```

## Descriptions
- NodeJS
	- Lightweight server
- Express
	- Simple web server framework
- MySql
	- Relational database
- Body-parser
	- Parses request bodies
- Webpack
	- Bundles and processes client code
- React
	- Clientside components and View-management
- Redux
	- Single source of stage management for React components
- Git
	- Source control management for code
- Babel
	- ES2015 (EcmaScript6) transpiler
