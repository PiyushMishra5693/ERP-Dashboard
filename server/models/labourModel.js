const mongoose = require('mongoose');

const labourSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  assignedSalesManager: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  assignedLocation: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' }, 
  inTime: { type: Date }, // Labour in-time
  outTime: { type: Date }, // Labour out-time
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }], 
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Labour', labourSchema);
