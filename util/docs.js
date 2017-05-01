// pull in imports
const fs = require('fs');
// set files dir
const filesDir = 'public/files/uni/';

const unitLookup = {
  ADPROC: 'Advanced Programming Concepts',
  MATHFUN: 'Discrete Mathematics and Functional Programming',
  INSE: 'Introduction to Software Engineering',
  DSALG: 'Data Structures and Algorithms',
  COSINE: 'Computers, Operating Systems and Intermetidate Networking',
};

/**
 * @return returns an array of json files in form [ { title, name } ]
 */
const getFiles = function getFiles() {
  // init the return
  const ret = [];
  // get all of the files
  const archives = fs.readdirSync(filesDir);
  // get a name for each file
  archives.forEach((archive) => {
    const shortName = archive.replace('.tar.xz', '');
    ret.push({
      unitName: archive.replace(archive, unitLookup[shortName]),
      unitShortName: shortName,
      filename: `files/uni/${archive}`,
    });
  });
  // return
  return ret;
};

module.exports =
{
  getFiles,
};
