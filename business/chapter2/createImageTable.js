function createImageTable(pObj, docx, path, data) {
  data = [
    {
      path: '../../images/test1.png',
      name: '5-9横梁2'
    },
    {
      path: '../../images/test2.png',
      name: '5-11面板1'
    },
  ]

  const no = '2.2.2-';

  const opts_img = {
    cx: 280,
    cy: 200,
  }

  const opts_name = {
    font_size: 10.5,
    font_face: '宋体',
    bold: true,
  };

  let length = data.length;
  (length % 2 === 0) ? (length) : (length = length - 1)

  for (let i = 0; i < length; i++) {
    if (length < 5) {
      if (i % 2 == 0) {
        pObj = docx.createP({ align: 'center' });
        pObj.addImage(path.resolve(__dirname, data[i]['path']), opts_img);
        pObj.addText('      ');
        pObj.addImage(path.resolve(__dirname, data[i+1]['path']), opts_img);
        pObj = docx.createP({ align: 'center' });
        pObj.addText(`${no + i + 1} ${data[i]['name']}`, opts_name);
        pObj.addText('                                                ');
        pObj.addText(`${no}i ${data[i+1]['name']}`, opts_name);
      }
    }
  }
}

module.exports = createImageTable;
