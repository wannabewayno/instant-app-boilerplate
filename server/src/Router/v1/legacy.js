const { ExampleLegacyController } = require('../../Controllers/v1');
const express = require('express');

const router = express.Router();

router.get('/', ExampleLegacyController.get);

module.exports = router;