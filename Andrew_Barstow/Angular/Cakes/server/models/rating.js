var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RatingSchema = new mongoose.Schema({
  stars: {
    type: Number,
    required: [true, 'Rating is required!'],
  },

  comment:{
    type: String,
    required: [true, "Comments cannot be blank!"],
  },

  cake:{
    type: Schema.Types.ObjectId,
    ref: "Cake",
    trim: true,
    required: true,
  },

}, {timestamps: true });

var Rating = mongoose.model('Rating', RatingSchema);
module.exports = Rating;
