/*
  从2014年7月开始恢复股票池的发布。
*/
var indexArr = new Array("0000001","1399001","1399006","1399300");

var hqArr = new Array(
  ["1002672", "环保",     "2014-07-22", "26.20",  "34.00",  "买入"],
  ["1002456", "电子行业", "2014-07-22", "21.98",  "30.00",  "买入"],
  ["1000001", "银行业",   "2014-07-21", "9.60",   "10.50",  "增持"],
  ["1002638", "元器件",   "2014-07-18", "14.77",  "16.54",  "增持"],
  ["1000670", "计算机",   "2014-07-18", "9.63",   "12.50",  "增持"],
  ["1002281", "通信行业", "2014-07-17", "33.09",  "42.00",  "买入"],
  ["0600588", "计算机",   "2014-07-17", "15.27",  "19.70",  "买入"],
  ["1002271", "建筑",     "2014-07-16", "25.46",  "31.75",  "买入"],
  ["1000063", "通信行业", "2014-07-16", "13.50",  "18.40",  "买入"],
  ["1002325", "建筑",     "2014-07-16", "8.68",   "12.00",  "买入"],
  ["0600809", "食品饮料", "2014-07-15", "14.30",  "18.50",  "买入"],
  ["1300299", "通信行业", "2014-07-15", "12.60",  "16.00",  "买入"],
  ["1300224", "有色金属", "2014-07-15", "25.41",  "30.00",  "买入"],
  ["1002073", "计算机",   "2014-07-15", "9.58",   "11.48",  "增持"],
  ["1300074", "通信行业", "2014-07-14", "17.00",  "20.50",  "买入"],
  ["0600426", "化工",     "2014-07-14", "7.58",   "8.50",   "增持"],
  ["1002318", "钢铁行业", "2014-07-10", "17.63",  "20.00",  "买入"],
  ["1002444", "机械行业", "2014-07-10", "10.55",  "14.00",  "买入"],
  ["1002368", "计算机",   "2014-07-09", "36.51",  "43.05",  "买入"],
  ["1002631", "家居用品", "2014-07-09", "8.95",   "13.20",  "买入"],
  ["0600761", "机械行业", "2014-07-08", "10.51",  "15.00",  "买入"],
  ["0600240", "房地产",   "2014-07-08", "5.53",   "6.50",   "买入"],
  ["0600759", "房地产",   "2014-07-08", "10.45",  "14.00",  "买入"],
  ["1002589", "医药生物", "2014-07-07", "27.06",  "33.71",  "买入"],
  ["1002565", "造纸印刷", "2014-07-07", "8.64",   "10.60",  "买入"],
  ["1000599", "化工",     "2014-07-04", "4.93",   "5.69",   "买入"],
  ["1002354", "造纸印刷", "2014-07-04", "49.50",  "55.00",  "增持"],
  ["1002266", "电力设备", "2014-07-03", "7.46",   "8.70",   "增持"],
  ["0600804", "传播文化", "2014-07-02", "15.75",  "18.00",  "买入"],
  ["1002081", "建筑",     "2014-07-01", "14.16",  "20.00",  "买入"],
  ["1002410", "计算机",   "2014-07-01", "26.44",  "31.85",  "买入"]
);

