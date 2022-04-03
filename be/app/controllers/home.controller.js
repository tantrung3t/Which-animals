exports.home_list = function(req, res) {
    var data = [
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Accipiter_gentilis_f_juv_captive.jpg/420px-Accipiter_gentilis_f_juv_captive.jpg',
            name: 'Chim diều hâu',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Accipiter_gentilis_f_juv_captive.jpg/420px-Accipiter_gentilis_f_juv_captive.jpg',
            name: 'Chim diều hâu',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Accipiter_gentilis_f_juv_captive.jpg/420px-Accipiter_gentilis_f_juv_captive.jpg',
            name: 'Chim diều hâu',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Accipiter_gentilis_f_juv_captive.jpg/420px-Accipiter_gentilis_f_juv_captive.jpg',
            name: 'Chim diều hâu',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Accipiter_gentilis_f_juv_captive.jpg/420px-Accipiter_gentilis_f_juv_captive.jpg',
            name: 'Chim diều hâu',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Accipiter_gentilis_f_juv_captive.jpg/420px-Accipiter_gentilis_f_juv_captive.jpg',
            name: 'Chim diều hâu',
        }
    ]
    res.send(data)
}