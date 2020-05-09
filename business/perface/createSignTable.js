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
        val: '结构检测报告',
        opts: {
          cellColWidth: 7500,
          color: '000000',
          sz: '28',
          gridSpan: 3,
          b: true,
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
        val: '青岛中航工程试验检测有限公司',
        opts: {
          cellColWidth: 7500,
          color: '000000',
          sz: '28',
          gridSpan: 3,
          b: true,
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
        },
      },
      {
        val: '签名',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
          b: true,
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
          vAlign: 'center',
          vMerge: 'restart',
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
        val: '',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '28',
          vMerge: 'continue',
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
    spacingBefor: 180,
    spacingAfter: 180,
    fixedLayout: true,
    borders: true,
    borderSize: 2,
  };

  docx.createTable(table, tableStyle);
}

module.exports = createSignTable;
