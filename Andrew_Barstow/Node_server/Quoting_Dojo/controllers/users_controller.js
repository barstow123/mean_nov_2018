var User = require('../models/user');
var Quote = require('../models/quote');

module.exports = {

  home: function(req, res){
    quotes = Quote.find({}, function(err, quotes) {
      if (err) {
        res.redirect('/')
      }
      else {
        res.render('index', {all_quotes: quotes});
      }
    });
  },

  users: function(req, res) {
    var quote = new Quote({first_name: req.body.name, quote: req.body.quote});
    quote.save(function(err){
        if(err){
            console.log("We have an error!", err);
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        }
        else {
            res.redirect('/');
        }
    });
  }
}