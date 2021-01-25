var url = '';

function log(message)
{
	console.log(message);
}

module.exports.log = log;


// Code that was in App.js
// //Importing functions from a different file
// const logger = require('./logger')

// logger.log('Hey Bitch')

// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// const os = require('os');

// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`free Memory: ${freeMemory}`);

// const fs = require('fs');

// // Async file read
// fs.readdir('./', function(err, files)
// {
// 	if(err) console.log('Error', err);
// 	else console.log('Result', files);
// })