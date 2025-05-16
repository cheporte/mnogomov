const mongoose = require('mongoose');

const DictionarySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  baseLanguage: { type: mongoose.Schema.Types.ObjectId, ref: 'Language', required: true },
  targetLanguage: { type: mongoose.Schema.Types.ObjectId, ref: 'Language', required: true },
  word: { type: String, required: true },
  translation: { type: String, required: true },
  partOfSpeech: { type: String },
  exampleSentence: { type: String }
});

module.exports = mongoose.model('Dictionary', DictionarySchema);
