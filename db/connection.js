// importing sql modules
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'ringomillie',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// allows me to export this file and connect it another file using
// const db = require('./db/connection');
module.exports= db;