const express = require('express');
const path = require('path');
const notes = require('./db/db.json');
// Helper method for generating unique ids
//const uuid = require('./helpers/uuid');
//const reviews = require('./db/reviews');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, '/public/notes.html'))
//res.json(notes)
);

app.listen(PORT, () => {
    console.log(`Note Taking app listening at http://localhost:${PORT}`);
  });
  