const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "../homeworks.json");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();

  let body = "";
  req.on("data", chunk => body += chunk);
  req.on("end", () => {
    const { name, title, comment } = JSON.parse(body);
    const newEntry = {
      data: { name, title, comment },
      created_at: new Date().toISOString()
    };

    let data = [];
    if (fs.existsSync(filePath)) {
      data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
    data.unshift(newEntry); // 최신이 위로

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return res.status(200).json({ success: true });
  });
};
