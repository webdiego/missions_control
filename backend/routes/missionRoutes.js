const express = require('express');
const router = express.Router();
const {
  getMissions,
  setMission,
  updateMission,
  deleteMission,
} = require('../controllers/missionController.js');

const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getMissions);

router.post('/', protect, setMission);

router.put('/:id', protect, updateMission);

router.delete('/:id', protect, deleteMission);

module.exports = router;
