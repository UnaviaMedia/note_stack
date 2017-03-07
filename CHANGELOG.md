# Changelog

**February 27, 2017**
- Created Vagrant environment with Ubuntu VM
- Set up Git repository and GitHub endpoint
- Added NodeJS
- Added NPM
- Added WebPack

**Febuary 28, 2017**
- Stopped using Vagrant
- Configured Webpack and Express to use dev-middleware
- Watch tutorial on React and started experimenting
- Read React book while starting to code components
	- Intend to learn Redux later to replace state

**March 01, 2017**
- Added sample API call from component
- Restructured files
  - [Intro to JS ES6 Modules](https://strongloop.com/strongblog/an-introduction-to-javascript-es6-modules/) for JavaScript ES6 modules
- Added MySQL and database files
- Worked through issues on dev machine with mysql
- Added Node and Express API
  - CRUD operations and advanced querying

**March 02, 2017**
- Configured C9 to act as a cloud editor
- Add initial database connection
- Modularized API routing by adding DAL and abstracting to it
- Created a global require function (based on node_modules/ folder)

**March 03, 2017**
- Added Promises to DAL functions and consume them in API endpoints
- Added ApiResponse object to standardize the API responses
- Standardized endpoint responses
- Added Stored Procedures to replace SQL string queries and updated callers
- Configured Webpack to support SCSS processing and extracting (forming a separate file from includes)
  - [Setup Webpack with SASS](https://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html)
  - [Webpack - Migrating from v1 to v2](https://webpack.js.org/guides/migrating/) helped to understand and upgrade previous guide
  - [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) for GitHub documentation
- Added basic styling to app
- Modularized SCSS files and updated components to match

**March 04, 2017**
- Additional webpack configuration for SCSS sourcemaps
- Added Foundation Sites SCSS
- Learned about Redux from an Egghead.io course and following along in CodePen
- Added filter to Sidebar and filter functionality

**March 05, 2017**
- Add Foundation Sites JS
- Created modal and additional styles for it
- Added functionality and Redux state persistance to Settings menu using redux-form
- Utilized redux-form to add Adding/Editing functionality to the Editor

**March 06, 2017**
- Cleaned up and refactored codebase
  - Restructured styles
  - Refactored actions
- Integrated API into Redux state management
  - Relied on Redux UI filter state when sending the query
  - CRUD operations and persistance from the front-end to the API/database
- Completely overhauled Reducers and Actions with thunk principles
