const fs = require('fs');
const officegen = require('officegen');
const express = require('express');
const app = express();
const path = require('path');

const createPreface = require('./business/perface/createPreface');

app.get('/create_word', function (req, res) {
  res.writeHead(200, {
    'Content-Type':
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  });

  let docx = officegen({
    type: 'docx',
    pageMargins: {
      top: 1500, right: 1100, bottom: 1750, left: 1400 
    }
  });

  docx.on('finalize', (written) => {
    console.log('Finish to create a Microsoft Word document');
  });

  docx.on('error', (err) => {
    console.log(err);
  });

  let pObj = docx.createP();

  createPreface(pObj, docx, path);

  let out = fs.createWriteStream('结构检测报告.docx');

  out.on('error', (err) => {
    console.log(err);
  });

  docx.generate(out);
});

const server = app.listen(8081, () => {
  console.log('listening on 8081');
});
