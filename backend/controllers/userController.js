const asyncHandler = require('express-async-handler');

//@desc       Register new users
//@route      POST /api/users
//@access     Public
const registerUser = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error('Please add text');
  }
  res.status(200).json({ message: 'Register user' });
});

//@desc       Get users
//@route      POST /api/users/login
//@access     Public
const loginUser = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error('Please add text');
  }
  res.status(200).json({ message: 'Login user' });
});

//@desc       Get users
//@route      GET /api/users/me
//@access     Private
const getMe = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error('Please add text');
  }
  res.status(200).json({ message: 'User' });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
