const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Dictionary = require('../models/Dictionary');
const Language = require('../models/Language');

// Get all dictionary entries for the authenticated user
router.get('/', auth, async (req, res) => {
  try {
    const dictionaryEntries = await Dictionary.find({ userId: req.user.id });

    // If no dictionary entries exist, create a default one
    if (dictionaryEntries.length === 0) {
      // Fetch default languages
      const english = await Language.findOne({ code: 'en' });
      const french = await Language.findOne({ code: 'fr' });

      if (!english || !french) {
        return res.status(404).json({ error: 'Default languages not found' });
      }

      const defaultEntry = new Dictionary({
        userId: req.user.id,
        baseLanguage: english._id,
        targetLanguage: french._id,
        word: 'Hello',
        translation: 'Bonjour',
        partOfSpeech: 'Interjection',
        exampleSentence: 'Hello, how are you?'
      });
      await defaultEntry.save();
      return res.json([defaultEntry]);
    }

    res.json(dictionaryEntries);
  } catch (error) {
    console.error('Error fetching dictionary entries:', error);
    res.status(500).json({ error: 'Error fetching dictionary entries' });
  }
});

// Search dictionary entries
router.get('/search', auth, async (req, res) => {
  const { term } = req.query;
  try {
    const dictionaryEntries = await Dictionary.find({
      userId: req.user.id,
      word: { $regex: term, $options: 'i' }
    });
    res.json(dictionaryEntries);
  } catch (error) {
    console.error('Error searching dictionary entries:', error);
    res.status(500).json({ error: 'Error searching dictionary entries' });
  }
});

// Add a new dictionary entry
router.post('/', auth, async (req, res) => {
  const { word, translation, partOfSpeech, exampleSentence, baseLanguage, targetLanguage } = req.body;
  try {
    const dictionaryEntry = new Dictionary({
      userId: req.user.id,
      baseLanguage,
      targetLanguage,
      word,
      translation,
      partOfSpeech,
      exampleSentence
    });
    await dictionaryEntry.save();
    res.status(201).json(dictionaryEntry);
  } catch (error) {
    console.error('Error adding dictionary entry:', error);
    res.status(500).json({ error: 'Error adding dictionary entry' });
  }
});

module.exports = router;
