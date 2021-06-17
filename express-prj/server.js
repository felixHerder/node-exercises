const express = require('express');

const app = express();

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
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(req.method, req.url, 'in', delta, 'ms');
})

app.use(express.json());

app.get('/buddies', (req, res) => {
  res.json(buddies);
});

app.get('/buddies/:bid', (req, res) => {
  const bid = Number(req.params.bid);
  const buddy = buddies[bid];
  if (buddy) {
    res.status(200).json(buddies[bid]);
  } else {
    res.status(404).json({
      error: "Friend does not exist"
    })
  }
});
app.get('/messages', (req, res) => {
  res.send('<ul><li>Hi Bob!</li></ul>');
});

app.post('/buddies', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing buddy name'
    });
  }
  const newBuddy = {
    name: req.body.name,
    id: buddies.length
  }
  buddies.push(newBuddy);
  res.json(newBuddy);
});

app.listen(PORT, () => console.log('Listening on port', PORT));