const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name } = req.body;
  const dataPath = path.resolve(__dirname, '../data.json');
  const rawData = fs.readFileSync(dataPath, 'utf-8');
  const users = JSON.parse(rawData);

  for (const [id, pw] of Object.entries(users)) {
    if (id === name || pw === name) {
      return res.status(200).json({ id, pw });
    }
  }

  return res.status(404).json({ message: "사용자 정보 없음" });
};
