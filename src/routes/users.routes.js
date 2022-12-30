const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.post('/createUser', userController.createUser);

module.exports = router;