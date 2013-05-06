var Database = require('../db')
var Structure = require('../helpers/structure')
var db = Database('../data', { defaultEncoding: 'json'})
var cache = {}

// structures ;_; lol
var Item = Structure({
  id: 'string',
  type: ['income', 'outcome'],
  description: 'string',
  value: 'number',
  date: 'date'
})
var User = Structure({
  token: 'string',
  tokenSecret: 'string',
  name: 'string',
  id: 'string',
  last_seen: 'date',
  img: 'string',
  items: [Item],
  last_item: Item,
  keepStructure: false
})

var api = module.exports = {
  User: User,
  create: function (user, cb){
    if (!User.isValid(user)) return cb(new TypeError('user is not valid'))
    api.exists(user, function (err, exists){
      if (err) return cb(err)
      if (exists) return cb(new Error('user exits'))
      api._save(user, cb)
    })
  },
  exists: function (user, cb){
    if (cache[user.id]) return cb(null, true)
    db.get(user.id, function (error, usr){
      if (error && error.name === 'NotFoundError') return cb(null, false)
      if (error) return cb(error)
      cb(null, true)
    })
  },
  _save: function (user, cb){
    db.put(user.id, user, function (error, resp){
      if (error) return cb(error)
      cache[user.id] = user
      cb(null, resp)
    })
  },
  save: function (user, cb){
    if (!User.isValid(user)) return cb(new TypeError('user is not valid'))
    api._save(user, cb)
  },
  del: function (id, cb){
    db.del(id, function (error, resp){
      if (error) return cb(error)
      delete cache[id]
      cb(null, true)
    })
  },
  get: function (id, cb) {
    if (cache[id]) return cb(null, cache[id])
    db.get(id, function (error, user){
      if (error) return cb(error)
      cache[id] = user
      cb(null, user)
    })
  }
}


/*
  /users/id
*/
api.Interface = {
  get: function (req, res){
    var id = req.params.id
    api.get(id, function (error, user){
      if (error && error.name === 'NotFoundError')
        return res.json({
          status: 'notfound'
        }, 404)
      if (error) return res.error(error)
      res.json({
        status: 'ok',
        data: user
      })
    })
  },
  put: function (req, res){
  }
}
