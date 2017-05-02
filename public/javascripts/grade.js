const inputArea = document.getElementById('grade-input');
const numUnitsInput = document.getElementById('num-units');
const welcomeForm = document.getElementById('welcome-form');
const setSub = document.getElementById('set-submissions');
const gradePercents = [];

const findMarksRequired = function fundMarksRequired(kn, unk) {
  const total = kn.reduce((acc, val) => acc + val, 0);
  const remainingPercent = unk.reduce((acc, val) => acc + val, 0);
  const first = (70 - total) / remainingPercent;
  console.log(unk);
  console.log(total)
  console.log(first);
};

const parseSubmissions = function parseSubmissions() {
  const knownGradeMultPercentages = [];
  const unknownPercs = [];
  let totalPercent = 0;
  gradePercents.forEach((entry) => {
    const curPerc = parseInt(entry.percent.value, 10);
    // work on validation here
    // TODO
    if (entry.grade.value != 0) {
      const curGrade = parseInt(entry.grade.value, 10);
      const curPart = curGrade * (0.01 * curPerc);
      knownGradeMultPercentages.push(curPart);
    } else {
      unknownPercs.push(curPerc);
    }
    totalPercent += parseInt(entry.percent.value, 10);
  });
  // check to see if data entered correctly
  if (totalPercent !== 100) {
    // do something
  } else {
    findMarksRequired(knownGradeMultPercentages, unknownPercs);
    // 70 = current grades * current percentages + unknown grade(s) * current percentages
    // unknown grade = (70 - current grades * current percentages) / remaining percentages
  }
};

const showInputs = function showInputs() {
  // start by getting the number of units
  const numUnits = numUnitsInput.value || numUnitsInput.placeholder;
  // then by hiding the initial inputArea
  welcomeForm.parentElement.removeChild(welcomeForm);
  // create a new form, for the user to enter input regarding their subs.
  const workOutArea = document.createElement('div');
  for (let i = 0; i < numUnits; i += 1) {
    const container = document.createElement('div');
    const inputPercent = document.createElement('input');
    const inputGrade = document.createElement('input');
    inputGrade.placeholder = 'grade you got (73%, 40% etc)';
    inputPercent.placeholder = 'percentage of unit (60, 50 etc)';
    gradePercents.push({
      percent: inputPercent,
      grade: inputGrade,
    });
    container.appendChild(inputPercent);
    container.appendChild(inputGrade);
    workOutArea.appendChild(container);
  }
  inputArea.appendChild(workOutArea);
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Calculate!';
  inputArea.appendChild(submitButton);
  submitButton.addEventListener('click', parseSubmissions);
};

setSub.addEventListener('click', showInputs);
