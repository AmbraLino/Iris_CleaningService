const express = require('express');
const router = express.Router();
const BookingModel = require('../Models/bookingModel');

router.post('/', async (req, res) => {
  try {
    const newBooking = new BookingModel(req.body);
    await newBooking.save();
    res.status(201).json({
      message: "Rezervimi u ruajt me sukses!",
      data: newBooking
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get('/', (req, res) => {
  res.json({ message: "Booking route is working " });
});

module.exports = router;
