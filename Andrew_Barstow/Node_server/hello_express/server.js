// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
const axios = require('axios');

// invoke express and store the result in the variable app
var app = express();
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;

app.use(session({
	secret: 'fusiondance',
	resave: false,
	saveUninitialized: true,
	cookie: {maxAge: 60000}
}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '\\static'));

app.set('views', __dirname + '\\views');
app.set('view engine', 'ejs');

io.on('connection', function(socket) {
	socket.emit('')
});

// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
  	if (!request.session.count) {
  		request.session.count = 1;
  	} else {
  		request.session.count ++;
  	}
   	response.render('main', {count: request.session.count});
})

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
});

app.get('/cars/new', function(request, response) {
        response.render('new_car');
});

app.post('/submit_car', function(request, response) {
	response.redirect(`/cars/submit/${request.body.make}/${request.body.model}/${request.body.description}`);
})

app.get('/cars/submit/:make/:model/:description', function(request, response) {
	context = {};
	context.make = request.params.make;
	context.model = request.params.model;
	context.description = request.params.description;
	response.render('car_submit', context);
});

app.get('/cars', function(request, response) {
	response.render('cars');
});

app.get('/cats', function(request, response) {
	response.render('cats');
});

app.get('/cats/:catid', function(request, response) {
	context = {};
	if (request.params['catid'] == 'majesty') {
		context['favorite_food'] = 'suckerplooms';
		context['age'] = 2;
		context['sleeping_spots'] = ['on the couch', 'with other ppl'];
		context['name'] = 'majesty';
	}

	if (request.params['catid'] == 'sleepyface') {
		context['favorite_food'] = 'pizza';
		context['age'] = 6;
		context['sleeping_spots'] = 'everywhere';
		context['name'] = 'sleepyface';
	}

	response.render('view_cat', context)
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
/*app.listen(8000, function() {
  console.log("listening on port 8000");
})*/