const User = require('../models/userModel');

const authorizeRole = (roles) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.user);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      if (!roles.includes(user.role)) {
        return res.status(403).json({ message: 'Forbidden, access denied' });
      }

      next();
    } catch (err) {
      res.status(500).json({ message: 'Error checking user role', error: err });
    }
  };
};

module.exports = authorizeRole;
