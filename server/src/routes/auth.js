const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Flashcard = require('../models/Flashcard');
const Language = require('../models/Language');

// Register a new user
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    user = new User({ username, email, password });
    await user.save();

    // Create default flashcards for the new user
    const french = await Language.findOne({ code: 'fr' });
    const english = await Language.findOne({ code: 'en' });

    const defaultFlashcards = [
      { userId: user._id, baseLanguage: french._id, targetLanguage: english._id, frontText: 'Bonjour', backText: 'Hello' },
      { userId: user._id, baseLanguage: french._id, targetLanguage: english._id, frontText: 'Au revoir', backText: 'Goodbye' },
      { userId: user._id, baseLanguage: french._id, targetLanguage: english._id, frontText: 'Merci', backText: 'Thank you' }
    ];

    await Flashcard.insertMany(defaultFlashcards);

    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
