var mongoose = require('mongoose');

var PlatypusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    default: '',
  },
  age:{
    type: String,
    required: true,
    default: '',
  },
}, {timestamps: true });

var Platypus = mongoose.model('Platypus', PlatypusSchema);
module.exports = Platypus;