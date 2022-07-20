const express = require('express');
// importing connection.js
const db = require('./db/connection');
// routes folder is in the routes/apiRoutes folders
const apiRoutes = require('./routes/apiRoutes')

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// using apiRoutes folder and files inside
// /api prefix can remove it from individual route expressions
app.use('/api', apiRoutes);

// Default reposnse for any other request (Not found) or catchall route
app.use((req, res) => {
    res.status(404).end();
});

// start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});