// get elements
const qpm = document.getElementById('qpm');
const count = document.getElementById('count');
const button = document.getElementById('inc');
const ref = document.getElementById('ref');

button.addEventListener('click', () => {
  // create new xhr
  const xhr = new XMLHttpRequest();

  // set it to PATCH
  xhr.open('PATCH', '/api/question/inc', true);

  // when it loads, change the questions per minute and count text
  xhr.onload = () => {
    // stick results in count.textContent
    count.textContent = JSON.parse(xhr.responseText).count;

    // *attempt* to get a questions pre minute #wontfix
    qpm.textContent = (count.textContent / 50).toFixed(2);
  };

  // send request
  xhr.send();
});

function updateCount() {
  const xhh = new XMLHttpRequest();
  xhh.open('GET', '/api/question/', true);
  xhh.onload = () => {
    count.textContent = JSON.parse(xhh.responseText).count;
    qpm.textContent = (count.textContent / 50).toFixed(2);
  };
  xhh.send();
}


ref.addEventListener('click', updateCount);

updateCount();

// set to refresh every 5 seconds
window.setInterval(updateCount, 5000);
