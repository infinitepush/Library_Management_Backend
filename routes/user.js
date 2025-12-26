const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/user.js');
const { protect, admin } = require('../middleware/authMiddleware.js');

router.route('/').post(protect, admin, createUser);

module.exports = router;
