// central hub to pull them all together 
const express = require('express');
// creates new router object 
const router = express.Router();

// middlewear that is being used by a the candidateRoutes
// importing candidateRoutes
router.use(require('./candidateRoutes'));

// importing partyRoutes
router.use(require('./partyRoutes'));

// allows the export to different 
module.exports = router; 