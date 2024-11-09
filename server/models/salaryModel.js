const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  amount: { type: Number, required: true }, 
  month: { type: String, required: true }, 
  year: { type: Number, required: true }, 
  paidAt: { type: Date, default: Date.now },
  isPaid: { type: Boolean, default: false }, 
});

module.exports = mongoose.model('Salary', salarySchema);
