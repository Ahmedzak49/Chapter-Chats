const userRoutes = require('./api/users');
const booksRoutes = require('./api/books');
const express = require('express');
const router = express.Router();

router.use('/users', userRoutes);
router.use('/books', booksRoutes);

module.exports = router;
