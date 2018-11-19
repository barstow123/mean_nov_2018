var users_controller = require('../controllers/users_controller');

module.exports = function (app) {
	app.get('/', users_controller.display);
	app.post('/platypodes/create', users_controller.create_platypus);
	app.get('/platypodes/new', users_controller.new);
	app.get('/platypodes/:id', users_controller.profile);
	app.post('/platypodes/:id', users_controller.update_platypus);
	app.get('/platypodes/edit/:id', users_controller.edit);
	app.post('/platypodes/destroy/:id', users_controller.destroy);
}
