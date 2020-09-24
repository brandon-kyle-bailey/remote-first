const controller = require('../controllers/job.controller');
const routes = require('express').Router();
const authMiddleware = require('../middleware/auth.middleware');
const validateMiddleware = require('../middleware/validate.middleware');

routes.get("/all", 
            authMiddleware.hasJobApiPrivileges, 
            controller.getAllJobs);

routes.post("/create", 
            authMiddleware.hasJobApiPrivileges,
            validateMiddleware.validateCreateJobForm,
            controller.createJob);

routes.put("/update/:id", 
            validateMiddleware.validateJobId,
            controller.updateJob);

module.exports = routes;