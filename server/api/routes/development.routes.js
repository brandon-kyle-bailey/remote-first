const controller = require('../controllers/development.controller');
const routes = require('express').Router();
// const authMiddleware = require('../middleware/auth.middleware');

routes.get("/alive", controller.getAlive);

module.exports = routes;