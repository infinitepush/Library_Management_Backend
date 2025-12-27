const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Book = require('./models/Book');
const connectDB = require('./config/db');
const books = require('./data/books.js');

require('dotenv').config();

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'password123',
    role: 'admin',
  },
  {
    name: 'Librarian User',
    email: 'librarian@example.com',
    password: 'password123',
    role: 'librarian',
  },
  {
    name: 'Student User',
    email: 'student@example.com',
    password: 'password123',
    role: 'student',
  },
];

const seedDB = async () => {
  await connectDB();

  try {
    // Seed users
    for (const user of users) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user.password, salt);

      await User.findOneAndUpdate(
        { email: user.email },
        {
          $set: {
            name: user.name,
            password: hashedPassword,
            role: user.role,
          },
        },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
    }
    console.log('Users are seeded');

    // Seed books
    await Book.deleteMany();
    console.log('Books are deleted');

    await Book.insertMany(books);
    console.log('Books are added');
    
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (require.main === module) {
  seedDB().then(() => {
    mongoose.connection.close();
  });
}

module.exports = seedDB;