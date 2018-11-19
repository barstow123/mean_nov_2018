var cake_controller = require('../controllers/cake_controller');

module.exports = function(app) {
  app.get('/cakes', cake_controller.index);
  app.post('/cakes', cake_controller.create_cake);
  app.post('/rating/:cakeid', cake_controller.create_rating);
}
