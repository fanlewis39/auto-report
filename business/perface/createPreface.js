const createSignTable = require('./createSignTable');
const createPreparationTable = require('./createPreparationTable');

const months = [
  '一',
  '二',
  '三',
  '四',
  '五',
  '六',
  '七',
  '八',
  '九',
  '十',
  '十一',
  '十二',
];

let currentMonth = new Date().getMonth();

currentMonth = months[currentMonth];

function createPerface(pObj, docx, path) {
  createFirstPage(pObj, docx);
  createStatementPage(pObj, docx);
  createdeclaration(pObj, docx);
  createSignPage(pObj, docx);
  createLevelCertificatePage(pObj, docx, path);
}

// 首页
function createFirstPage(pObj, docx) {
  pObj = docx.createP();
  pObj = docx.createP({ align: 'center' });

  pObj.addText('结构检测报告', {
    font_size: 26,
    font_face: '楷体',
    bold: true,
  });

  for (let i = 0; i < 19; i++) {
    pObj = docx.createP();
  }

  pObj = docx.createP({ align: 'center' });
  pObj.addText('青岛中航工程试验检测有限公司', {
    font_size: 18,
    font_face: '楷体',
    bold: true,
  });

  pObj = docx.createP({ align: 'center' });
  pObj.addText(`二0二0年${currentMonth}月`, {
    font_size: 18,
    font_face: '楷体',
    bold: true,
  });

  docx.putPageBreak();
}

  // 编制说明
function createStatementPage(pObj, docx) {
  pObj = docx.createP({ align: 'center' });
  pObj.addText('编制说明', {
    font_size: 16,
    font_face: '楷体',
    bold: true,
  });

  pObj = docx.createListOfNumbers();
  pObj.addText('文档中章节为常规检测项目，可结合实际检测需要增减章节。', {
    font_size: 12,
    font_face: '宋体',
  });

  pObj = docx.createListOfNumbers();
  pObj.addText('文档中正文为示例文本，斜字体为相关技术要求。', {
    font_size: 12,
    font_face: '宋体',
  });

  pObj = docx.createListOfNumbers();
  pObj.addText('文档格式设置见下表：', {
    font_size: 12,
    font_face: '宋体',
  });

  createPreparationTable(docx);

  pObj = docx.createP();
  pObj = docx.createListOfNumbers();
  pObj.addText('表头及图标编号格式按照“所在章节的标题-序号”进行编号，如所在章节为3.2.1章节，则表头命名为表3.2.1-1，图3.2.1-1。如在3.2章节，则命名为表3.2-1和图3.2-1。', {
    font_size: 12,
    font_face: '宋体',
  });

  docx.putPageBreak();
}

// 报告声明
function createdeclaration(pObj, docx) {
  pObj = docx.createP({ align: 'center' });

  docx.putPageBreak();
}

// 签署页
function createSignPage(pObj, docx) {
  pObj = docx.createP({ align: 'center' });
  pObj.addText('签署页', {
    font_size: 24,
    font_face: '宋体',
    bold: true,
  });

  createSignTable(docx);

  docx.putPageBreak();
}

  // 等级证书
  function createLevelCertificatePage(pObj, docx, path) {
    pObj = docx.createP({ align: 'center' });
    pObj.addImage(path.resolve(__dirname, '../../images/level-certificate.jpg'), {
      cx: 650,
      cy: 900,
    });
  }

module.exports = createPerface;
