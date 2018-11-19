var users_controller = require('../controllers/users_controller');

module.exports = function(app) {
	app.get('/', users_controller.home);
  	app.('/users', users_controller.users);
}