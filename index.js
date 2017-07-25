const express     = require('express');
const http        = require('http');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const app         = express();

app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*' }))

app.get('/', function(req, res){
  res.send('hello world!');
});


const port = process.env.PORT || 3090;
const server = http.createServer(app)
server.listen(port);

console.log('listening on port ', port);
