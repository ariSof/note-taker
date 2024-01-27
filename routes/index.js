const router = require('express').Router();

// Import our modular routers /notes
const notesRouter = require('./notes');

//Initialize /notes route
router.use('/notes', notesRouter);


module.exports = router;
