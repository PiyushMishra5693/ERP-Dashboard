const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  labourId: { type: mongoose.Schema.Types.ObjectId, ref: 'Labour', required: true }, 
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['present', 'absent', 'leave'], required: true },
  location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' }, 
});

module.exports = mongoose.model('Attendance', attendanceSchema);
