const express = require("express");
const router = express.Router();

const usercontroller = require("../controller/usercontroller");

router.post("/addemp", usercontroller.create_emp);

router.get("/getemp", usercontroller.get_emp);

router.put("/updateemp", usercontroller.update_emp);

router.delete("/deleteemp", usercontroller.delete_emp);

router.get("/getone", usercontroller.getone_emp);


module.exports = router;