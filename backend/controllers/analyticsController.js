const fs = require("fs");
const path = require("path");
const analyticsService = require("../services/analyticsService");

const getDashboard = async (req, res) => {
    try {
        const data = await analyticsService.getDashboardData();

        res.status(200).json(data);
    } catch (error) {
        console.error("FULL ERROR:");
        console.error(error);

        if (error.stack) {
            console.error(error.stack);
        }

        res.status(500).json({
            success: false,
            message: "Failed to analyze dataset",
        });
    }
};

const exportData = (req, res) => {
    const filePath = path.resolve(
        __dirname,
        "..",
        "..",
        "dataset",
        "SampleSuperstore.csv"
    );

    console.log("Export requested");
    console.log("Resolved path:", filePath);
    console.log("Exists:", fs.existsSync(filePath));

    if (!fs.existsSync(filePath)) {
        return res.status(500).json({
            success: false,
            message: "Export file not found",
            path: filePath,
        });
    }

    res.download(filePath, "SampleSuperstore.csv", (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Download successful");
        }
    });
};

module.exports = {
    getDashboard,
    exportData,
};