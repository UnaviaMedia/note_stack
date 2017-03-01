# NoteStack
NoteStack is an extremely simple web app developed as a code-along to learn a custom JavaScript stack.

## Stack
The stack involved is a mix of technologies, including the following:

- NodeJS
- ExpressJS
- React
- SASS
- Bootstrap 4

## Install
Download or clone the repository after configuring the server setup

## Configuration

```bash
# NodeJS

# Install nodejs and build tools
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt install -y nodejs
sudo apt install -y build-essentials

# NPM

# Create package.json file and enter information when prompted
#	To install all dependencies, run `npm install` from `app` directory
npm init

# Add following line to .bashrc and then source file
export PATH="./node_modules/.bin:$PATH"
source ~/.bashrc

# Express

npm install --save express

# Webpack

npm install --save-dev webpack
npm install --save-dev webpack-dev-middleware
#npm install --save-dev webpack-hot-middleware
npm install --save-dev concurrently

# Babel
npm install --save-dev babel-core			# Core library
npm install --save-dev babel-cli			# Command line interface
npm install --save-dev babel-loader			# Webpack plugin
npm install --save-dev babel-register		# Automatic compilation hook
npm install --save-dev babel-preset-es2015	# Babel preset for ES6
npm install --save-dev babel-preset-stage-0
npm install --save-dev babel-preset-react	# Babel preset for React

# React
npm install --save react
npm install --save react-dom
npm install --save redux

```
