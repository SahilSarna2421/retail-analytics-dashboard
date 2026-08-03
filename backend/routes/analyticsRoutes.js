const express = require("express");

const router = express.Router();

const analyticsController = require("../controllers/analyticsController");

router.get("/dashboard", analyticsController.getDashboard);
router.get("/export", analyticsController.exportData);

module.exports = router;