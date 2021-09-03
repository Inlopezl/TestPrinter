const express = require("express")
const path = require("path")
const app = express.Router()
const multerFolder = require('../middlewares/multerFolderMw');
const controller = require('../controllers/formController');
const fs = require("fs");

////////////////////////////////
let file = fs.readFileSync(path.resolve(__dirname, "../data/forms.json"))
file = JSON.parse(file)
    ////////////////////////////////

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "../views", "register.html")));
app.post('/', [multerFolder('form', 'forms/').any()], controller.save);
app.get("/printer", (req, res) => res.render('./printer', { data: file })); //controller.all));
module.exports = app;