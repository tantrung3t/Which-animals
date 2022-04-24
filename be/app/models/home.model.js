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

home.nganh_list = function (id, result) {
    var strquery = "select id, ten, image1 from animals WHERE nganh_id = " + id
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}
home.lop_list = function (id, result) {
    var strquery = "select id, ten, image1 from animals WHERE lop_id = " + id
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}
home.bo_list = function (id, result) {
    var strquery = "select id, ten, image1 from animals WHERE bo_id = " + id
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
    var strquery = "SELECT animals.id, animals.ten, animals.tenkhoahoc, animals.hinhthai, animals.sinhthai, animals.nganh_id, animals.lop_id, animals.bo_id, animals.image1, animals.image2, animals.image3, nganh.nganh_ten, lop.lop_ten, bo.bo_ten FROM `animals`, `nganh`, `lop`, `bo` WHERE animals.nganh_id = nganh.nganh_id and animals.lop_id = lop.lop_id and animals.bo_id = bo.bo_id and id = " + id
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