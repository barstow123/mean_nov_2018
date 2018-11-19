var express    = require('express'),
    app        = express(),
    path       = require('path'),
    bodyParser = require('body-parser'),
    session    = require('express-session'),
    port       = 8000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 }
}))

app.listen(port, function() {
    console.log(`listening on port ${port}`);
})
