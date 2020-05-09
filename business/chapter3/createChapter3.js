const createMonitorTable = require('./createMonitorTable');
const createSettlementTable = require('./createSettlementTable');
const createStructureTable = require('./createStructureTable');

function createChapter3(pObj, docx, path) {
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
  pObj.addText('第3章 码头结构变形与变位测量', {
    font_size: 18,
    font_face: '宋体',
    bold: true,
  });

  pObj = docx.createP();
  pObj.addText('3.1 检测说明', style_14);

  pObj = docx.createP();
  pObj.addText('3.1.1 测量系统布置原则', style_12_b);

  pObj = docx.createP();
  pObj.addText(
    '    码头变形变位测量按照《水运工程水工建筑物原型观测技术规范》（JTS235-2016）（JTS235-2016）第6.1-6.4节的相关规定进行，主要包括水平位移、垂直位移及倾斜情况。',
    style_12
  );

  pObj = docx.createP();
  pObj.addText(
    '    表面水平变位观测的测点应设置在水工建筑物周边线和转焦点、纵横轴线上、沉降缝两侧、基础或断面发生变化的两侧等。',
    style_12
  );

  pObj = docx.createP();
  pObj.addText(
    '    内部水平变位观测的测点位置和数量应按观测目的和要求确定。沿纵向的测点间距宜取20m~50m，竖向测点间距可取0.5m或1.0m。每个水平变位观测断面的观测点位不应少于2个，观测点位间距宜取6m~50m。',
    style_12
  );

  pObj = docx.createP();
  pObj.addText(
    '    码头未布设沉降位移观测系统，无法通过数据比对的方式判定码头的绝对位移和变形量，本次布设沉降位移观测系统，并记录首次测量数据，后期观测资料应作为安全性评估的补充和验证。同时采用检查结构分缝错缝情况、测量前沿线顺直度和面层相对高程来分析判断码头的变形与变位变化情况。',
    style_12
  );

  pObj = docx.createP();
  pObj.addText('3.1.2 测量系统布设', style_12_b);

  pObj = docx.createP();
  pObj.addText(
    '    简述测点布置的情况，包括基准点和测点断面、每个断面的点数和分布，测点布置见图3-1。',
    style_12
  );

  pObj = docx.createP({ align: 'center' });
  pObj.addText('图3.2.1-1  点位布设图', style_10);

  pObj = docx.createP();
  pObj.addText('3.1.3 测量方法', style_12_b);

  pObj = docx.createP();
  pObj.addText(
    '    观测码头的水平位移，优先引用绝对高程系统，如无，可布设独立沉降位移观测系统。观测方法一般采用以下两种方法。',
    style_12
  );

  pObj = docx.createP();
  pObj.addText('1) 水平位移测量', style_12);
  pObj = docx.createP();
  pObj.addText(
    '采用全站仪前方交会结合激光准直线法，测量各观测点平面坐标。',
    style_12
  );

  pObj = docx.createP();
  pObj.addText('2) 垂直位移测量', style_12);
  pObj = docx.createP();
  pObj.addText(
    '采用电子水准仪闭合回路几何水准法，测量各观测点的高程。',
    style_12
  );

  pObj = docx.createP();
  pObj.addText('3.1.4 首次测量数据', style_12_b);

  pObj = docx.createP({ align: 'center' });
  pObj.addText('表3.1.4-1 测量点数据', style_10);

  createMonitorTable(docx);
  pObj = docx.createP();

  pObj = docx.createP();
  pObj.addText('3.2 测量结果', style_14);

  pObj = docx.createP();
  pObj.addText('3.2.1 沉降测量', style_12_b);

  pObj = docx.createP();
  pObj.addText('    经测量，', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('年', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('月', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('日至', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('年', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('月', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('日期间，测得观测点', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('为最大沉降点，沉降值为', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('mm（精确至小数点后1位），沉降速率为', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText(
    'mm/d（精确至小数点后3位），尚未进入沉降稳定状态；其余观测点沉降值为',
    style_12
  );
  pObj.addText('    ', style_12_u);
  pObj.addText('mm ~', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('mm，沉降速率为', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('mm/d ~', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('mm/d，基本进入沉降稳定状态。结果详见下表。', style_12);

  pObj = docx.createP({ align: 'center' });
  pObj.addText('表3.2.1-1 沉降测量结果表', style_10);

  createSettlementTable(docx);
  pObj = docx.createP();

  pObj = docx.createP();
  pObj.addText('3.2.2 位移测量', style_12_b);

  pObj = docx.createP();
  pObj.addText('    经测量，', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('年', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('月', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('日至', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('年', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('月', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('日期间，测得观测点整体往东南方向移动，位移量为', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('mm ~', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('mm（精确至小数点后1位），位移速率为', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('mm/d ~', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText(
    'mm/d（精确至小数点后3位），有轻微位移，变形速率缓慢，整体较为稳定。结果详见下表。',
    style_12
  );

  pObj = docx.createP({ align: 'center' });
  pObj.addText('表3.2.2-1 位移测量结果表', style_10);

  pObj = docx.createP();
  pObj.addText('3.3 相对位移测量', style_14);

  pObj = docx.createP();
  pObj.addText('3.3.1 结构缝', style_12_b);

  pObj = docx.createP();
  pObj.addText(
    '    依照《水运工程水工建筑物原型观测技术规范》（JTS235-2016）第5.0.1.3节规定，观测结构缝的缝宽变化和相对错动情况。每条结构缝测测量3处缝宽，并检查前沿是否有错位变形，测量结果见下表。',
    style_12
  );

  pObj = docx.createP({ align: 'center' });
  pObj.addText('表3.3.1-1 结构缝测量结果', style_10);

  createStructureTable(docx);
  pObj = docx.createP();

  pObj = docx.createP();
  pObj.addText('3.3.2 前沿线位置', style_12_b);

  pObj = docx.createP();
  pObj.addText(
    '    依照《水运工程质量检验标准》（JTS257-2008）第4.2.0.1条规定，前沿线位置允许偏差为±50mm。在码头前沿每间隔10米布置1个测点，采用回归直线法测量各点位的偏差值。',
    style_12
  );

  pObj = docx.createP();
  pObj.addText('    测量结果表明，前沿线位置最大正偏差为', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('mm，最小正偏差为', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('mm；最大负偏差为        -', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('mm，最小负偏差为-', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('mm，合格率为100%，满足规范要求。测量结果详见下表。');

  pObj = docx.createP({ align: 'center' });
  pObj.addText('表3.2.1-1 沉降测量结果表', style_10);

  pObj = docx.createP();
  pObj.addText('3.3.3 前沿顶面标高', style_12_b);

  pObj = docx.createP();
  pObj.addText(
    '    依照《水运工程质量检验标准》（JTS257-2008）第4.2.0.1条规定，重力式码头前沿线位置允许偏差为±20mm（高桩码头和板桩码头为±15mm）。在码头前沿每间隔10米布置1个测点，采用回归直线法测量各点位的偏差值。',
    style_12
  );

  pObj = docx.createP();
  pObj.addText('    测量结果表明，前沿顶面标高最大正偏差为', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('mm，最小正偏差为', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('mm；最大负偏差为        -', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('mm，最小负偏差为-', style_12);
  pObj.addText('    ', style_12_u);
  pObj.addText('mm，合格率为100%，满足规范要求。测量结果详见下表。');

  pObj = docx.createP();
  pObj.addText('3.3.4 倾斜测量', style_12_b);

  pObj = docx.createP();
  pObj.addText(
    '    依照《水运工程水工建筑物原型观测技术规范》（JTS235-2016）第6.4规定，采用倾斜仪直接观测法或吊垂球法测量胸墙倾斜情况。前沿现浇胸墙每10m布设1个断面，每个断面测3 处测点。测量结果详见下表。',
    style_12
  );

  pObj = docx.createP();
  pObj.addText('3.3.5 变形变位外观', style_12_b);

  pObj = docx.createP();
  pObj.addText('3.4 本章小结', style_14);
}

module.exports = createChapter3;
