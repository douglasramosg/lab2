const express = require('express');
const path = require('path');


//initialization
const app = express();


//configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));



//middlewares
app.use(express.urlencoded({extensions: false}));


//global variables


//routes
app.get('/', (req, res) => {
    res.send('Proyecto completo')
})


//static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;