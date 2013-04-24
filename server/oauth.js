var passport = require('passport')
  , Strategy = require('passport-twitter').Strategy

module.exports = function (){
  var users = {}
  passport.use(new Strategy({
      consumerKey: "7iY6rAvd9ytgPnULA6RLg",
      consumerSecret: "Y8ujNXwIBQPLzxV5F31ybCuIeTP96HhRhHGnC2uE",
      callbackURL: "http://finanzas.alejo.in/twitter"
    }, function(token, tokenSecret, profile, done) {
      /// database lookup
      profile.token = token
      profile.tokenSecret = tokenSecret
      if (!users[profile.username]) users[profile.username] = profile
      done(null, profile)
    }
  ))
  passport.serializeUser(function(user, done) {
    done(null, user.username)
  })
  passport.deserializeUser(function (id, done){
    if (!users[id]) return done(new Error('not found'))
    done(null, users[id])
  })
  return passport
}
