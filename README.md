# NoteStack
NoteStack is an extremely simple web app developed as a code-along to learn a custom JavaScript stack.

## Stack
The stack involved is a mix of technologies, including the following:

- NodeJS
- ExpressJS
- React
- MySQL
- SASS

## Helpful Docs
- [Node.js MySQL GitHub](https://github.com/mysqljs/mysql)
- [Express Docs](https://expressjs.com)

## Install
Download or clone the repository after configuring the server setup

## Configuration

```bash
# MySQL
sudo apt install -y mysql-server


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

# Install npm packages from project root
npm install
```
