const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile( __dirname + "/" + 'index.html');
})

const server = app.listen(8080, () => {
  console.log('listening on 8080');
})
