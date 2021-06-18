const express = require('express');

const buddiesController = require('../controllers/buddies.controller');

const buddiesRouter = express.Router();

buddiesRouter.use((req, res, next) => {
  console.log('ip:', req.ip);
  next();
})
buddiesRouter.get('/', buddiesController.getBuddies);
buddiesRouter.get('/:bid', buddiesController.getBuddy);
buddiesRouter.post('/', buddiesController.postBuddy);

module.exports = buddiesRouter;