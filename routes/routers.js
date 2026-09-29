const express = require("express");
const router = express.Router();
const {
  createData,
  updateData,
  getDataById,
  getDataByName,
  getData,
  getByEmail,
  updateByEmail,
} = require("../controllers/control");

router.post("/students", createData);
router.put("/students/:id", updateData);
router.get("/students/:id", getDataById);
router.get("/name", getDataByName);
router.get("/students", getData);
router.get("/student", getByEmail);
router.put("/students/:email", updateByEmail);

module.exports = router;
