/**
 * Finanzas
 * -------------------------
 * @author: Alejandro Morales <vamg008@gmail.com>
 * @date: date
 */ 'use strict';

var http = require('http')
  , express = require('express')
  , OAuth = require('./oauth')



var app = express()
  , auth = OAuth()
  , html = require('./html')
  , json = require('./data.json')

/* Default configuration */
app.use(express.static(__dirname + '/../app'))
app.use(express.cookieParser())
app.use(express.session({ secret: 'grumpy cat'}))
app.use(auth.initialize())
app.use(auth.session())
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.set('views', __dirname + '/../app')
app.set('port', process.env.PORT || 8080)
app.set('name', 'Finanzas')


app.get('/home', function (req, res){
  if (req.user) req.session.user = req.user
  return res.render('index', req.session)
})

app.get('/auth/twitter', auth.authenticate('twitter'))
app.get('/twitter',  auth.authenticate('twitter', {
  successRedirect: '/home',
  failureRedirect: '/404'
}))
app.get('/404', function (req,res){
  res.end('not found')
})

app.get('/api/data.json', function (req, res){
  res.json({
    data: json
  })
})
http.createServer(app).listen(app.get('port'), function(){
  console.log('Finanzas running on %d', this.address().port)
})


