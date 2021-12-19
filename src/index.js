const app = require('./server');

app.listen(app.get('port', () => {
    console.log('servidor en puerto', app.get('port'))
}));
