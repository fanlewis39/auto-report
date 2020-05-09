const createEquipmentTable = require('./createEquipmentTable');

function createChapter1(pObj, docx) {
  const style_14 = {
    font_size: 14,
    font_face: '宋体',
    bold: true,
  };

  const style_12 = {
    font_size: 12,
    font_face: '宋体',
    bold: true,
  };

  const style_10 = {
    font_size: 10.5,
    font_face: '宋体',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    bold: true,
  }

  pObj = docx.createP({ align: 'center' });
  pObj.addText('第1章 概述', {
    font_size: 18,
    font_face: '宋体',
    bold: true,
    spacing: 120,
  });
  pObj = docx.createP();
  pObj.addText('1.1 项目概况', style_14);

  pObj = docx.createP();
  // pObj.addText(
  //   '  码头基本情况介绍：地理位置、建设年份、建设规模、参建单位。',
  //   style_12
  // );

  // pObj = docx.createP();
  // pObj.addText(
  //   '  码头基本结构情况介绍：泊位数量、平面布置、结构型式、设计用途和基本设计参数（如码头面标高，前沿泥面标高，设计水深等）。',
  //   style_12
  // );

  pObj = docx.createP();
  pObj.addText('1.2 项目由来', style_14);

  pObj = docx.createP();
  // pObj.addText(
  //   '  码头基本情况介绍：地理位置、建设年份、建设规模、参建单位。',
  //   style_12
  // );

  // pObj = docx.createP();
  // pObj.addText(
  //   '  1、建筑物达到设计使用年限需继续使用，需检测评估结构为发生突发事故，需要鉴定结构损坏程度，鉴定；',
  //   style_12
  // );

  // pObj = docx.createP();
  // pObj.addText('  2、改变建筑物的功能或使用条件；', style_12);

  // pObj = docx.createP();
  // pObj.addText(
  //   '  3、受地震、台风、海啸、洪水、爆炸等重大灾害影响致建筑物出现损伤；',
  //   style_12
  // );

  // pObj = docx.createP();
  // pObj.addText(
  //   '  4、建筑物出现影响其安全使用的变形、位移、裂缝、破损和耐久性损伤等；',
  //   style_12
  // );

  // pObj = docx.createP();
  // pObj.addText(
  //   '  5、偶发事故影响导致建筑物局部受损，为鉴定损伤程度和明确范围；',
  //   style_12
  // );

  // pObj = docx.createP();
  // pObj.addText('  6、钢材锈蚀或混凝土劣化导致结构明显损坏；', style_12);

  // pObj = docx.createP();
  // pObj.addText('  7、建筑物的防腐蚀措施达到设计保护年限；', style_12);

  // pObj = docx.createP();
  // pObj.addText('  8、为核发、换发《港口经营许可证》而做的检测评估。', style_12);

  pObj = docx.createP();
  pObj.addText('1.3 检测依据', style_14);

  pObj = docx.createP();
  pObj.addText('1.3.1 文件资料', style_12);

  pObj = docx.createP();
  pObj.addText('', style_12);

  pObj = docx.createP();
  pObj.addText('1.3.2 规范标准', style_12);

  pObj = docx.createP();
  pObj.addText('', style_12);

  pObj = docx.createP();
  pObj.addText('1.4 工作内容', style_14);

  pObj = docx.createP({ align: 'center' });
  pObj.addText('表1.4-1 检测内容一览表示意', style_10);
  pObj = docx.createP();

  pObj = docx.createP();
  pObj.addText('1.5 仪器设备', style_14);

  pObj = docx.createP({ align: 'center' });
  pObj.addText('表1.5-1 主要仪器设备一览表', style_10);
  createEquipmentTable(docx);
  pObj = docx.createP();

  pObj = docx.createP();
  pObj.addText('1.6 结构型式', style_14);

  pObj = docx.createP();

  pObj = docx.createP();
  pObj.addText('1.7 编号方法', style_14);

  pObj = docx.createP();
  pObj.addText('1.7.1 高桩式结构', style_12);

  pObj = docx.createP();

  pObj = docx.createP();
  pObj.addText('1.7.2 重力式、板桩式或斜坡式结构', style_12);

  docx.putPageBreak();
}

module.exports = createChapter1;
