const path = require('path');
const fs = require('fs');

module.exports = {

    directory: function() {
        let directory = path.resolve(__dirname, "../data/forms.json");
        return directory;
    },
    all: function() {
        let file = fs.readFileSync(this.directory(), 'utf-8');
        file = file == '' ? [] : file;
        const object = JSON.parse(file);
        return object
    },
    new: function(data, files) {

        let forms = this.all();
        let newForm = {
            id: forms.length > 0 ? forms[forms.length - 1].id + 1 : 1,
            date: data.date,
            sector: data.sector,
            route: data.route,
            package: data.package
        }
        forms.push(newForm);
        fs.writeFileSync(this.directory(), JSON.stringify(forms, null, 2));
        return true;
    }

}