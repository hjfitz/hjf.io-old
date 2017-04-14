const fs = require('fs')
const notesDir = 'notes/'
const extensions = [ '.md', '.pdf']

function getNotes(unit) {
  //get the files
  var files = fs.readdirSync(notesDir + unit)

  //format the filenames for our handlebars helpers!
  var formatList = files.map(formatFiles)

  return formatList

}

function formatFiles(name) {

  //remove all of the awkward dashes
  var newname = name.replace(/[\-\_]/g, ' ')

  //remove the file extension
  for (var e of extensions) newname = newname.replace(e, '')

  //create a json object that we'll later iterate through with handlebars
  var ret = { [newname]:name }

  //return
  return ret
}

module.exports =
  {
    "getNotes": getNotes
  }
