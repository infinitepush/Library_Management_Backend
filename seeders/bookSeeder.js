const Book = require('../models/Book');

const books = [
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    isbn: '978-0-618-64015-7',
    genre: 'Fantasy',
    publicationYear: 1954,
    quantity: 5,
    available: 3,
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    isbn: '978-0-618-00221-4',
    genre: 'Fantasy',
    publicationYear: 1937,
    quantity: 3,
    available: 1,
  },
  {
    title: 'The Silmarillion',
    author: 'J.R.R. Tolkien',
    isbn: '978-0-618-12698-9',
    genre: 'Fantasy',
    publicationYear: 1977,
    quantity: 2,
    available: 2,
  },
  {
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    author: 'Douglas Adams',
    isbn: '978-0-345-39180-3',
    genre: 'Science Fiction',
    publicationYear: 1979,
    quantity: 4,
    available: 4,
  },
  {
    title: 'The Restaurant at the End of the Universe',
    author: 'Douglas Adams',
    isbn: '978-0-345-39181-0',
    genre: 'Science Fiction',
    publicationYear: 1980,
    quantity: 3,
    available: 3,
  },
];

const seedBooks = async () => {
  try {
    await Book.deleteMany();
    console.log('Books are deleted');

    await Book.insertMany(books);
    console.log('Books are added');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = seedBooks;
