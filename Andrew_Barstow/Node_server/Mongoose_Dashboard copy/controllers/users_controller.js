var Platypodes = require('../models/platypus');
var mongoose = require('mongoose');

module.exports = {
  create_platypus: function(req, res){
    console.log("POST DATA", req.body);
    var platypus = new Platypodes({name: req.body.name, age: req.body.age});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    platypus.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        // for(var key in err.errors){
        //         req.flash('registration', err.errors[key].message);
        // }
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a platypus!');
        console.log(platypus.name,",",platypus.age);
        }
      res.redirect('/');
    });
  },
  display: function(req, res){
    Platypodes.find({}, function(err, platypodes) {
      res.render('display', {platypodes: platypodes});
    });

  },
  profile: function(req,res){
    Platypodes.find({_id: req.params.id}, function(err, platypus){
      res.render('profile', {platypus: platypus});
    });
  },
  new: function(req,res) {
	  res.render('new_platypus');
  },
  edit: function(req,res) {
    Platypodes.find({_id: req.params.id}, function(err, platypus) {
      res.render('edit', {platypus: platypus});
    })
  },
	update_platypus: function (req, res) {
		Platypodes.findByIdAndUpdate(req.params.id, {
			$set: {
				name: req.body.name,
				age: req.body.age
			}
		}, {new: true}, function (err, platypus) {
			if (err) {
				console.log(req.params.id);
				console.log(err.message);
			} else {
				console.log(platypus);
			}
			res.redirect('/');
		});
	},
	destroy: function (req, res) {
		Platypodes.deleteOne({_id: req.params.id}, function (err) {
			if (err) {
				console.log(err.message);
			} else {
				console.log(req.params.id);
			}
			res.redirect('/');
		});
	}
}