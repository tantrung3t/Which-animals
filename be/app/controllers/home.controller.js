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
exports.nganh = function(req, res) {
    home.nganh(function(data){
        res.send(data);
    }) 
}
exports.lop = function(req, res) {
    home.lop(function(data){
        res.send(data);
    }) 
}
exports.bo = function(req, res) {
    home.bo(function(data){
        res.send(data);
    }) 
}

exports.admin = function(req, res) {

    if(req.body.username === 'admin' && req.body.password === 'admin'){
        res.send({
            status: '200',
            message: 'Login successful',
        })
    }
    else{
        res.send({
            status: '400',
            message: 'Login fail',
        })
    }
}

exports.animals = function(req, res) {
    home.animals(req.body, function(data){
        res.send(data);
    })
}