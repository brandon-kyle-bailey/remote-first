const controller = require('../controllers/job.controller');
const routes = require('express').Router();
const authMiddleware = require('../middleware/auth.middleware');
const validateMiddleware = require('../middleware/validate.middleware');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

routes.get("/get/all", 
            authMiddleware.hasJobApiPrivileges, 
            controller.getMethods.getJobs);

routes.get("/get/:id", 
            authMiddleware.hasJobApiPrivileges, 
            controller.getMethods.getJob);

routes.post("/post/one", 
            authMiddleware.hasJobApiPrivileges,
            validateMiddleware.validateCreateJobForm,
            controller.postMethods.postJob);

routes.post("/post/all", 
            authMiddleware.hasJobApiPrivileges,
            upload.single('uploaded_file'), // this needs to be cleaner
            controller.postMethods.postJobs);

routes.put("/put/:id", 
            validateMiddleware.validateJobId,
            controller.putMethods.putJob);

routes.delete("/delete/:id", 
            validateMiddleware.validateJobId,
            controller.deleteMethods.deleteJob);

module.exports = routes;