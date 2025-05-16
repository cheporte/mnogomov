const mongoose = require('mongoose');

const FlashcardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  baseLanguage: { type: mongoose.Schema.Types.ObjectId, ref: 'Language', required: true },
  targetLanguage: { type: mongoose.Schema.Types.ObjectId, ref: 'Language', required: true },
  frontText: { type: String, required: true },
  backText: { type: String, required: true },
  proficiencyLevel: { type: Number, default: 0 },
  lastReviewed: { type: Date, default: Date.now },
  nextReviewDate: { type: Date }
});

FlashcardSchema.methods.updateProficiency = function(userPerformance) {
  // Implement SRS algorithm to update proficiency level and next review date
  if (userPerformance === 'easy') {
    this.proficiencyLevel += 2;
  } else if (userPerformance === 'medium') {
    this.proficiencyLevel += 1;
  } else {
    this.proficiencyLevel = Math.max(0, this.proficiencyLevel - 1);
  }

  // Calculate next review date based on proficiency level
  const interval = Math.pow(2, this.proficiencyLevel);
  this.nextReviewDate = new Date();
  this.nextReviewDate.setDate(this.nextReviewDate.getDate() + interval);

  this.lastReviewed = new Date();
  return this.save();
};

module.exports = mongoose.model('Flashcard', FlashcardSchema);
