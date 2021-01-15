# NoteStack

NoteStack is an extremely simple web app developed as a code-along to learn a custom JavaScript stack. It is capable of performing CRUD operations against a database to retrieve and update Notes, as well as simply query actions/limits when retrieving the list of notes. The app focuses around a React front-end, Redux state management, and a Node/MySQL API.

> **NOTE:** This project was developed as part of my initial foray into the React and Node environments, and has served its purpose (_hasn't been updated in years_). While I prefer Vue to React, I still enjoy working with React; however, current technology stacks usually revolve around an SPA with a Docker setup if needed.

~~**NOTE:** Development/fixing has temporarily been halted while taking a course on ES6 and React/Redux development~~

~~**NOTE:** Development/fixing has been suspended semi-permanently while taking more to time to examine the fundamentals of React/Redux and the surrounding environment. While the project is not complete, and is currently missing a working build/production phase, I am shifting my focus to a simple app that will advance at a slower pace, adding technologies as necessary rather than diving headfirst into all of them at once (overexaggerated, but somewhat true).~~

## Stack
The stack involved is a mix of technologies, including the following:

| Name                  | Description           |
|-----------------------|-----------------------|
| **NodeJS**            | Lightweight JavaScript server
| **Express**           | Simple JS web server framework
| **React**             | Clientside components and View-management
| **Redux**             | Single source of stage management for React components
| **MySQL**             | Relational database for persisting Notes
| **Webpack**           | Bundles and processes client code
| **Babel**             | ES2015 (EcmaScript6) transpiler
| **SASS**              | CSS pre-processor
|                       |
| **Git**               | Source control management for code
| **Postman**           | Used to send HTTP requests to test the API
| **Redux** Debug Tools | Enables viewing the state and history of Redux
| **Foundation** 6      | Small helper utilities (such as modals)

## Helpful Docs
- [Node.js MySQL GitHub](https://github.com/mysqljs/mysql)
- [Express Docs](https://expressjs.com)
- [React Docs](https://facebook.github.io/react/docs/hello-world.html)
- [Redux Docs](http://redux.js.org/)

## Installation
Download or clone the repository after configuring the server setup and extract (ie. in home directory). Note, it currently has a lot of debuggin features still enabled, both for ease of development as well as enabling following the flow of events/actions. For example, the project still uses Webpacks dev middleware, so it needs to be run with `npm run start` which starts the webpack build and loads it internally.
- Developed on Ubuntu 16.04.

```bash
# MySQL
sudo apt install -y mysql-server
sudo mysql_secure_installation

# NodeJS
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt install -y nodejs build-essential

# Either clone repository or download zipped file to a directory (/home/[USER_NAME]/ works)
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

## Remaining Steps
Since most of the technologies listed above were new to me, I did have a steep learning curve when trying to integrate them together (especially Webpack). However, I enjoyed most of the challenges that it brought and look forward to working with them again. Here's a list of the things that stick out to me that should be addressed yet:

- [x] **Fix Note card time display issue**
- [x] **Prop Types**
  - Add React PropTypes and PropDefault declarations to components
- [ ] **Error Handling**
  - Due to time constraints I didn't put much focus on error handling (other than the API). However, the Redux async actions don't take the possible errors in to account (implementation will take a bit but is a good idea).
- [ ] **Refactoring Dispatch Actions**
  - I got partway through developing the Redux async actions and realized that my current implementation of `dispatch` methods should change to reflect the async nature and possibility of errors. For example, there are several places where I send off a `dispatch` method to the Redux async actions (for API consumption) and then immediately update the state of the editor. This should instead be done after the async call has completed (as this will allow the handling of errors/warnings), rather than dispatching several other actions right away assuming the call will complete.
- [ ] **Webpack Production Build**
  - I didn't focus on configuring Webpack for a production build but this is something that should be done as well to put a final polish on the packaging cycle.
- [ ] **Tests**
  - While learning Redux I used an assertion package to check the immutability of the state, but didn't transfer this to the project for lack of time. However, test driven development is an interesting concept that I'd like to focus on more.
