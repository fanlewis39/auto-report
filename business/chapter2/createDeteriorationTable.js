function createDeteriorationTable(docx) {
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
        val: 'A',
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
        val: 'B',
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
        val: 'C',
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
        val: 'D',
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

module.exports = createDeteriorationTable;
