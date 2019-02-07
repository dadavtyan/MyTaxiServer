const express = require('express');
const router = express.Router();
const pool = require('../config/pool');

/**
 * Models
 */

const Driver = require('../models/driver')(pool);
const User = require('../models/user')(pool);


/**
 * Controllers
 */

const Transaction = require('../controllers/Transaction')(Driver);
const CreateDriver = require('../controllers/CreateDriver')(Driver);
const AuthController = require('../controllers/AuthController')(Driver);

const CreateUser = require('../controllers/CreateUser')(User);

const ChangeGeoData = require('../controllers/ChangeGeoData')(Driver,User);

router.post('/dRegister', CreateDriver.index);
router.post('/uRegister', CreateUser.index);

router.put('/setGeoData/:type', ChangeGeoData.setData);

router.put('/auth/:id', AuthController.index);
router.get('/find', Transaction.search);
router.get('/cancel', Transaction.cancel);
router.get('/confirmed', Transaction.confirmed);
router.get('/successfully', Transaction.successfully);

module.exports = router;

