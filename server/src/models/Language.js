const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Language', LanguageSchema);
