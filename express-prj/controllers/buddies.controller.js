const model = require('../models/buddies.model')

function postBuddy(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing buddy name'
    });
  }
  const newBuddy = {
    name: req.body.name,
    id: model.length
  }
  model.push(newBuddy);
  res.json(newBuddy);
}

function getBuddy(req, res) {
  const bid = Number(req.params.bid);
  const buddy = model[bid];
  if (buddy) {
    res.status(200).json(model[bid]);
  } else {
    res.status(404).json({
      error: "Friend does not exist"
    })
  }
}

function getBuddies(req, res) {
  res.json(model);
}

module.exports = {
  getBuddies,
  getBuddy,
  postBuddy
}