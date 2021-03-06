#!/usr/bin/env node
require('app-module-path').addPath(__dirname);
const {
        program
    } = require('commander'),
    Database = require('app/database/DatabaseInterface');


program
    .command('db')
    .description('Create database and tables')
    .action(() => {
        Database.initialization();
        let isFinished = Database.create();
        if (isFinished)
            console.log('Created.');
    })
    .parse();