const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "../homeworks.json");

module.exports = async (req, res) => {
  if (!fs.existsSync(filePath)) {
    return res.status(200).json([]);
  }
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return res.status(200).json(data);
};
