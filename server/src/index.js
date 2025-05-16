const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));

const User = require('./models/User');
const Language = require('./models/Language');
const Flashcard = require('./models/Flashcard');
const Dictionary = require('./models/Dictionary');
const UserProgress = require('./models/UserProgress');

const authRoutes = require('./routes/auth');
const flashcardRoutes = require('./routes/flashcards');
const languageRoutes = require('./routes/languages');
const userRoutes = require('./routes/users');
const dictionaryRoutes = require('./routes/dictionary');
const userStatsRoutes = require('./routes/userStats');
const currentLanguagesRoutes = require('./routes/currentLanguages');

app.use("/api/auth", authRoutes);
app.use("/api/flashcards", flashcardRoutes);
app.use("/api/languages", languageRoutes);
app.use("/api/users", userRoutes);
app.use("/api/dictionary", dictionaryRoutes);
app.use("/api/user-stats", userStatsRoutes);
app.use("/api/current-languages", currentLanguagesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
