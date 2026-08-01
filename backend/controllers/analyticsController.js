const analyticsService = require("../services/analyticsService");

const getDashboard = async (req, res) => {
    try {
        const data = await analyticsService.getDashboardData();

        res.status(200).json(data);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to analyze dataset",
        });
    }
};

module.exports = {
    getDashboard,
};