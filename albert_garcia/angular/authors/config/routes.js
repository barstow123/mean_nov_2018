var author_controller = require('../controllers/author_controller');
var path = require('path');
module.exports = function(app) {
  app.get('/api/authors', author_controller.authors);
  app.post('/api/authors', author_controller.new);
  app.get('/api/authors/:id', author_controller.one_author);
  app.put('/api/authors/:id', author_controller.author_update_id);
  app.delete('/api/authors/:id', author_controller.delete_author);
  app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./public/dist/public/index.html'))
  })
}