var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
  first_name: {
    type: String,
    default: '',
  },
  quote: {
  	type: String,
  	default: '',
  },
}, {timestamps: true });

var Quote = mongoose.model('Quote', QuoteSchema);
module.exports = Quote;