const { Router } = require('express');
const router = Router();
const countController = require('../controllers/count.controller')

router.get('/getCount',  countController.getCount);

router.post('/masUno', countController.setCount);

module.exports = router