const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const fs = require('fs');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/Develop/public'));


// Update the home route to return `index.html`
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
   
   });


//Button Notes 
app.get('/notes', (req, res) =>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
})

//write a new function
app.post('/api/notes', (req, res) =>{
   
    const note= req.body;
    fs.readFile('db.json', function (err, data){
        var json = JSON.parse(data);
        json.push(note);
        
    fs.writeFile(db.json, JSON.stringify(json))
    return res.json(note);
    })
})

app.get('/api/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, './Develop/db/db.json'));
})




// Listener
// =============================================================
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });


// THEN I am presented with a landing page with a link to a notes page
// WHEN I click on the link to the notes page
// THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
// WHEN I enter a new note title and the note’s text
// THEN a Save icon appears in the navigation at the top of the page
// WHEN I click on the Save icon
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column
// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column