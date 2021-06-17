const http = require('http');

const PORT = 3000;

const buddies = [
  {
    id: 0,
    name: 'Nikola Tesla'
  },
  {
    id: 1,
    name: 'Freddie Mercury'
  },
  {
    id: 2,
    name: 'David Bowey'
  }
]

const server = http.createServer();
server.on('request', (req, res) => {
  const items = req.url.split('/');
  if (req.method === "POST" && items[1] === 'buddies') {
    req.on('data', data => {
      const buddy = data.toString();
      console.log('request:', buddy);
      buddies.push(JSON.parse(buddy));
    });
    req.pipe(res);
  }
  else if (req.method === "GET" && items[1] === 'buddies') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    if (items.length === 3) {
      const buddyIndex = Number(items[2])
      res.end(JSON.stringify(buddies[buddyIndex]));
    }
    else {
      res.end(JSON.stringify(buddies));
    }
  }
  else if (items[1] === '/messages') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>Howdy Mark</li>');
    res.write('<li>Where Astronomy?</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  }
  else {
    res.statusCode = 404;
    res.end();
  }
})

server.listen(PORT, () => {
  console.log('listening on port', PORT);
});