const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/',homeController.home);
router.post('/addTasks',homeController.addTasks);
module.exports=router;