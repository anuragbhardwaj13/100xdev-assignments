const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const admin = new Admin({
    username: username,
    password: password,
  });
  admin.save().then(() => {
    res.status(201).json({ message: "Admin created successfully" });
  });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;
  const courseId = Math.floor(Math.random() * 1000);
  const course = new Course({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
  });
  course.save().then(() => {
    res
      .status(201)
      .json({ message: "Course created successfully", courseId: course._id });
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const data = await Course.find({});
  res.status(200).json(data);
});

module.exports = router;
