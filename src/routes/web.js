const express = require("express")
const path = require("path")
const app = express.Router()
const multerFolder = require('../middlewares/multerFolderMw');
const controller = require('../controllers/formController');


app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "../views", "register.html")));
app.post('/', [multerFolder('form', 'forms/').any()], controller.save);

module.exports = app;