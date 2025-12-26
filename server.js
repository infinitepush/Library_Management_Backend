const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

const userRoutes = require('./routes/user');

const bookRoutes = require('./routes/book');

const seedDB = require('./seed');

require('dotenv').config();

const app = express();

// Connect Database
connectDB();

if (process.env.SEED_DB === 'true') {
  seedDB();
}

// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
