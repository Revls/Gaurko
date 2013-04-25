var levelup = require('levelup')

module.exports = Database

function Database(name){
  if (!(this instanceof Database)) return new Database(name)
  return levelup(name)
}

Database.prototype.get = function() {
  // body...
};
