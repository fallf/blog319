const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");

const adminLayout = "../views/layouts/admin";
//GET Home
//admin-login or aka User
router.get("/admin", async (req, res) => {
  try {
    const locals = {
      title: "Admin",
      description: "Simple Blog created with NodeJs, Express & MongoDb.",
    };
    res.render("admin/index", { locals, layout: adminLayout });
  } catch (error) {
    console.log(error);
  }
});

//post users checking for admin login
router.post("/admin", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);

    res.redirect("/admin");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
