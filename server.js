var express = require('express');
var app = express();
var port = 8080;

// route our app
// var router = require('./app/routes');
// app.use('/', router);



// use ejs and express layouts

// set static files location

// start the server


app.listen(port, function () {
    console.log('app started');
});

app.get('/', function (req, res) {
    res.send('hello again');
});

// var express = require('express');
// var expressLayouts = require('express-ejs-layouts');
// var app = express();
// var port = 8080;

// // route our app
// var router = require ('./app/routes');
// app.use('/', router);

// // use ejs and express layouts
// app.set('view engine', 'ejs');
// app.use(expressLayouts);

// // set static files (css and images, etc) location
// app.use(express.static(__dirname + '/assets'));

// //start the server
// app.listen(port, function () {
//     console.log('app started');
// });