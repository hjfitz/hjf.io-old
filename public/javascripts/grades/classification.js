let integratedmasters = false;
const mastersToggle = document.getElementById('masterstoggle');
const btnCalc = document.getElementById('calc-classification');

const calcClassification = function calcClassification() {
  // declare something to store clasifications in
  const classifications = [];
  // first, normalise the grades
  parseGrades();
  // then, remove the worst twenty credits
  [grades.year2, grades.year3, grades.year4].map(grades => removeWorstTwenty(grades));
  const year2Average = sumGrades(grades.year2) / grades.year2.average;
  const year3Average = sumGrades(grades.year3) / grades.year3.average;
  if (integratedmasters) {
    const year4Average = sumGrades(grades.year4) / grades.year4.average;
    classifications.push(calcMasters.rule1(year3Average, year4Average));
    classifications.push(calcMasters.rule2(year2Average, year3Average, year4Average));
  } else {
    classifications.push(calcHonours.rule1(year2Average, year3Average));
    classifications.push(year3Average);
    classifications.push(calcHonours.rule3(grades.year2, grades.year3));
  }
};

const validateInputs = function validateInputs() {
  // get input boxes
  const gradeBoxes = document.getElementsByClassname('grade');
  const credBoxes = document.getElementsByClassname('cred');
  let valid = true;

  // *efficiently* iterate through both sets of input and ensure they're correct
  gradeBoxes.forEach((input) => {
    // if the input box is null or a letter, parseInt returns NaN
    // meaning that it's not less than 0 nor greater than 100
    const val = parseInt(input.value, 10);
    if (val >= 100 || val <= 0) {
      input.classList += 'error-input';
      valid = false;
    }
  });

  credBoxes.forEach((input) => {
    const val = parseInt(input.value, 10);
    if (val !== 20 || val !== 30 || val !== 40) {
      input.classList = 'error-input';
      valid = false;
    }
  });
  if (valid) calcClassification();
};

/**
 * @param ev
 */
const addUnit = function addUnit(ev) {
  const year = ev.target.dataset.year;
  const universityLevel = parseInt(year, 10) + 3;
  // grades[`year${year$}`]
  const nameArea = document.getElementById(`unit-name-col-l${universityLevel}`);
  const percArea = document.getElementById(`unit-perc-col-l${universityLevel}`);
  const credArea = document.getElementById(`unit-cred-col-l${universityLevel}`);
  const elems = {};
  [nameArea, percArea, credArea].forEach((area) => {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.classList = area.dataset.name;
    newInput.dataset.name = area.dataset.name;
    area.appendChild(newInput);
    elems[`${area.dataset.name}`] = newInput;
  });
  grades[`year${year}`].push(elems); // util.js
};

/**
 * @param YearNo
 * @param container
 */
const addYear = function addYear(YearNo, container) {
  const appendTo = document.getElementById(container);
  const tableContainer = document.createElement('div');
  tableContainer.classList = 'table';
  const level = YearNo + 3;
  tableContainer.id = `table-l${level}`;
  tableContainer.innerHTML = `
  <header class="table-header">
    <h2>Year ${YearNo}</h2>
  </header>
  <div id="table-wrap-l${level}" class="table-wrapper">

    <div class="col">
      <header><h3>Unit Name</h3></header>
      <div id='unit-name-col-l${level}' data-name='name'>

      </div>
    </div>

    <div class="col">
      <header><h3>Unit Percent</h3><header>
        <div id='unit-perc-col-l${level}' data-name='grade'>

        </div>
    </div>

    <div class="col">
      <header><h3>Unit Credits</h3></header>
      <div id='unit-cred-col-l${level}' data-name='cred'>

      </div>
    </div>
  </div>`;
  const addButton = document.createElement('button');
  addButton.type = 'button';
  addButton.id = `btn-add-unit-l${level}`;
  addButton.dataset.year = YearNo;
  addButton.textContent = 'Add';
  addButton.addEventListener('click', addUnit);
  appendTo.appendChild(tableContainer);
  const newlyAppended = document.getElementById(`table-wrap-l${level}`);
  newlyAppended.appendChild(addButton);
};

const toggleMastersYear = function toggleMastersYear() {
  if (integratedmasters) {
    const mastersTable = document.getElementById('table-l7');
    mastersTable.parentElement.removeChild(mastersTable);
    integratedmasters = false;
  } else {
    addYear(4, 'tables');
    integratedmasters = true;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  addYear(2, 'tables');
  addYear(3, 'tables');
});

mastersToggle.addEventListener('click', toggleMastersYear);
