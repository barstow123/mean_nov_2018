var express    = require('express'),
    app        = express(),
    path       = require('path'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    flash = require('express-flash'),
    mongoose   = require('./config/mongoose'),
    port       = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
    secret: 'keepitsecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
  }))
app.use(flash());
app.use(express.static( __dirname + '/public/dist/public' ));

require('./config/routes.js')(app);


app.listen(port, function() {
    console.log(`listening on port ${port}`);
})