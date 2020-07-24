const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const chalk = require('chalk');

var app = express();

app.set('app', path.join(__dirname, 'app'));
app.set('host', '0.0.0.0');
app.set('port', 4545)

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'app')));

app.listen(app.get('port'), () => {
    console.log(
        "&s App",
        chalk.green("+"),
        app.get('port'),
        app.get('env')
    )
})