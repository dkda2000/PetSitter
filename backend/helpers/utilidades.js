const fs = require('fs');

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