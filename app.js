const express = require("express");
const port = require("port");
const session = require("express-session");
const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use("/", require("./routes/forwarding"));

app.get('*', function(req, res) {
    res.status(404).render('index', { whichpage : "index" });
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on ${PORT}`);
});
