const express = require('express');
const { getRoot } = require('../controllers/rootControllers');

const router = express.Router();

router.get('^/$|/index(.html)?', getRoot);

module.exports = router;
