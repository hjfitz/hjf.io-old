const fs = require('fs');

const notesDir = 'notes/';
const extensions = ['.md', '.pdf'];

function formatFiles(name) {
  // remove all of the awkward dashes
  const newname = name.replace(/[-_]/g, ' ');

  // remove the file extension
  extensions.forEach((e) => {
    newname.replace(e, '');
  });


  // create a json object that we'll later iterate through with handlebars
  const ret = { [newname]: name };

  return ret;
}

function getNotes(unit) {
  // get the files
  const files = fs.readdirSync(notesDir + unit);

  // format the filenames for our handlebars helpers!
  const formatList = files.map(formatFiles);

  return formatList;
}

module.exports =
{
  getNotes,
};
