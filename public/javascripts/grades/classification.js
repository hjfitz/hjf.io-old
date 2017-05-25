let integratedmasters = false;
const mastersToggle = document.getElementById('masterstoggle');
const btnCalc = document.getElementById('calc-classification');

const validateInputs = function validateInputs() {
  //something
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
