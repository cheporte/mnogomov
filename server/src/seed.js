const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Flashcard = require('./models/Flashcard');
const Language = require('./models/Language');

dotenv.config();

mongoose.connect(process.env.DB_URL)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

const seedDatabase = async () => {
  // Clear existing flashcards
  await Flashcard.deleteMany({});

  // Find or create languages
  const french = await Language.findOne({ code: 'fr' }) || await Language.create({ name: 'French', code: 'fr' });
  const ukrainian = await Language.findOne({ code: 'uk' }) || await Language.create({ name: 'Ukrainian', code: 'uk' });
  const japanese = await Language.findOne({ code: 'ja' }) || await Language.create({ name: 'Japanese', code: 'ja' });
  const english = await Language.findOne({ code: 'en' }) || await Language.create({ name: 'English', code: 'en' });
  const russian = await Language.findOne({ code: 'ru' }) || await Language.create({ name: 'Russian', code: 'ru' });

  // Example user ID (replace with actual user ID)
  const userId = new mongoose.Types.ObjectId('6825ff65d7878b0c3bd6f0da');

  // French flashcards (translated to English)
  const frenchFlashcards = [
    { userId, baseLanguage: french._id, targetLanguage: english._id, frontText: 'Bonjour', backText: 'Hello' },
    { userId, baseLanguage: french._id, targetLanguage: english._id, frontText: 'Au revoir', backText: 'Goodbye' },
    { userId, baseLanguage: french._id, targetLanguage: english._id, frontText: 'Merci', backText: 'Thank you' }
  ];

  // Ukrainian flashcards (translated to Russian)
  const ukrainianFlashcards = [
    { userId, baseLanguage: ukrainian._id, targetLanguage: russian._id, frontText: 'Привіт', backText: 'Привет' },
    { userId, baseLanguage: ukrainian._id, targetLanguage: russian._id, frontText: 'До побачення', backText: 'До свидания' },
    { userId, baseLanguage: ukrainian._id, targetLanguage: russian._id, frontText: 'Дякую', backText: 'Спасибо' }
  ];

  // Japanese flashcards (translated to English)
  const japaneseFlashcards = [
    { userId, baseLanguage: japanese._id, targetLanguage: english._id, frontText: 'こんにちは', backText: 'Hello' },
    { userId, baseLanguage: japanese._id, targetLanguage: english._id, frontText: 'さようなら', backText: 'Goodbye' },
    { userId, baseLanguage: japanese._id, targetLanguage: english._id, frontText: 'ありがとう', backText: 'Thank you' }
  ];

  // Insert flashcards into the database
  await Flashcard.insertMany([...frenchFlashcards, ...ukrainianFlashcards, ...japaneseFlashcards]);

  console.log('Database seeded!');
  mongoose.connection.close();
};

seedDatabase();
