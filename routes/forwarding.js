const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.render("index", { whichpage: "index" });
});

router.get("/about", function(req, res) {
    res.render("about", { whichpage: "about" });
});

router.get("/experience", function(req, res) {
    res.render("experience", { whichpage: "experience" });
});

router.get("/contact", function(req, res) {
    res.render("contact", { whichpage: "contact" });
});

module.exports = router;
