/**
 * @param year2 array of JSON. Array of ALL year 2 grades
 * @param year3 array of JSON. Array of ALL year 3 grades.
 * JSON in form { grade: 'unitletters', grade: 70 }
 * removes the worst 20 Credits
 * sums them up and divides by total units
 * calculates classification using Rule 1
 */
const calcHonoursFourtySixty = function calcHonoursFourtySixty(year2, year3) {
  const year2Calc = (normalYear2.reduce((acc, val) => acc + val.grade, 0)) / normalYear2.length;
  const year3Calc = (normalYear3.reduce((acc, val) => acc + val.grade, 0)) / normalYear3.length;
  const classification = (year2Calc * 0.4) + (year3Calc * 0.6);
  return classification;
};

const calcHonoursRule3 = function calcHonoursRule3(year2, year3) {
  const allGrades = [...year2, ...year3].map(grade => grade.grade);
  allGrades.sort().splice(6);
  const classification = sumGrades(allGrades) / 6;
  return classification;
};

const calcHonours = {
  rule1: calcHonoursFourtySixty,
  rule2: calcHonoursLevelSixOnly,
  rule3: calcHonoursRule3,
};

const testCalcHonoursFoutySixty = function testCalcHonoursFoutySixty() {
  const y2 = [
    { unit: 'inddad', grade: 70 },
    { unit: 'webf1', grade: 70 },
    { unit: 'netfun', grade: 70 },
    { unit: 'intprog', grade: 70 },
    { unit: 'dsalg', grade: 70 },
    { unit: 'car', grade: 40 },
  ];
  const y3 = [
    { unit: 'inddad', grade: 60 },
    { unit: 'webf1', grade: 60 },
    { unit: 'netfun', grade: 60 },
    { unit: 'intprog', grade: 60 },
    { unit: 'dsalg', grade: 60 },
    { unit: 'car', grade: 40 },
  ];
  console.log(y2);
  const test = removeWorstTwenty(y2);
  console.log(test);
  calcHonours.rule1(y2, y3);
};

testCalcHonoursFoutySixty();
