# NoteStack
NoteStack is an extremely simple web app developed as a code-along to learn a custom JavaScript stack. It is capable of performing CRUD operations against a database to retrieve and update Notes, as well as simply query actions/limits when retrieving the list of notes. The app focuses around a React front-end, Redux state management, and a Node/MySQL API.

## Stack
The stack involved is a mix of technologies, including the following:

- NodeJS
  - Lightweight JavaScript server
- ExpressJS
  - Simple JS web server framework
- React
  - Clientside components and View-management
- Redux
  - Single source of stage management for React components
- MySQL
  - Relational database for persisting Notes
- Webpack
  - Bundles and processes client code
- Babel
  - ES2015 (EcmaScript6) transpiler
- SASS

### Helper Frameworks
The development cycle was greatly improved by the following frameworks and stand-alone apps:

- Git
  - Source control management for code
- Postman
  - Used to send HTTP requests to test the API
- Redux Debug Tools
  - Enables viewing the state and history of Redux
- Foundation 6
  - Small helper utilities (such as modals)

## Helpful Docs
- [Node.js MySQL GitHub](https://github.com/mysqljs/mysql)
- [Express Docs](https://expressjs.com)
- [React Docs](https://facebook.github.io/react/docs/hello-world.html)
- [Redux Docs](http://redux.js.org/)

## Installation
Download or clone the repository after configuring the server setup

```bash
# MySQL
sudo apt install -y mysql-server
sudo mysql_secure_installation

# NodeJS
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt install -y nodejs build-essentials

cd {{project_directory}}

# Create database
mysql -u root -p
mysql> DROP DATABASE IF EXISTS NoteStack;
mysql> source sql/tables.sql
mysql> source sql/procedures.sql
mysql> source sql/db_auth.sql
# Optional step to generate some data (used primarily for testing/development)
mysql -u root -p < sql/load_data.sql

# NPM
npm install

# Add following line to .bashrc and then source file, adds node_modules to $PATH
export PATH="./node_modules/.bin:$PATH"
source ~/.bashrc

# Start server and build webpack
npm run start
```
