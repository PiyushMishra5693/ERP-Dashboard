const express = require('express');
const router = express.Router();
const { markAttendance, getAttendance, getAllAttendance } = require('../controllers/attendanceController');
const authenticate = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');

router.post('/mark', authenticate, markAttendance);
router.get('/:userId', authenticate, getAttendance);
router.get('/', authenticate, authorizeRole(['admin', 'hr']), getAllAttendance);

module.exports = router;
