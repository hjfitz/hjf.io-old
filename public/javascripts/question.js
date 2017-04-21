//get elements
const
  qpm = document.getElementById('qpm'),
  count = document.getElementById('count'),
  button = document.getElementById('inc'),
  ref = document.getElementById('ref')
;

let counter = count.textContent

button.addEventListener('click', ev => {

  //create new xhr
  let xhr = new XMLHttpRequest()

  //set it to PATCH
  xhr.open('PATCH', '/api/question/inc', true)

  //when it loads, change the questions per minute and count text
  xhr.onload = _ => {
    // stick results in count.textContent
    count.textContent = JSON.parse(xhr.responseText).count;

    // *attempt* to get a questions pre minute #wontfix
    qpm.textContent = (count.textContent/50).toFixed(2)
  }

  //send request
  xhr.send()
})

function updateCount() {
  let xhh = new XMLHttpRequest();
  xhh.open('GET', '/api/question/', true)
  xhh.onload = _ => {
    console.log(xhh.responseText)
    count.textContent = JSON.parse(xhh.responseText).count;
    qpm.textContent = (count.textContent/50).toFixed(2)
  }
  xhh.send()
}


ref.addEventListener('click', updateCount)


updateCount()

// set to refresh every 5 seconds
window.setInterval(updateCount, 5000)
