function createAppLevelTable(docx) {
  const table = [
    [
      {
        val: '构件',
        opts: {
          cellColWidth: 1300,
          color: '000000',
          sz: '21',
          gridSpan: 2,
        },
      },
      {
        val: '等级',
        opts: {
          cellColWidth: 8450,
          color: '000000',
          sz: '21',
          gridSpan: 4,
        },
      },
    ],
    [
      {
        val: '构件种类',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          hMerge: '1',
        },
      },
      {
        val: '检测项目',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: 'A',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: 'B',
        opts: {
          cellColWidth: 1950,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: 'C',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: 'D',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
    ],
    [
      {
        val: '板',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
          vMerge: 'restart',
        },
      },
      {
        val: '钢筋锈蚀',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '无',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '混凝土表面可见局部锈迹',
        opts: {
          cellColWidth: 1950,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '锈迹较多，钢筋锈蚀范围扩大',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '锈迹普遍，钢筋表面大部分或全部锈蚀，截面钢筋面积明显减少',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
    ],
    [
      {
        val: '',
        opts: {
          cellColWidth: 650,
          vMerge: 'continue',
        },
      },
      {
        val: '裂缝',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '无',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '局部有微小锈蚀裂缝，裂缝宽度小于0.3mm',
        opts: {
          cellColWidth: 1950,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '锈蚀裂缝较多或呈网状，裂缝宽度在0.3mm至1.0mm之间',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '大面积锈蚀裂缝呈网状，裂缝宽度大于1.0mm',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
    ],
    [
      {
        val: '',
        opts: {
          cellColWidth: 650,
          vMerge: 'continue',
        },
      },
      {
        val: '剥离剥落',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '无',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '局部小面积空鼓',
        opts: {
          cellColWidth: 1950,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '局部有剥落，空鼓和剥落面积小于区域面积的30%',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '大面积剥落，空鼓和剥落面积达区域面积的30%以上',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
    ],
    [
      {
        val: '梁',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
          vMerge: 'restart',
        },
      },
      {
        val: '钢筋锈蚀',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '无',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '混凝土表面可见局部锈迹',
        opts: {
          cellColWidth: 1950,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '锈迹较多，钢筋锈蚀范围扩大',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '锈迹普遍，钢筋表面大部分或全部锈蚀，截面钢筋面积明显减少',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
    ],
    [
      {
        val: '',
        opts: {
          cellColWidth: 650,
          vMerge: 'continue',
        },
      },
      {
        val: '裂缝',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '无',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '局部有微小锈蚀裂缝，裂缝宽度小于0.3mm',
        opts: {
          cellColWidth: 1950,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '裂缝较多，部分为顺筋连续裂缝，裂缝宽度在0.3mm至3.0mm之间',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '大面积顺筋连续裂缝，裂缝宽度大于3.0mm',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
    ],
    [
      {
        val: '',
        opts: {
          cellColWidth: 650,
          vMerge: 'continue',
        },
      },
      {
        val: '剥离剥落',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '无',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '无',
        opts: {
          cellColWidth: 1950,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '部分剥落，剥落长度小于构件长度的10%',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '剥落长度大于构件长度的10%',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
    ],
    [
      {
        val: '桩与桩帽',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
          vMerge: 'restart',
        },
      },
      {
        val: '钢筋锈蚀',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '无',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '混凝土表面可见局部锈迹',
        opts: {
          cellColWidth: 1950,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '锈迹较多，钢筋锈蚀范围扩大',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '锈迹普遍，钢筋表面大部分或全部锈蚀，截面钢筋面积明显减少',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
    ],
    [
      {
        val: '',
        opts: {
          cellColWidth: 650,
          vMerge: 'continue',
        },
      },
      {
        val: '裂缝',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '无',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '局部有微小锈蚀裂缝，裂缝宽度小于0.3mm',
        opts: {
          cellColWidth: 1950,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '裂缝较多，部分为顺筋连续裂缝，裂缝宽度在0.3mm至3.0mm之间',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '大面积顺筋连续裂缝，裂缝宽度大于3.0mm',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
    ],
    [
      {
        val: '',
        opts: {
          cellColWidth: 650,
          vMerge: 'continue',
        },
      },
      {
        val: '剥离剥落',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '无',
        opts: {
          cellColWidth: 650,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '无',
        opts: {
          cellColWidth: 1950,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '部分剥落，剥落长度小于构件长度的10%',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
      {
        val: '剥落长度大于构件长度的10%',
        opts: {
          cellColWidth: 2800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
        },
      },
    ],
  ];

  const tableStyle = {
    spacingBefor: 30,
    spacingAfter: 30,
    fixedLayout: true,
    borders: true,
    borderSize: 2,
  };

  docx.createTable(table, tableStyle);
}

module.exports = createAppLevelTable;
