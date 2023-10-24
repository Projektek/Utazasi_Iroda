const express = require('express');
const {
    getUtazasok,
    getFeltolt,
    postUtazas,
    putModosit,
    getModosit,
    deleteUtazas,
} = require('../controllers/utazasokControllers');

const router = express.Router();

router.get('/', getUtazasok);
router.get('/feltolt', getFeltolt);
router.put('/modositas', putModosit);
router.get('/modositas/:id', getModosit);
router.delete('/torles', deleteUtazas);
router.post('/', postUtazas);

module.exports = router;
