/**
 * functional programming is *SO* cool
 * @param grades array of JSON with grade info
 * object should contain 'grade' attribute
 * gets the grade values with grades.map
 * finds the min with Math.min and the destructuring operator
 * removes using filter
 */
const removeWorstTwenty = function removeWorstTwenty(grades) {
  const vals = grades.map(obj => obj.grade);
  const minGrade = Math.min(...vals);
  const normalisedGrades = grades.filter(obj => obj.grade !== minGrade);
  return normalisedGrades;
};

/**
 * @param year2 array of JSON. Array of ALL year 2 grades
 * @param year3 array of JSON. Array of ALL year 3 grades.
 * JSON in form { grade: 'unitletters', grade: 70 }
 * removes the worst 20 Credits
 * sums them up and divides by total units
 * calculates classification using Rule 1
 */
const calcHonoursFourtySixty = function calcHonoursFourtySixty(year2, year3) {
  const normalYear2 = removeWorstTwenty(year2);
  const normalYear3 = removeWorstTwenty(year3);
  const year2Calc = (normalYear2.reduce((acc, val) => acc + val.grade, 0)) / normalYear2.length;
  const year3Calc = (normalYear3.reduce((acc, val) => acc + val.grade, 0)) / normalYear3.length;
  const classification = (year2Calc * 0.4) + (year3Calc * 0.6);
  return classification;
};

const calcHonoursLevelSixOnly = function calcHonoursLevelSixOnly(year3) {
  const normalYear3 = removeWorstTwenty(year3);
  const flattenedGrades = normalYear3.reduce((acc, val) => acc + val.grade, 0);
  const classification = flattenedGrades / year3.length;
  return classification;
};

const calcHonoursFiftyFifty = function calcHonoursFiftyFifty(year2, year3) {
  const normalYear2 = removeWorstTwenty(year2);
  const normalYear3 = removeWorstTwenty(year3);
  const allGrades = [...normalYear2, ...normalYear3].map(grade => grade.grade);
  allGrades.sort();
  allGrades.splice(6);
  const classification = allGrades.reduce((acc, val) => acc + val, 0) / 6;
  return classification;
};

const calcHonours = {
  rule1: calcHonoursFourtySixty,
  rule2: calcHonoursLevelSixOnly,
  rule3: calcHonoursFiftyFifty,
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
