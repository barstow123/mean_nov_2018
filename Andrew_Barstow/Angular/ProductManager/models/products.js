var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/Tasks_db");

autoIncrement.initialize(connection);

var ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title is required'],
    minlength: [3, 'title must be at least 3 characters long']
  },
  price: {
    type: Number,
    required: [true, 'price is required'],
    min: [0, 'price must be greater than or equal to 0 dollars']
  },
  qty: {
    type: Number,
    required: [true, 'must provide quantity'],
    min: [0, 'must provide some quanity of items that is not 0']
  },
  // product_id: {
  //   type: Number,
  //   autoIncrement: true,
  //   primaryKey: true,
  //   unique: true
  // }
}, {timestamps: true });

ProductSchema.plugin(autoIncrement.plugin, 'Product');
var Product = connection.model('Product', ProductSchema);
module.exports = Product;
