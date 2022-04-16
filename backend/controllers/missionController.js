const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('express-async-handler');

const prisma = new PrismaClient();

//@desc       Get missions
//@route      GET /api/missions
//@access     Private
const getMissions = asyncHandler(async (req, res) => {
  let idReq = req.user.id;
  const missions = await prisma.user.findUnique({
    where: {
      id: idReq,
    },
    select: {
      missions: true,
    },
  });

  res.status(200).json({ message: `Get missions`, missions });
});

//@desc       Post mission
//@route      POST /api/missions
//@access     Private
const setMission = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error('Please add text');
  }
  let userId = req.user.id;
  const { text } = req.body;

  const mission = await prisma.missions.create({
    data: { text, userId },
  });

  res.status(200).json({ message: 'Set mission', mission });
});

//@desc       Put Mission
//@route      Put /api/mission/:id
//@access     Private
const updateMission = asyncHandler(async (req, res) => {
  const { text } = req.body;
  const { id } = req.params;

  let userId = req.user.id;

  //Find user by id
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      missions: true,
    },
  });

  if (!user) {
    res.status(400);
    throw new Error('User not found');
  }

  //Check if the mission exist
  const findMission = await prisma.missions.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!findMission) {
    res.status(400);
    throw new Error('Mission not found');
  }

  //Update mission
  const updatedMission = await prisma.missions.update({
    where: {
      id: Number(id),
    },
    data: {
      text: text,
    },
  });

  res.status(200).json({ message: 'Update mission', updatedMission });
});

//@desc       Delete mission
//@route      Delete /api/missions/:id
//@access     Private
const deleteMission = asyncHandler(async (req, res) => {
  const { id } = req.params;
  let userId = req.user.id;

  //Find user by id
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      missions: true,
    },
  });

  if (!user) {
    res.status(400);
    throw new Error('User not found');
  }

  //Check if the mission exist
  const findMission = await prisma.missions.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!findMission) {
    res.status(400);
    throw new Error('Mission not found');
  }

  const deletedMission = await prisma.missions.delete({
    where: {
      id: Number(id),
    },
  });

  res.status(200).json({ message: 'Deleted Mission', deletedMission });
});

module.exports = {
  getMissions,
  setMission,
  updateMission,
  deleteMission,
};
