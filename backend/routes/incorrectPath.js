const router = require('express').Router();
const { handleIncorrectPath } = require('../controllers/incorrectPath');

router.all('*', handleIncorrectPath);

module.exports = router;
