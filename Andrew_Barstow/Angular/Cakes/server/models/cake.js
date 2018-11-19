var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CakeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Baker name is required!'],
    minlength: 1,
  },

  imageURL:{
    type: String,
    required: [true,"URL is required"],
  },
  //linking relationships to put in the controller to populate
  ratings: [{type: Schema.Types.ObjectId, ref:"Rating"}],

}, {timestamps: true });

var Cake = mongoose.model('Cake', CakeSchema);
module.exports = Cake;
