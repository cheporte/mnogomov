const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Flashcard = require('../models/Flashcard');
const UserProgress = require('../models/UserProgress');

// Create a new flashcard for the authenticated user
router.post('/', auth, async (req, res) => {
  const { baseLanguage, targetLanguage, frontText, backText } = req.body;
  try {
    const flashcard = new Flashcard({
      userId: req.user.id,
      baseLanguage,
      targetLanguage,
      frontText,
      backText
    });
    await flashcard.save();
    res.status(201).json(flashcard);
  } catch (error) {
    res.status(500).json({ error: 'Error creating flashcard' });
  }
});

// Get all flashcards for the authenticated user
router.get('/', auth, async (req, res) => {
  try {
    const flashcards = await Flashcard.find({ userId: req.user.id });
    res.json(flashcards);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching flashcards' });
  }
});

// Review a flashcard
router.post('/:id/review', auth, async (req, res) => {
  const { id } = req.params;
  const { userPerformance } = req.body;

  try {
    const flashcard = await Flashcard.findById(id);
    if (!flashcard) {
      return res.status(404).json({ error: 'Flashcard not found' });
    }

    // Update proficiency based on user performance
    if (userPerformance === 'easy') {
      flashcard.proficiencyLevel += 2;
    } else if (userPerformance === 'medium') {
      flashcard.proficiencyLevel += 1;
    } else {
      flashcard.proficiencyLevel = Math.max(0, flashcard.proficiencyLevel - 1);
    }

    // Calculate next review date based on proficiency level
    const interval = Math.pow(2, flashcard.proficiencyLevel);
    flashcard.nextReviewDate = new Date();
    flashcard.nextReviewDate.setDate(flashcard.nextReviewDate.getDate() + interval);

    flashcard.lastReviewed = new Date();
    await flashcard.save();

    // Update user progress
    let userProgress = await UserProgress.findOne({ userId: req.user.id });
    if (!userProgress) {
      userProgress = new UserProgress({ userId: req.user.id });
    }

    userProgress.flashcardsReviewed += 1;
    userProgress.currentStreak += 1;
    userProgress.lastActivityDate = new Date();
    await userProgress.save();

    res.status(200).json(flashcard);
  } catch (error) {
    console.error('Error reviewing flashcard:', error);
    res.status(500).json({ error: 'Error reviewing flashcard' });
  }
});

module.exports = router;
