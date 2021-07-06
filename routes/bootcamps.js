const router = require("express").Router();

// controllers
const {
  getBootcamps,
  createBootcamp,
  getBootcamp,
} = require("../controllers/bootcamps");

// gets all bootcamps and create new bootcamp
router.route("/").get(getBootcamps).post(createBootcamp);

router.route("/:id").get(getBootcamp);

module.exports = router;
