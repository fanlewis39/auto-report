function createDemageTable(docx) {
  const table = [
    [
      {
        val: '序号',
        opts: {
          cellColWidth: 800,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '构件类型',
        opts: {
          cellColWidth: 1300,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '构件总数',
        opts: {
          cellColWidth: 1300,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '完好',
        opts: {
          cellColWidth: 800,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '占比',
        opts: {
          cellColWidth: 800,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '轻度',
        opts: {
          cellColWidth: 800,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '占比',
        opts: {
          cellColWidth: 800,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '中度',
        opts: {
          cellColWidth: 800,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '占比',
        opts: {
          cellColWidth: 800,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '严重',
        opts: {
          cellColWidth: 800,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '占比',
        opts: {
          cellColWidth: 800,
          color: '000000',
          sz: '21',
        },
      },
    ],
  ];

  const tableStyle = {
    spacingBefor: 20,
    spacingAfter: 20,
    fixedLayout: true,
    borders: true,
    borderSize: 2,
  };

  docx.createTable(table, tableStyle);
}

module.exports = createDemageTable;
