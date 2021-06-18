const path = require('path');
function getMessages(req, res) {
  res.render('messages', {
    title: 'Manuscripts',
    buddy: 'Ricky Bobby'
  });
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'mountain.jpg'));
};

function postMessage(req, res) {
  res.send('Updating messages');
};

module.exports = {
  getMessages,
  postMessage
};
