const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('express-async-handler');

const prisma = new PrismaClient();

//@desc       Get missions
//@route      GET /api/missions
//@access     Private
const getMissions = asyncHandler(async (req, res) => {
  const missions = await prisma.missions.findMany();
  console.log(missions);
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
  const { text } = req.body;

  const mission = await prisma.missions.create({
    data: { text: text },
  });

  res.status(200).json({ message: 'Set mission', mission });
});

//@desc       Put Mission
//@route      Put /api/mission/:id
//@access     Private
const updateMission = asyncHandler(async (req, res) => {
  const { text } = req.body;
  const { id } = req.params;

  const findMission = await prisma.missions.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!findMission) {
    res.status(400);
    throw new Error('Mission not found');
  }

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

  const findMission = await prisma.missions.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!findMission) {
    res.status(400);
    throw new Error('Goal not found');
  }
  
  const deletedMission = await prisma.missions.delete({
    where: {
      id: Number(id),
    },
  });

  res.status(200).json({ message: 'Delete goal', deletedMission });
});

module.exports = {
  getMissions,
  setMission,
  updateMission,
  deleteMission,
};
