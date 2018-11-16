var Author = require('../models/author');

module.exports = {
  authors: function(req, res){
    console.log("in the authors function")
    Author.find({}, function(err,authors){
      res.json({err: err, authors: authors});
    });
  },

  new: function(req, res){
    console.log(req.body);
    var author = new Author({name: req.body.name});
    author.save(function(err, author) {
      res.json({err: err, author: author});
    });
  },
  one_author: function(req, res){
    Author.findOne({_id: req.params.id}, function(err,author){
      res.json({err: err, author: author});
    });
  },
  author_update_id: function(req, res){
    Author.update({_id: req.params.id}, {name: req.body.name}, { runValidators: true }, function(err,author){
      res.json({err: err, author: author});
    });
  },

  delete_author: function(req, res){
    Author.findByIdAndRemove(req.params.id,function(err,author){
      res.json({err: err, author: author});
    });
  }
}