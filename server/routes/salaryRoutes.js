const express = require('express');
const router = express.Router();
const { getSalaryByUserId, updateSalary } = require('../controllers/salaryController');
const authenticate = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');

router.get('/:userId', authenticate, getSalaryByUserId);
router.put('/:userId', authenticate, authorizeRole(['admin', 'hr']), updateSalary);

module.exports = router;
