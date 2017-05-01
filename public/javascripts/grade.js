const inputArea = document.getElementById('grade-input');
const numUnitsInput = document.getElementById('num-units');
const welcomeForm = document.getElementById('welcome-form');
const setSub = document.getElementById('set-submissions');
const gradePercents = [];

const parseSubmissions = function parseSubmissions() {
  gradePercents.forEach((entry) => {
    console.log(entry);
  });
};

const showInputs = function showInputs() {
  // start by getting the number of units
  const numUnits = numUnitsInput.value || numUnitsInput.placeholder;
  console.log(numUnits);
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
