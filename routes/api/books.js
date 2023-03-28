const express = require('express');
const router = express.Router();
const { booksCtrl } = require('../../controllers');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/search', booksCtrl.googleSearchBooks)

module.exports = router;
