var mongoose = require('mongoose');

var AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3,"Author name is NOT less than 3 letters"],
    required: true,
  },
}, {timestamps: true });

var Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;