var express = require('express'),
	app = express(),
	 mongoose = require('./config/mongoose'),
	bodyParser = require('body-parser'),
	 flash = require('express-flash'),
	session = require('express-session'),
	path = require('path');
	port = 8000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
require('./config/routes.js')(app);

app.use(session({
	secret: 'fusiondance',
	resave: false,
	saveUninitialized: true,
	cookie: {maxAge: 60000}
}))
app.use(flash());
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
// mongoose.connect('mongodb://localhost/basic_mongoose');
// var UserSchema = new mongoose.Schema({
//  name: String,
//  age: Number
// })
// mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
// var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
// // Use native promises
// mongoose.Promise = global.Promise;
// // Routes
// // Root Request
// app.get('/', function(req, res) {
//   var users = User.find({}, function(err, users) {
//     // This is the method that finds all of the users from the database
//     // Notice how the first parameter is the options for what to find and the second is the
//     //   callback function that has an error (if any) and all of the users
//     // Keep in mind that everything you want to do AFTER you get the users from the database must
//     //   happen inside of this callback for it to be synchronous 
//     // Make sure you handle the case when there is an error, as well as the case when there is no error
//     res.render('index', {users:users});
//   })
// })
// // Add User Request 
// app.post('/users', function (req, res){
//     var user = new User(req.body);
//     user.save(function(err){
//         if(err){
//             // if there is an error upon saving, use console.log to see what is in the err object 
//             console.log("We have an error!", err);
//             // adjust the code below as needed to create a flash message with the tag and content you would like
//             for(var key in err.errors){
//                 req.flash('registration', err.errors[key].message);
//             }
//             // redirect the user to an appropriate route
//             res.redirect('/');
//         }
//         else {
//             res.redirect('/users');
//         }
//     });
// });
// Setting our Server to Listen on Port: 8000
app.listen(port, function() {
    console.log("listening on port 8000");
})