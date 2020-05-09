const createAppLevelTable = require('./createAppLevelTable');
const createAppResultTable = require('./createAppResultTable');
const createImageTable = require('./createImageTable');
const createDemageTable = require('./createDemageTable');
const createDeteriorationTable = require('./createDeteriorationTable');

function createChapter2(pObj, docx, path) {
  const style_14 = {
    font_size: 14,
    font_face: '宋体',
    bold: true,
  };

  const style_12_b = {
    font_size: 12,
    font_face: '宋体',
    bold: true,
  };

  const style_12_u = {
    font_size: 12,
    font_face: '宋体',
    underline: true,
  };

  const style_12 = {
    font_size: 12,
    font_face: '宋体',
  };

  const style_10 = {
    font_size: 10.5,
    font_face: '宋体',
    bold: true,
  };

  pObj = docx.createP({ align: 'center' });
  pObj.addText('第2章 构件外观检查', {
    font_size: 18,
    font_face: '宋体',
    bold: true,
  });

  pObj = docx.createP();
  pObj.addText('2.1 检测说明', style_14);

  pObj = docx.createP();
  pObj.addText('2.1.1 检测方法', style_12_b);

  pObj = docx.createP();
  pObj.addText(
    '    主要采取目测、摄影、摄像、敲击、尺量等办法，全面描述码头构件的外观缺陷（包括面层、面板、横梁、纵撑、墩台、桩帽、靠船构件、水平撑、胸墙、沉箱等），详细记录并描述构件的裂缝（位置、长度、宽度和走向）、表观缺陷（包括蜂窝、麻面、露石）、混凝土起鼓（剥离）、剥落、露筋（位置、数量、长度、面积）等情况。',
    style_12
  );

  pObj = docx.createP();
  pObj.addText('2.1.2 劣化度分级', style_12_b);

  pObj = docx.createP();
  pObj.addText(
    '    外观劣化度分级按《水运工程水工建筑物检测与评估技术规范》（JTS304-2019）表2.1.2-1：',
    {
      font_size: 12,
      font_face: '宋体',
    }
  );

  pObj = docx.createP({ align: 'center' });
  pObj.addText('表2.1.2-1 外观劣化度分级表', style_10);
  createAppLevelTable(docx);
  pObj = docx.createP();

  pObj = docx.createP();
  pObj.addText('2.1.3 外观描述标准', style_12_b);

  pObj = docx.createP();
  pObj.addText(
    '    外观描述用语及标准依照《港口设施维护技术规范》（JTS310-2013）（JTS310-2013）4.1.1有关条款：',
    style_12
  );

  pObj = docx.createP();
  pObj.addText(
    '    1) “个别”、“少量”、“大量”为描述结构损坏或劣化数量的用语，根据损坏或劣化数量对结构功能的影响，按下列百分比掌握：',
    style_12
  );

  pObj = docx.createP();
  pObj.addText(
    '    a. 当出现损坏或劣化的数量按构件数量比例统计时，“个别”为小于构件总数量的10%，“少量”为构件总数量的10%～20%，“大量”为构件总数量的20%以上；',
    style_12
  );

  pObj = docx.createP();
  pObj.addText(
    '    b. 当出现损坏或劣化的数量按占所在面积或所在构件长度比例统计时，“个别”为小于所在面积或构件长度的10%，“少量”为所在面积或构件长度的10%~20%，“大量”为所在面积或构件长度的20%以上；',
    style_12
  );

  pObj = docx.createP();
  pObj.addText(
    '    2) “轻度”、“中度”、“严重”是描述结构损坏或劣化程度的用语，根据损坏或劣化的程度对结构功能和耐久性的影响程度规定如下：',
    style_12
  );

  pObj = docx.createP();
  pObj.addText(
    '    a. 对于桩、梁、板、沉箱、扶壁等构件裂缝，“轻度”为一般裂缝，裂缝宽度小于0.3mm；“中度”为顺筋裂缝，裂缝宽度在0.3mm~1.0mm之间，无结构裂缝；“严重”为涨裂性顺筋裂缝或网状裂缝，裂缝宽度大于1.0mm，或有贯穿性裂缝；',
    style_12
  );

  pObj = docx.createP();
  pObj.addText(
    '    b. 对于方块、胸墙、墩台等构件，“轻度裂缝”为裂缝宽度小于0.5mm；“中度裂缝”为裂缝宽度在0.5~3.0mm；“严重裂缝”为裂缝宽度大于3.0mm；',
    style_12
  );

  pObj = docx.createP();
  pObj.addText(
    '    c. 对混凝土构件表面剥落露石，“轻度”为个别处剥落露石；“中度”为少量剥落露石，深度未超过钢筋保护层；“严重”为大量剥皮露石，深度超过钢筋保护层或形成空穴；',
    style_12
  );

  pObj = docx.createP();
  pObj.addText(
    '    d. 对混凝土表面破损，“轻度”为破损深度较小或深度不超过钢筋保护层厚度；“中度”为破损深度较大或超过钢筋保护层厚度或外层钢筋暴露；“严重”为破损深度或面积较大或钢筋暴露；',
    style_12
  );

  pObj = docx.createP();
  pObj.addText(
    '    e. 对砌体，“轻度”为砌体微细裂缝或松动；“中度”为砌体明显裂缝或松动；“严重”为有局部断裂或崩塌；',
    style_12
  );

  pObj = docx.createP();
  pObj.addText(
    '    f. 对抛筑体，“轻度”为护面块体少量稀疏或松动；“中度”为护面块体有明显松动和下滑拔缝；“严重”为局部崩塌；',
    style_12
  );

  pObj = docx.createP();
  pObj.addText(
    '    g. 对混凝土面层和铺砌面层，“轻度”为有一般裂缝或表面缺陷；“中度”为有浅坑槽或板块断裂；“严重”为有普遍坑洼或严重破损；',
    style_12
  );

  pObj = docx.createP();
  pObj.addText(
    '    h. 对沥青混凝土面层，“轻度”为有裂缝或一般缺陷；“中度”为有坑槽或波浪型起伏；“严重”为有普遍坑洼或严重破损。',
    style_12
  );

  pObj = docx.createP();
  pObj.addText('2.2 水上构件检测结果', style_14);

  pObj = docx.createP();
  pObj.addText(
    '    依照构件类型，逐一，为方便，此处采用完好类和损坏类两大类别进行说明。',
    style_12
  );

  pObj = docx.createP();
  pObj.addText('2.2.1 完好类构件', style_12_b);

  pObj = docx.createP();
  pObj.addText(
    '    经检查，构件（构件名称）未发现耐久性劣化或结构损伤问题，构件外观完好。现状照片如下：',
    style_12
  );

  pObj = docx.createP();
  pObj.addText('2.2.2 损坏类类构件', style_12_b);

  pObj = docx.createP();
  pObj.addText('    经检查，', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText(
    '个构件出现不同程度损坏，主要为开裂、破损及露筋锈蚀现象，为劣化及受力所致。检测结果如下表：',
    style_12
  );

  pObj = docx.createP({ align: 'center' });
  pObj.addText('表2.2.2-1 外观检查结果表', style_10);
  createAppResultTable(docx);

  docx.putPageBreak();
  createImageTable(pObj, docx, path);

  pObj = docx.createP();
  pObj.addText('2.3 本章小结', style_14);

  pObj = docx.createP();
  pObj.addText('2.3.1 非耐久性检查结果', style_12_b);

  pObj = docx.createP();
  pObj.addText('    经检查，码头发现', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('个构件存在非耐久性的损坏。', style_12);

  pObj = docx.createP();
  pObj.addText(
    '码头各类型构件损伤程度比例见下表（耐久性问题除外）。',
    style_12
  );

  pObj = docx.createP({ align: 'center' });
  pObj.addText('表2.3.1-1 损伤程度汇总表', style_10);
  createDemageTable(docx);
  pObj = docx.createP();

  pObj = docx.createP();
  pObj.addText('2.3.2 耐久性劣化外观检查结果', style_12_b);

  pObj = docx.createP();
  pObj.addText('    经检查，码头发现', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('个构件出现耐久性劣化现象，码头整体劣化度评级为', style_12);
  pObj.addText('级。');

  pObj = docx.createP();
  pObj.addText(
    '码头各类型构件劣化度外观检查结果比例见下表（非耐久性问题除外）。',
    style_12
  );

  pObj = docx.createP({ align: 'center' });
  pObj.addText('表2.3.2-1 劣化评级汇总表', style_10);
  createDeteriorationTable(docx);

  docx.putPageBreak();
}

module.exports = createChapter2;
