var Cake = require('../models/cake');
var Rating = require('../models/rating');

module.exports = {

  //Get all task
  index: function(req, res){
    Cake.find({})
    .populate("ratings")
    .sort("-createdAt")
    .exec(function(err, cakes){
      if(err){
        console.log("We got an error finding the cake", err);
        return res.json({error: err})
      }
      return res.json({message: "Success", cakes: cakes})
    })
  },

  create_cake: function(req, res) {
    // console.log("Creating cakie", req.body);
    cake = new Cake({name: req.body.name, imageURL: req.body.imageURL});
    cake.save(function(err) {
      if (err) {
        console.log('Failed to save cake into database', err);
        res.json({message: "FAIL"})
       } else {
        res.json({message: "Success", cakes: cake});
       }
     })
    },


  create_rating: function(req, res){
    console.log("Creating ratings for cakie", req.body);
    rating = new Rating({stars: req.body.stars, comment:req.body.comment, cake:req.params.cakeid});
    rating.save(function(err){
      if(err){
        console.log("Failed to save rating into database", err);
        res.json({msesage: "FAIL"})
      }else{
        Cake.findById(req.params.cakeid, function(err, cake){
          if(err){
            console.log("Failed to connect rating to cake", err);
          }
          else{
            cake.ratings.push(rating);
            cake.save();
            res.json({message: "Success", ratings: rating});
        }
      });
    }
  });
},
}
