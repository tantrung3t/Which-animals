var home  = require('../models/home.model');

exports.home_list = function(req, res) {
    home.home_list(function(data){
        res.send(data);
    }) 
}
exports.nganh_list = function(req, res) {
    home.nganh_list(req.params.id, function(data){
        res.send(data);
    }) 
}
exports.bo_list = function(req, res) {
    home.bo_list(req.params.id, function(data){
        res.send(data);
    }) 
}
exports.lop_list = function(req, res) {
    home.lop_list(req.params.id, function(data){
        res.send(data);
    }) 
}

exports.home_id = function(req, res) {
    home.home_id(req.params.id, function(data){
        res.send(data);
    }) 
}

exports.home_search = function(req, res) {
    home.home_search(req.body.search, function(data){
        res.send(data);
    }) 
}