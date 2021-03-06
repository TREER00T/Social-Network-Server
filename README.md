# Social-Network-Server

## Table of Contents

- [Install](#install)
- [Introduction](#introduction)
- [Configuration](#configuration)
- [License](#license)

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/). Node.js 0.6 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

Now download and extract project
[Direct link](https://github.com/TREER00T/Social-Network-Server/archive/refs/heads/main.zip)

## Introduction

A simple social network with socket.io and rest api

## Configuration

You need to make small changes to the program to run the program. A list of all the files that need to be changed.

|File                                |Line               | 
|:---------------------------------- |-------------------|
|app/database/DatabaseInterface.js   | 13                |
|app/middleware/RouterInterface.js   | 73                |
|app/middleware/DatabaseConnection.js| 10, 11, 12, 13    |
|app/io/connect/socket.js            | 28                |
| app/util/File.js                   | 42                | 
| app/util/Generate.js               | 27, 33, 48        |
| app/util/Validation.js             | 58, 83            |


After making the changes, open cmd and run the following commands.


```shell
node .\cmd.js db
```

TIP : Before running this command, make sure that your database and server are on.


```shell
npm start
```


## Licensing

The code in this project is licensed under the [Apache License](https://github.com/TREER00T/Social-Network-Server/blob/main/LICENSE)
