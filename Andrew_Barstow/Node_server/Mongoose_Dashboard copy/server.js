var express    = require('express'),
    app        = express(),
    path       = require('path'),
    bodyParser = require('body-parser'),
    mongoose   = require('./config/mongoose'),
    flash      = require('express-flash'),
    session    = require('express-session'),
    port       = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(flash());
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 }
}))
app.set(path.join('views', __dirname, 'views'));
app.set('view engine', 'ejs');
require('./config/routes.js')(app);

app.listen(port, function() {
    console.log(`listening on port ${port}`);
})
