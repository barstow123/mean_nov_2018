//var Task = require('../models/tasks');

module.exports = {
  all: function(req, res){
      Task.find({}, function(err, tasks){
          if(err){
             console.log("Returned error", err);
              // respond with JSON
             res.json({err: err, data: ""})
          }
          else {
              // respond with JSON
             res.json({err: "", data: tasks})
          }
       })
  },
  one: function(req, res) {
    Task.findOne({_id: req.params.id}, function(err, task){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({err: err, data: ""})
        }
        else {
            // respond with JSON
           res.json({err: "", data: task})
        }
     })
  },

  create_task: function(req, res) {
    console.log(req.body);
    task = new Task({title: req.body.title, description: req.body.description, completed: req.body.completed});
    task.save(function(err) {
      if (err) {
        // console.log('returned error', err);
        res.json({err: err, data: ""})
      } else {
        res.json({err: "", data: task});
      }
    })
  },

  end_task: function(req, res) {
    Task.deleteOne({_id: req.params.id}, function(err) {
      if (err) {
        console.log('returned error', err);
        res.json({err: err, data: ""})
      } else {
        res.json({err: "", data: ""});
      }
    });
  },
  update_task: function(req, res) {
    console.log(req.body)
    Task.findByIdAndUpdate({_id: req.params.id}, {$set:{title: req.body.title, description: req.body.description, completed: req.body.completed}}, function(err, task) {
      if (err) {
        console.log('returned error', err);
        res.json({err: err, data: ""})
      } else {
        res.json({err: "", data: task});
      }
    });
  }
}
