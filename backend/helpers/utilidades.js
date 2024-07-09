const fs = require('fs');
//const path = require('path');

function fileExists(filePath) {
    try {
      return fs.existsSync(filePath);
    } catch (err) {
      return false;
    }
  }


module.exports = {
    fileExists
};