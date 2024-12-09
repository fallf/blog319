const express = require("express");
const router = express.Router();

//routes
router.get("", (req, res) => {
  const locals = {
    title: "node Blog",
    description: "simple blog created with nodeJs, express & mongoDB",
  };

  res.render("index", { locals });
});

module.exports = router;
