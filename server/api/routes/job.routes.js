const controller = require('../controllers/job.controller');
const routes = require('express').Router();
const authMiddleware = require('../middleware/auth.middleware');
const validateMiddleware = require('../middleware/validate.middleware');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

routes.get("/all", 
            authMiddleware.hasJobApiPrivileges, 
            controller.getAllJobs);

routes.post("/create", 
            authMiddleware.hasJobApiPrivileges,
            validateMiddleware.validateCreateJobForm,
            controller.createJob);

routes.post("/ingest", 
            authMiddleware.hasJobApiPrivileges,
            upload.single('uploaded_file'), // this needs to be cleaner
            controller.createMultipleJobs);

routes.put("/update/:id", 
            validateMiddleware.validateJobId,
            controller.updateJob);

module.exports = routes;