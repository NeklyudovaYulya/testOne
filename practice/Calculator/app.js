const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');
const chalk = require('chalk');

var app = express();

/**
 * Configuration
 */
app.set('public', path.join(__dirname, 'public') );
app.set('host', '0.0.0.0');
app.set('port', 3000);

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(3000, () =>{
    console.log(
        "%s App is running at http://localhost:%d in %s mode",
        chalk.green('✓'),
        app.get('port'),
        app.get('error')
    );
    console.log('Press CTRL-C to stop\n');
});

console.log("Started");



