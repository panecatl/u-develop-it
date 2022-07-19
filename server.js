const express = require('express');
const res = require('express/lib/response');
//createing server 
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());




// Default reposnse for any other request (Not found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server runnning on port ${PORT}`);
});