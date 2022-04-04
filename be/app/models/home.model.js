const db = require('../common/connect');

const home = function () {
}

home.home_list = function (result) {
    var strquery = "select id, ten, image1 from animals"
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}

home.home_id = function (id, result) {
    var strquery = "SELECT * FROM `animals` WHERE id = " + id
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}

home.home_search = function (search, result) {
    var strquery = "SELECT * FROM `animals` WHERE ten LIKE '%" + search + "%'"
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}

module.exports = home;