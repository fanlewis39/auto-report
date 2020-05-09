function createSettlementTable(docx) {
  const startDate = ' 年 月 日';
  const endDate = ' 年 月 日';

  const table = [
    [
      {
        val: '观察点号',
        opts: {
          cellColWidth: 800,
          color: '000000',
          sz: '21',
          vAlign: 'center',
          vMerge: 'restart',
        },
      },
      {
        val: startDate,
        opts: {
          cellColWidth: 2900,
          color: '000000',
          sz: '21',
          gridSpan: 2,
        },
      },
      {
        val: endDate,
        opts: {
          cellColWidth: 2900,
          color: '000000',
          sz: '21',
          gridSpan: 2,
        },
      },
      {
        val: '',
        opts: {
          cellColWidth: 2900,
          color: '000000',
          sz: '21',
          gridSpan: 2,
        },
      },
    ],
    [
      {
        val: '',
        opts: {
          vMerge: 'continue',
        }
      },
      {
        val: '高程(m)',
        opts: {
          cellColWidth: 1450,
          color: '000000',
          sz: '21',
          hMerge: '1',
        },
      },
      {
        val: '本次沉降(mm)',
        opts: {
          cellColWidth: 1450,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '高程(m)',
        opts: {
          cellColWidth: 1450,
          color: '000000',
          sz: '21',
          hMerge: '1',
        },
      },
      {
        val: '本次沉降(mm)',
        opts: {
          cellColWidth: 1450,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '累计沉降(mm)',
        opts: {
          cellColWidth: 1450,
          color: '000000',
          sz: '21',
          hMerge: '1',
        },
      },
      {
        val: '沉降速率(mm/d)',
        opts: {
          cellColWidth: 1450,
          color: '000000',
          sz: '21',
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

module.exports = createSettlementTable;