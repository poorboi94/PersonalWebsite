const express = require("express");
const port = require("port");
const session = require("express-session");
const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index', { whichpage : "index" });
});

app.get('/index', function(req, res) {
    res.render('index', { whichpage : "index" });
});

app.get('/about', function(req, res) {
    res.render('about', { whichpage : "about" });
});

app.get('/experience', function(req, res) {
    res.render('experience', { whichpage : "experience" });
});

app.get('/contact', function(req, res) {
    res.render('contact', { whichpage : "contact" });
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on ${PORT}`);
});
