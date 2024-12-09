const express = require("express");
const router = express.Router();

//routes
router.get("", (req, res) => {
  const locals = {
    title: "Node Blog",
    description: "simple blog created with nodeJs, express & mongoDB",
  };

  res.render("index", { locals });
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
