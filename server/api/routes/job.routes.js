const model = require('../controllers/job.controller');
const routes = require('express').Router();
const authMiddleware = require('../middleware/auth.middleware');

routes.get("/all", authMiddleware.hasJobApiPrivileges, model.getAllJobs);

module.exports = routes;