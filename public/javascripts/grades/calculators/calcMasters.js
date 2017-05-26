const calcMastersFiftyFifty = function calcMastersFiftyFifty(year3, year4) {
  const classification = (year3 * 0.5) + (year4 * 0.5);
  return classification;
};

const calcMastersTwentyFourtyFourty = function calcMastersTwentyFourtyFourty(year2, year3, year4) {
  const classification = (year2 * 0.2) + (year3 * 0.4) + (year4 * 0.4);
  return classification;
};

const calcMasters = {
  rule1: calcMastersFiftyFifty,
  rule2: calcMastersTwentyFourtyFourty,
};
