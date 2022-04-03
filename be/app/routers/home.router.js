module.exports = function(router){
    var homeController = require('../controllers/home.controller');

    router.get('/api/home/list', homeController.home_list)
}