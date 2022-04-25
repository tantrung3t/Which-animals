const db = require('../common/connect');

const home = function () {
}

home.nganh = function (result) {
    var strquery = "select * from nganh"
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}
home.lop = function (result) {
    var strquery = "select * from lop"
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}
home.bo = function (result) {
    var strquery = "select * from bo"
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}

home.home_list = function (result) {
    var strquery = "select id, ten, tenkhoahoc, image1 from animals"
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

home.animals = function (body, result) {
    var strquery = "INSERT INTO `animals`(`ten`, `tenkhoahoc`, `nganh_id`, `lop_id`, `bo_id`, `hinhthai`, `sinhthai`, `image1`, `image2`, `image3`) VALUES ('"+ body.ten +"','"+ body.tenkhoahoc +"','"+ body.nganh_id +"','"+ body.lop_id +"','"+ body.bo_id +"','"+ body.hinhthai +"','"+ body.sinhthai +"','"+ body.image1 +"','"+ body.image2 +"','"+ body.image3 +"')"
    db.query(strquery, function (err, data) {
        if (err) {
            result({
                status: '400',
                message: "Err"
            });
        }
        else {
            result({
                status: '200',
                message: "Success"
            });
        }
    })
}

module.exports = home;