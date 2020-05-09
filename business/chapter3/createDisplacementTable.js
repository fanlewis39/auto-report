function createDisplacementTable(docx) {
  const startDate = ' 年 月 日';
  const endDate = ' 年 月 日';

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
        }
      },
      {
        val: startDate,
        opts: {
          cellColWidth: 2600,
          color: '000000',
          sz: '21',
          gridSpan: 3,
        }
      },
      {
        val: endDate,
        opts: {
          cellColWidth: 2600,
          color: '000000',
          sz: '21',
          gridSpan: 3,
        }
      },
      {
        val: '',
        opts: {
          cellColWidth: 2600,
          color: '000000',
          sz: '21',
          gridSpan: 2,
        }
      }
    ],
    [
      {
        val: '上次数据',
        opts: {
          cellColWidth: 2600,
          color: '000000',
          sz: '21',
          gridSpan: 2,
        }
      }
    ]
  ]
}