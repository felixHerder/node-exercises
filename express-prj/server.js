const express = require('express');
const path = require('path');

const buddiesRouter = require('./routes/buddies.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(req.method, req.baseUrl + req.url, 'in', delta, 'ms');
})

app.use('/site', express.static(path.join(__dirname, 'public')));
console.log(__dirname);
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Mountain folk',
    caption: 'Apalachia mountaneers'
  })
})
app.use('/buddies', buddiesRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => console.log('Listening on port', PORT));