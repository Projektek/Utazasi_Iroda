const express = require('express');
const {
    getIdegenvezetok,
    postIdegenvezetok,
    getFeltolt,
    getModosit,
    putModosit,
    deleteIdegenvezeto,
} = require('../controllers/idegenvezetokControllers');

const router = express.Router();

router.get('/', getIdegenvezetok);
router.get('/feltolt', getFeltolt);
router.put('/modositas', putModosit);
router.get('/modositas/:id', getModosit);
router.delete('/torles', deleteIdegenvezeto);
router.post('/', postIdegenvezetok);

module.exports = router;
