const { ExampleController } = require('../../Controllers/v2');
const express = require('express');

const router = express.Router();

router.get('/', ExampleController.get);

module.exports = router;