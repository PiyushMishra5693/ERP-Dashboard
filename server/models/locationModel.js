const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  address: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now },
  salesManagerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
});

module.exports = mongoose.model('Location', locationSchema);
