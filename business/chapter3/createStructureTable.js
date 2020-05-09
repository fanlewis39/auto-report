function createStructureTable(docx) {
  const table = [
    [
      {
        val: '序号',
        opts: {
          cellColWidth: 1300,
          color: '000000',
          sz: '21',
          vAlign: 'center',
          vMerge: 'restart',
        },
      },
      {
        val: '位置（m）',
        opts: {
          cellColWidth: 1300,
          color: '000000',
          sz: '21',
          vAlign: 'center',
          vMerge: 'restart',
        },
      },
      {
        val: '缝宽（mm）',
        opts: {
          cellColWidth: 3600,
          color: '000000',
          sz: '21',
          gridSpan: 3,
        },
      },
      {
        val: '前后错动（mm）',
        opts: {
          cellColWidth: 1500,
          color: '000000',
          sz: '21',
          vMerge: 'restart',
        },
      },
      {
        val: '上下错动（mm）',
        opts: {
          cellColWidth: 1500,
          color: '000000',
          sz: '21',
          vMerge: 'restart',
        },
      },
    ],
    [
      {
        val: '',
        opts: {
          cellColWidth: 1300,
          vMerge: 'continue',
        }
      },
      {
        val: '',
        opts: {
          vMerge: 'continue',
        }
      },
      {
        val: '1',
        opts: {
          cellColWidth: 1300,
          color: '000000',
          sz: '21',
          hMerge: '1',
        },
      },
      {
        val: '2',
        opts: {
          cellColWidth: 1300,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '3',
        opts: {
          cellColWidth: 1300,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '',
        opts: {
          vMerge: 'continue',
        }
      },
      {
        val: '',
        opts: {
          vMerge: 'continue',
        }
      }
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

module.exports = createStructureTable;
