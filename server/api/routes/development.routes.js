const model = require('../controllers/development.controller');
const routes = require('express').Router();
// const authMiddleware = require('../middleware/auth.middleware');

routes.get("/alive", model.getAlive);

module.exports = routes;