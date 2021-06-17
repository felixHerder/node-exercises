const { send } = require('./request.js');
const { read } = require('./response.js');
function req(url, data) {
  send(url, data);
  return read();
}

const resp = req('google.com', 'hello');
console.log(resp);