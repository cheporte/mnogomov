const express = require('express');
const router = express.Router();
const Language = require('../models/Language');

// Get all languages
router.get('/', async (req, res) => {
  try {
    const languages = await Language.find();
    res.json(languages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching languages' });
  }
});

module.exports = router;
