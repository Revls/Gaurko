var fs = require('fs')
module.exports = {
  meta: '<meta name="ttoken" content="{token}">\n' +
        '<meta name="tuser" content="{tuser}">',
  read: function (path, cb){
    fs.readFile(path, cb)
  }
}
