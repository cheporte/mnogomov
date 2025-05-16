const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// Get current languages for the authenticated user
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('learningLanguages');
    res.json(user.learningLanguages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching current languages' });
  }
});

module.exports = router;
