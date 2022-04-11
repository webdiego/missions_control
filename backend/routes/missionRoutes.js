const express = require('express');
const router = express.Router();
const { getMissions, setMission, updateMission, deleteMission } = require('../controllers/missionController.js');

router.get('/', getMissions);

router.post('/', setMission);

router.put('/:id', updateMission);

router.delete('/:id', deleteMission);
module.exports = router;
