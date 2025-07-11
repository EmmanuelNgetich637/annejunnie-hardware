const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Save to DB here later
  res.status(200).json({ success: true, message: 'Message received.' });
});

module.exports = router;
