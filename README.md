# Google Book Search API

## Installation

#Node.Js

Install Node.js from here: https://nodejs.org/en/

#Yarn Package Manager

Install Yarn from here: https://yarnpkg.com/lang/en/docs/install/#windows-stable

#Jest

Install Jest using yarn:

```bash
yarn add --dev jest
```
#Git

Install Git from here: https://git-scm.com/

#Heroku Command Line Interface

Install Heroku from here: https://devcenter.heroku.com/articles/heroku-cli

## Usage

#Cloning the existing app

```bash
git clone https://github.com/Pol-S/google-book-search
```

#Create an app on Heroku

This will be needed to prepare Heroku to receive the source code.

```bash
heroku create
```

#To deploy the code.

```bash
git push heroku master
```

#To run the app while it is hosted by Heroku

```bash
heroku open
```

#To run the app from your local directory

```bash
npm install
heroku local web
```
Open http://localhost:5000 with your web browser.

Ctrl + C in Heroku CLI to exit

#To push local changes to the repository

```bash
git add .
git commit
git push heroku master
heroku open
```
