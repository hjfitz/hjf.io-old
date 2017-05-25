// const btnAdd = document.getElementById('btn-add-unit');
let integratedmasters = false;
const mastersToggle = document.getElementById('masterstoggle');
const grades = { year2: [], year3: [], year4: [] };

/**
 * functional programming is *SO* cool
 * @param grades array of JSON with grade info
 * @return array of JSON, with lowest item.grade removed
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
 * @param grades array of JSON with all grade info
 * @return sum of all of the grades
 */
const sumGrades = function sumGrades(grades) {
  return grades
    .map(grade => grade.grade)
    .reduce((acc, val) => acc + val, 0);
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
  console.log(grades);
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
    newInput.dataset.name = area.dataset.name;
    area.appendChild(newInput);
    elems[`${area.dataset.name}`] = newInput;
  });
  grades[`year${year}`].push(elems);
  console.log(grades);
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
