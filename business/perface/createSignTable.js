function createSignTable(docx) {
  let index = 1;

  index < 10 ? (index = `0${index}`) : index;

  const reportNo = `BG-2020-JGG-${index}`;

  const table = [
    [
      {
        val: '项目名称',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
          b: true,
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 7500,
          color: '000000',
          sz: '28',
          gridSpan: 3,
        },
      },
    ],
    [
      {
        val: '检测单位',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
          b: true,
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 7500,
          color: '000000',
          sz: '28',
          gridSpan: 3,
        },
      },
    ],
    [
      {
        val: '检测时间',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
          b: true,
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 7500,
          color: '000000',
          sz: '28',
          gridSpan: 3,
        },
      },
    ],
    [
      {
        val: '出版日期',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
          b: true,
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 7500,
          color: '000000',
          sz: '28',
          gridSpan: 3,
        },
      },
    ],
    [
      {
        val: '项目人员',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
          b: true,
        },
      },
      {
        val: '姓名',
        opts: {
          cellColWidth: 1700,
          color: '000000',
          sz: '28',
          b: true,
          hMerge: '1',
        },
      },
      {
        val: '资格证',
        opts: {
          cellColWidth: 4000,
          color: '000000',
          sz: '28',
          b: true,
          hMerge: '1',
        },
      },
      {
        val: '签名',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
          b: true,
          hMerge: '1',
        },
      },
    ],
    [
      {
        val: '检测人员',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
          b: true,
          rowSpan: '2',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
          vMerge: '1',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
        },
      },
    ],
    [
      {
        val: '',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
        },
      },
    ],
    [
      {
        val: '校验',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
          b: true,
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
        },
      },
    ],
    [
      {
        val: '审核',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
          b: true,
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 7500,
          color: '000000',
          sz: '28',
          gridSpan: 3,
        },
      },
    ],
    [
      {
        val: '报告编号',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
          b: true,
        },
      },
      {
        val: reportNo,
        opts: {
          cellColWidth: 7500,
          color: '000000',
          sz: '28',
          gridSpan: 3,
        },
      },
    ],
    [
      {
        val: '证件编号',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
          b: true,
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 7500,
          color: '000000',
          sz: '28',
          gridSpan: 3,
        },
      },
    ],
  ];

  const tableStyle = {
    // tableColWidth: 4261,
    tableSize: 24,
    tableColor: 'ada',
    tableAlign: 'center',
    tableFontFamily: 'Comic Sans MS',
    spacingBefor: 120, // default is 100
    spacingAfter: 120, // default is 100
    spacingLine: 240, // default is 240
    spacingLineRule: 'atLeast', // default is atLeast
    indent: 100, // table indent, default is 0
    fixedLayout: true, // default is false
    borders: true, // default is false. if true, default border size is 4
    borderSize: 2, // To use this option, the 'borders' must set as true, default is 4
    columns: [{ width: 4261 }, { width: 1 }, { width: 42 }], // Table logical columns
  };

  docx.createTable(table, tableStyle);
}

module.exports = createSignTable;
