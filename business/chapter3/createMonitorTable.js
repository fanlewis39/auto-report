function createMonitorTable(docx) {
  const table = [
    [
      {
        val: '观测点',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
          vAlign: 'center',
          vMerge: 'restart',
        },
      },
      {
        val: '坐标（m）',
        opts: {
          cellColWidth: 3800,
          color: '000000',
          sz: '21',
          gridSpan: 2,
        },
      },
      {
        val: '高程（m）',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
          vAlign: 'center',
          vMerge: 'restart',
        },
      },
      {
        val: '备注',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
          vAlign: 'center',
          vMerge: 'restart',
        },
      },
    ],
    [
      {
        val: '',
        opts: {
          cellColWidth: 1900,
          vMerge: 'continue',
        },
      },
      {
        val: 'X',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
          hMerge: '1',
        },
      },
      {
        val: 'Y',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '',
        opts: {
          vMerge: 'continue',
        },
      },
      {
        val: '',
        opts: {
          vMerge: 'continue',
        },
      },
    ],
    [
      {
        val: 'BM1',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '测量基准点应不少于3个',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
          bold: true,
          vAlign: 'center',
          vMerge: 'restart',
        },
      },
    ],
    [
      {
        val: 'BM2',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
          vMerge: 'continue',
        },
      },
    ],
    [
      {
        val: 'BM3',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
          vMerge: 'continue',
        },
      },
    ],
    [
      {
        val: '',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '变形测量点',
        opts: {
          cellColWidth: 1900,
          color: '000000',
          sz: '21',
        },
      },
    ],
    [
      {
        val: '说明：坐标采用       坐标系，高程采用     高程系。',
        opts: {
          cellColWidth: 9500,
          color: '000000',
          sz: '21',
          gridSpan: 5,
        },
      },
    ],
  ];

  const tableStyle = {
    spacingBefor: 40,
    spacingAfter: 40,
    fixedLayout: true,
    borders: true,
    borderSize: 2,
  };

  docx.createTable(table, tableStyle);
}

module.exports = createMonitorTable;
