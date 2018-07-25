var express = require("express");
var router = express.Router();

router.use("/",require("../controller/home"));
router.use("/signup",require("../controller/signup"));
router.use("/login",require("../controller/login"));
router.use("/user",require("../controller/user"));
router.use("/add",require("../controller/add_cat"));
router.use("/view",require("../controller/view_cat"));

module.exports = router;