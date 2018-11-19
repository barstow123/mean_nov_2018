var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  }
}, {timestamps: true });

var Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
