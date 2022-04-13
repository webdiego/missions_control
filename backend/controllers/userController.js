const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

//@desc       Register new users
//@route      POST /api/users
//@access     Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  const userExist = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (userExist) {
    res.status(400);
    throw new Error('User already exist');
  }

  // Hash psw
  const salt = await bcrypt.genSalt(10);
  const hashedPsw = await bcrypt.hash(password, salt);

  //Create user
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPsw,
    },
  });

  //Check if the user has been created
  if (user) {
    res.status(201).json({
      id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

//@desc       Get users
//@route      POST /api/users/login
//@access     Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  //Check user email
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
    select: {
      username: true,
      password: true,
      email: true,
      id: true,
    },
  });

  let pswCompared = await bcrypt.compare(password, user.password);

  if (user && pswCompared) {
    res.status(201).json({
      id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid credential');
  }
});

//@desc       Get users
//@route      GET /api/users/me
//@access     Private
const getMe = asyncHandler(async (req, res) => {
  let idReq = req.user.id;
  const user = await prisma.user.findUnique({
    where: { id: idReq },
    select: {
      email: true,
      username: true,
    },
  });

  res.status(200).json({ email: user.email, username: user.username });
});

//Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
