const express = require('express');

const { BookingController } = require('../../controllers/index');

const router = express.Router();

router.post('/bookings', BookingController.create);

console.log('✅ routes/index.js loaded'); // debug


module.exports = router;