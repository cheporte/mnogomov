const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const UserProgress = require('../models/UserProgress');
const Dictionary = require('../models/Dictionary');

// Get user statistics including dictionary size
router.get('/', auth, async (req, res) => {
  try {
    const userProgress = await UserProgress.findOne({ userId: req.user.id });
    const dictionarySize = await Dictionary.countDocuments({ userId: req.user.id });

    if (!userProgress) {
      return res.json({
        flashcardsReviewed: 0,
        dictionarySize: dictionarySize,
        currentStreak: 0
      });
    }

    res.json({
      flashcardsReviewed: userProgress.flashcardsReviewed,
      dictionarySize: dictionarySize,
      currentStreak: userProgress.currentStreak
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user statistics' });
  }
});

module.exports = router;
