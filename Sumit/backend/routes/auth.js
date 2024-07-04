// backend/routes/auth.js
const express = require('express');
const router = express.Router();

const USERNAME = 'Fit';
const PASSWORD = 'Fit';

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
