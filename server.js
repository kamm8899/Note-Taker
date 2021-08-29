const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');


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
    fs.readFile(path.join(__dirname,'./Develop/db/db.json'),'utf-8', function (err, data){
        var json = JSON.parse(data);
        note.id= uniqid();
        json.push(note);
    fs.writeFile(path.join(__dirname,'./Develop/db/db.json'), JSON.stringify(json),function (err,data){
        console.log("message");
        res.json(note);

    })
    
    
    })
})

app.get('/api/notes', (req, res) =>{
    fs.readFile(path.join(__dirname,'./Develop/db/db.json'),'utf-8', function (err, data){
        var json = JSON.parse(data);
        res.json(json);
    
})
})
// app.get('/api/notes', (req,res) =>{
//     res.sendFile(path.join(savedNotes));





// Listener
// =============================================================
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
