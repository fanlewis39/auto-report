function createAppResultTable(docx) {
  const table = [
    [
      {
        val: '序号',
        opts: {
          cellColWidth: 640,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '构件编号',
        opts: {
          cellColWidth: 1500,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '描述',
        opts: {
          cellColWidth: 4500,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '损坏评定',
        opts: {
          cellColWidth: 1500,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '附图编号',
        opts: {
          cellColWidth: 1500,
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

module.exports = createAppResultTable;
