const axios = require('axios');

axios.get('https://google.com')
  .then((resp) => {
    console.log(resp);
  })
  .catch(err => {
    console.log(err);
  })
  .then(() => {
    console.log('all done and more ');
  })