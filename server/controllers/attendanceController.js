const Attendance = require('../models/attendanceModel');
const User = require('../models/userModel');

exports.markAttendance = async (req, res) => {
  try {
    const { userId, status, date } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newAttendance = new Attendance({ userId, status, date });
    await newAttendance.save();
    res.status(201).json({ message: 'Attendance marked successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error marking attendance', error: err });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({ userId: req.params.userId });
    res.json(attendance);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching attendance', error: err });
  }
};

exports.getAllAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find();
    res.json(attendance);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching attendance records', error: err });
  }
};
