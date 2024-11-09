const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const authenticate = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');

router.get('/', authenticate, authorizeRole(['admin']), getAllUsers);
router.get('/:id', authenticate, getUserById);
router.put('/:id', authenticate, authorizeRole(['admin', 'hr']), updateUser);
router.delete('/:id', authenticate, authorizeRole(['admin']), deleteUser);

module.exports = router;
