const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminLayout = "../views/layouts/admin";
const jwtSecret = process.env.JWT_SECRET;

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
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, jwtSecret);
    res.cookie("token", token, { httpOnly: true });

    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
});

//post users checking for admin login
router.get("/dashboard", async (req, res) => {
  res.render("admin/dashboard");
});
// router.post("/admin", async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     console.log(req.body);

//     res.redirect("/admin");
//   } catch (error) {
//     console.log(error);
//   }
// });

//post users checking for admin register
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await User.create({ username, password: hashedPassword });
      res.status(201).json({ message: "User Created", user });
    } catch (error) {
      if (error.code === 11000)
        res.status(409).json({ message: "User already im use" });
    }
    res.status(500).json({ message: "Internal server error " });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
