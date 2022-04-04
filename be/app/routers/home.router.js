module.exports = function(router){
    var homeController = require('../controllers/home.controller');

    router.get('/api/home/list', homeController.home_list)
    router.get('/api/home/list/:id', homeController.home_id)

    router.post('/api/home/search', homeController.home_search)
}