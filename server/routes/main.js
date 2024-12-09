const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//routes , GET HOME
router.get("", async (req, res) => {
  try {
    const locals = {
      title: "Node Blog",
      description: "Simple blog created with Node.js, Express, & MongoDB",
    };
    let perPage = 10;
    let page = req.query.page || 1;

    const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    const count = await Post.countDocuments();
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

    res.render("index", {
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
    });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("Internal Server Error");
  }
});

// GET post :ID

router.get("/post/:id", async (req, res) => {
  try {
    let slug = req.params.id;

    const data = await Post.findById({ _id: slug });

    const locals = {
      title: data.title,
      description: "Simple Blog created with NodeJs, Express & MongoDb.",
    };

    res.render("post", {
      locals,
      data,
      currentRoute: `/post/${slug}`,
    });
  } catch (error) {
    console.log(error);
  }
});

//post search time
router.post("/search", async (req, res) => {
  try {
    const locals = {
      title: "Seach",
      description: "Simple Blog created with NodeJs, Express & MongoDb.",
    };

    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

    const data = await Post.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { body: { $regex: new RegExp(searchNoSpecialChar, "i") } },
      ],
    });

    res.render("search", {
      data,
      locals,
      currentRoute: "/",
    });
  } catch (error) {
    console.log(error);
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
