
const express = require('express');
const app = express();

const rutas = require('./routes/routes');
const mongoose = require('mongoose');
const path = require('path'); 


 
//add the rutas

app.listen(process.env.port || 3000);
const mongoUrl ='mongodb+srv://santiagozamora:t1lzKFlksVGZA29p@cluster0.n25ofyg.mongodb.net/todos?retryWrites=true&w=majority';

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/main.js'));
    res.sendFile(path.join(__dirname, '/query.js'));
    res.sendFile(path.join(__dirname, '/styles.css'));
    res.sendFile(path.join(__dirname, '/index.html'));

  });

mongoose.connect(mongoUrl).then(() => {

    console.log('app is running...');

}).catch(err => {
    console.log('No se pudo conectar a la base de datos', err);
}) 
console.log('Running at Port 3000');


