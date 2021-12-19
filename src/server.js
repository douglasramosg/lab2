const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');




//initialization
const app = express();


//configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
})
);
app.set("views engine", ".hbs");

//middlewares
app.use(express.urlencoded({extensions: false}));



//global variables


//routes
app.get('/', (req, res) => {
    res.send('Proyecto completo')
});


//static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;