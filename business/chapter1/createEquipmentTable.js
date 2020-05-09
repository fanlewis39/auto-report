function creeteEquipmentTable(docx, data) {
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
        val: '设备名称',
        opts: {
          cellColWidth: 1800,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '规格型号',
        opts: {
          cellColWidth: 1500,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '计量器具编号',
        opts: {
          cellColWidth: 1500,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '设备编号',
        opts: {
          cellColWidth: 1300,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '检定/校准日期',
        opts: {
          cellColWidth: 1600,
          color: '000000',
          sz: '21',
        },
      },
      {
        val: '检定周期',
        opts: {
          cellColWidth: 1300,
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

module.exports = creeteEquipmentTable;
