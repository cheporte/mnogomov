const mongoose = require('mongoose');

const UserProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  flashcardsReviewed: { type: Number, default: 0 },
  quizzesTaken: { type: Number, default: 0 },
  currentStreak: { type: Number, default: 0 },
  lastActivityDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserProgress', UserProgressSchema);
