const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    serviceType: { type: String, required: true, default: "General Cleaning" },
    serviceDate: { type: Date, required: true },
    serviceTime: { type: String },
    propertySize: { type: String, required: true },
    notes: { type: String },
    hasPets: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
