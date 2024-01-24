const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = new User({
    username: username,
    password: password,
  });
  user.save().then(() => {
    res.status(201).json({ message: "User created successfully" });
  });
});

router.get("/courses", userMiddleware, async (req, res) => {
  // Implement listing all courses logic
  const data = await Course.find({});
  res.status(200).json(data);
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const username = req.headers.username;
  const courseId = req.params.courseId;
  console.log(courseId);
  User.updateOne(
    { username: username },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  ).then(() => {
    res.json("course purchased successfully");
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  });
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.json({
    courses: courses,
  });
});

module.exports = router;
