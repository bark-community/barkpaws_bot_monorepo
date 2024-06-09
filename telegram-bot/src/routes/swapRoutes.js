const express = require('express');
const router = express.Router();
const swapController = require('../controllers/swapController');
const authMiddleware = require('../middleware/authMiddleware');

// Route for initiating token swap
router.post('/swap', authMiddleware, swapController.initiateTokenSwap);

module.exports = router;
