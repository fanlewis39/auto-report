const fs = require('fs');
const officegen = require('officegen');
const express = require('express');
const app = express();
const path = require('path');

const createPreface = require('./business/perface/createPreface');
const createChapter1 = require('./business/chapter1/createChapter1');
const createChapter2 = require('./business/chapter2/createChapter2');
const createChapter3 = require('./business/chapter3/createChapter3');

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
  createChapter1(pObj, docx);
  createChapter2(pObj, docx, path);
  createChapter3(pObj, docx, path);

  let out = fs.createWriteStream('结构检测报告.docx');

  out.on('error', (err) => {
    console.log(err);
  });

  docx.generate(out);
});

const server = app.listen(8081, () => {
  console.log('listening on 8081');
});
