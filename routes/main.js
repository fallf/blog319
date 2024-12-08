const express = require("express");
const router = express.Router();

//routes
router.get("", (req, res) => {
  res.send("we are here for now ");
});

module.exports = router;
