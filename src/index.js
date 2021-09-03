const express = require("express")
const app = express()
const path = require("path")

//server
app.listen(process.env.PORT || 3000, () => console.log("Server on http://localhost:3000"));

// Public Access
app.use(express.static(path.resolve(__dirname, "../public")));

// Website Routes
app.use(require("./routes/web"))

// set view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));