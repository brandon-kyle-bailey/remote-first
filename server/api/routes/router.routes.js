const express = require('express');
const router = express.Router();

const jobRoutes = require('./job.routes');
const developmentRoutes = require('./development.routes');

router.use('/jobs', jobRoutes);
router.use('/dev', developmentRoutes);

module.exports = router;