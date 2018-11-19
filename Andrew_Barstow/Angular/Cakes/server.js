var express    = require('express'),
    app        = express(),
    path       = require('path'),
    bodyParser = require('body-parser'),
    mongoose   = require('./server/config/mongoose'),
    port       = 8000;

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
require('./server/config/routes.js')(app);

app.listen(port, function() {
    console.log(`listening on port ${port}`);
})
