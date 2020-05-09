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

  for (let i = 0; i < 25; i++) {
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

  pObj = docx.createP();
  // pObj = docx.createListOfNumbers();
  pObj.addText('1. 文档中章节为常规检测项目，可结合实际检测需要增减章节。', {
    font_size: 12,
    font_face: '宋体',
  });

  pObj = docx.createP();
  pObj.addText('2. 文档中正文为示例文本，斜字体为相关技术要求。', {
    font_size: 12,
    font_face: '宋体',
  });

  pObj = docx.createP();
  pObj.addText('3. 文档格式设置见下表：', {
    font_size: 12,
    font_face: '宋体',
  });

  createPreparationTable(docx);

  pObj = docx.createP();
  pObj = docx.createP();
  pObj.addText(
    '4. 表头及图标编号格式按照“所在章节的标题-序号”进行编号，如所在章节为3.2.1章节，则表头命名为表3.2.1-1，图3.2.1-1。如在3.2章节，则命名为表3.2-1和图3.2-1。',
    {
      font_size: 12,
      font_face: '宋体',
    }
  );

  docx.putPageBreak();
}

// 报告声明
function createdeclaration(pObj, docx) {
  pObj = docx.createP({ align: 'center' });
  pObj.addText('报告声明：', {
    font_size: 18,
    font_face: '楷体',
    bold: true,
  });

  pObj = docx.createP();
  pObj.addText('1. 本报告涂改、错页、漏页无效；', {
    font_size: 12,
    font_face: '楷体',
  });

  pObj = docx.createP();
  pObj.addText('2. 检测单位名称与检测试验专用章名称不符者无效；', {
    font_size: 12,
    font_face: '楷体',
  });

  pObj = docx.createP();
  pObj.addText('3. 本报告无本公司相关技术资格证书章无效；', {
    font_size: 12,
    font_face: '楷体',
  });

  pObj = docx.createP();
  pObj.addText('4. 本报告无检测人员、校核人、审核人签字无效；', {
    font_size: 12,
    font_face: '楷体',
  });

  pObj = docx.createP();
  pObj.addText('5. 未经同意不得将报告复制或作为他用；', {
    font_size: 12,
    font_face: '楷体',
  });

  pObj = docx.createP();
  pObj.addText(
    '6. 对本报告如有异议或存在争议，请在报告发出后15天内向本公司书面质疑，本公司承诺于10天内给予答复，并对本报告内容做出合理的、科学的诠释，逾期将不予受理；',
    {
      font_size: 12,
      font_face: '楷体',
    }
  );

  pObj = docx.createP();
  pObj.addText('7. 本报告结果仅对送检样品及被检测对象有效；', {
    font_size: 12,
    font_face: '楷体',
  });

  pObj = docx.createP();
  pObj.addText('8. 本公司特别告知：伪造本报告将承担法律责任。', {
    font_size: 12,
    font_face: '楷体',
  });

  for (let i = 0; i < 16; i++) {
    pObj = docx.createP();
  }

  pObj.addText(' 检测单位：青岛中航工程试验检测有限公司', {
    font_size: 12,
    font_face: '楷体',
  });

  pObj = docx.createP();
  pObj.addText(' 检测资质证书：交SJCA甲010、交SJCB甲013、鲁GJC乙014', {
    font_size: 12,
    font_face: '楷体',
  });

  pObj = docx.createP();
  pObj.addText(' 计量资质证书：2013150032R', {
    font_size: 12,
    font_face: '楷体',
  });

  pObj = docx.createP();
  pObj.addText(' 通讯地址：青岛市市北区瑞海北路1号', {
    font_size: 12,
    font_face: '楷体',
  });

  pObj = docx.createP();
  pObj.addText(' 通讯电话：0532-83733684', {
    font_size: 12,
    font_face: '楷体',
  });

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

// 页码

module.exports = createPerface;
