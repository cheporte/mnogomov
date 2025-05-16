const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const Language = require('../models/Language');

// Get user profile
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('learningLanguages');
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user profile' });
  }
});

// Get available languages
router.get('/languages', async (req, res) => {
  try {
    const languages = await Language.find();
    res.json(languages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching languages' });
  }
});

// Add a new language to user's learning list
router.post('/languages', auth, async (req, res) => {
  const { languageId } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user.learningLanguages.includes(languageId)) {
      user.learningLanguages.push(languageId);
      await user.save();
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error adding language' });
  }
});

module.exports = router;
