const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  let body = "";
  req.on("data", chunk => body += chunk);
  req.on("end", () => {
    const { id, pw } = JSON.parse(body);
    const dataPath = path.resolve(__dirname, "../data.json");
    const users = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    if (users[id] === pw) {
      return res.status(200).json({ success: true, isAdmin: id === "admin" });
    } else {
      return res.status(200).json({ success: false });
    }
  });
};
