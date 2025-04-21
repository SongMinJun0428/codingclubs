const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const body = req.body;
  const { id, pw } = body;

  const dataPath = path.resolve(__dirname, '../data.json');
  const rawData = fs.readFileSync(dataPath, 'utf-8');
  const users = JSON.parse(rawData);

  if (users[id] === pw) {
    return res.status(200).json({ success: true, isAdmin: id === "admin" });
  } else {
    return res.status(200).json({ success: false });
  }
};
