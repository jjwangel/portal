export const col_shares = [
  {
    type: 'index',
    width: 60,
    align: 'center'
  },
  {
    title: '股金所属单位全称',
    key: 'capName',
    tooltip: true
  },
  {
    title: '持有股金数(股)',
    key: 'capNum',
    tooltip: true
  },
  {
    title: '购入股金出资额(元)',
    key: 'capPrice',
    slot: 'capPrice',
    tooltip: true
  }
]

export const col_security = [
  {
    type: 'index',
    width: 60,
    align: 'center'
  },
  {
    title: '投资类型',
    key: 'capInveTypeText',
    tooltip: true
  },
  {
    title: '总投资金额(元)',
    key: 'capPrice',
    slot: 'capPrice',
    tooltip: true
  },
  {
    title: '备注',
    key: 'capBz',
    tooltip: true
  }
]
