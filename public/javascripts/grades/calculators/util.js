const grades = { year2: [], year3: [], year4: [] };

const compareGrade = function compareGrade(grade1, grade2) {
  if (grade1.grade < grade2.grade) {
    return -1;
  } else if (grade2.grade < grade1.grade) {
    return 1;
  }
  return 0;
};
/**
 * functional programming is *SO* cool
 * @param grades array of JSON with grade info
 * @return array of JSON, with lowest item.grade removed
 * object should contain 'grade' attribute
 * gets the grade values with grades.map
 * finds the min with Math.min and the destructuring operator
 * removes using filter
 */
const removeWorstTwenty = function removeWorstTwenty(rawGrades) {
  console.log(rawGrades);
  if (rawGrades.length >= 1) {
    let sortedGrades = rawGrades.sort(compareGrade);
    if (sortedGrades[0].cred === 40) {
      sortedGrades.cred = 20;
    } else if (sortedGrades[0].cred === 30) {
      console.log('uh oh');
    } else {
      sortedGrades = sortedGrades.splice(1);
    }
    return sortedGrades;
  }
  return 0;
};

/**
 * @param grades array of JSON with all grade info
 * @return sum of all of the grades
 */
const sumGrades = function sumGrades(rawGrades) {
  return rawGrades.reduce((acc, val) => acc + parseInt(val.grade, 10), 0);
};

const formatDOMItem = function formatDOMItem(item) {
  const formatted = {
    unit: item.name.value,
    grade: item.grade.value,
    cred: item.cred.value,
  };
  return formatted;
};

const parseGrades = function parseGrades() {
  grades.year2 = grades.year2.map(grade => formatDOMItem(grade));
  grades.year3 = grades.year3.map(grade => formatDOMItem(grade));
  if (integratedmasters) {
    grades.year4 = grades.year4.map(grade => formatDOMItem(grade));
  }
};
