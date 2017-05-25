const calcMastersFiftyFifty = function calcMastersFiftyFifty(year3, year4) {
  const normalYear3 = removeWorstTwenty(year3);
  const normalYear4 = removeWorstTwenty(year4);
  const year3Average = sumGrades(normalYear3) / normalYear3.length;
  const year4Average = sumGrades(normalYear4) / normalYear4.length;
  const classification = (year3Average * 0.5) + (year4Average * 0.5);
  return classification;
};

const calcMastersTwentyFourtyFourty = function calcMastersTwentyFourtyFourty(year2, year3, year4) {
  const normalYear2 = removeWorstTwenty(year2);
  const normalYear3 = removeWorstTwenty(year3);
  const normalYear4 = removeWorstTwenty(year4);
  const year2Average = sumGrades(normalYear2) / normalYear2.length;
  const year3Average = sumGrades(normalYear3) / normalYear3.length;
  const year4Average = sumGrades(normalYear4) / normalYear4.length;
  const classification = (year2Average * 0.2) + (year3Average * 0.4) + (year4Average * 0.4);
  return classification;
};

const calcMasters = {
  rule1: calcMastersFiftyFifty,
  rule2: calcMastersTwentyFourtyFourty,
};
