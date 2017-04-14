const fs = require('fs')
const notesDir = 'notes/'


fs.readdir(notesDir, (err, files) => {
  if (err) console.error(err)
  for (const file of files) {
    console.log(file)
  }
})
