const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//routes , GET HOME
router.get("", async (req, res) => {
  const locals = {
    title: "Node Blog",
    description: "simple blog created with nodeJs, express & mongoDB",
  };
  try {
    const data = await Post.find();
    res.render("index", { locals, data });
  } catch (error) {
    console.log(404);
  }
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
// function insertPostData() {
//   Post.insertMany([
//     {
//       title: "The Great Adventure",
//       body: "This is an exciting story about a young explorer who travels to unknown lands and discovers hidden treasures.",
//     },
//     {
//       title: "JavaScript Essentials",
//       body: "A comprehensive guide to mastering JavaScript, including basics, advanced topics, and best practices.",
//     },
//     {
//       title: "The Mystery of the Lake",
//       body: "A thrilling mystery novel set in a small lakeside town, where strange occurrences draw the attention of a local detective.",
//     },
//     {
//       title: "Web Development 101",
//       body: "A beginner's guide to creating websites using HTML, CSS, and JavaScript.",
//     },
//     {
//       title: "Cooking Made Simple",
//       body: "Easy and delicious recipes for every home cook, from quick weeknight dinners to special weekend feasts.",
//     },
//     {
//       title: "The Future of AI",
//       body: "An exploration of artificial intelligence, its current impact, and what the future holds for this transformative technology.",
//     },
//     {
//       title: "Space Exploration",
//       body: "An in-depth look at humanity's journey to understand space, from the first moon landing to the latest Mars missions.",
//     },
//     {
//       title: "Meditation for Beginners",
//       body: "A guide to mindfulness and meditation practices that help reduce stress and improve overall well-being.",
//     },
//     {
//       title: "The Art of Painting",
//       body: "A guide for artists of all levels on how to approach painting, with techniques, color theory, and tips for creating beautiful art.",
//     },
//     {
//       title: "Building a Startup",
//       body: "Insights and strategies for entrepreneurs looking to start their own business, from idea validation to scaling the company.",
//     },
//   ]);
// }

// insertPostData();
