const express = require('express');
const app = express();
const path = require('path');


app.get( '/', (req,res) => {

    res.sendFile(path.join(__dirname + './index.html'));

});

app.get( '/notes', (req,res) => {

    res.sendFile(path.join(__dirname + './notes.html'));

});





//PORT 
const port = process.env.PORT || 3000;

app.listen(port, ()=> {

    console.log( 'API server now now on port 3001' );

})