const form = require('../models/form.js');

module.exports = {
    save: (req, res) => {
        console.log(req.body);
        let newForm = form.new(req.body, req.files);
        newForm == true ? res.redirect('/') : res.send('Error');
    },


    all: form.all

}