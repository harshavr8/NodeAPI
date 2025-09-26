const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

let books = [
  { id: uuidv4(), title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: uuidv4(), title: '1984', author: 'George Orwell' }
];

// GET all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// GET one book
app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ error: 'Not found' });
  res.json(book);
});

// POST create book
app.post('/api/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) return res.status(400).json({ error: 'title and author required' });
  const newBook = { id: uuidv4(), title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PATCH update book (partial)
app.patch('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ error: 'Not found' });
  const { title, author } = req.body;
  if (title !== undefined) book.title = title;
  if (author !== undefined) book.author = author;
  res.json(book);
});

// DELETE book
app.delete('/api/books/:id', (req, res) => {
  const idx = books.findIndex(b => b.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const deleted = books.splice(idx, 1)[0];
  res.json({ deleted });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
