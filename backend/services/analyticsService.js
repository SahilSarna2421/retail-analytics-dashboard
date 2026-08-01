const { PythonShell } = require("python-shell");
const path = require("path");

const getDashboardData = async () => {
    const scriptPath = path.join(__dirname, "../../python");

    const options = {
        mode: "text",
        pythonPath: path.join(__dirname, "../../.venv/Scripts/python.exe"),
        scriptPath: scriptPath,
    };

    try {
        const results = await PythonShell.run("analyze.py", options);

        console.log(results);

        const output = results.join("\n");

        console.log(output);

        return JSON.parse(output);

    } catch (error) {
        throw error;
    }
};

module.exports = {
    getDashboardData,
};