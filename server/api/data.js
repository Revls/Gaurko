var Database = require('../db')
var db = Database('../data', { defaultEncoding: 'json'})

module.exports = function (req, res){
  console.dir(req)
  res.json({
    status: 'ok'
  })
}
