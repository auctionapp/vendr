var session = require('express-session');
var express = require('express');
var db = require('./db/config');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var Message = require('./db/models/message.js');
var User = require('./db/models/user');
var Item = require('./db/models/item');
var WatchList = require('./db/models/watchlist');
var Feedback = require('./db/models/feedback.js');
var dateformat = require('dateformat');

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser());
app.use(session({
  secret: 'auction',
  maxAge: 60000
}));
app.use(passport.initialize());
app.use(passport.session());
require('./routes.js')(app);

// ########################### SOCKET.IO CODE ###########################
var http = require('http').Server(app);
exports.io = require('socket.io')(http);

http.listen(3000, function(){
  console.log('listening on *:3000');
});

require('./socket.js');

// ######################### END SOCKET.IO CODE #########################

// ########################### FACEBOOK OAUTH ###########################
app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/' }));

app.get('/signout' , (req, res) => {
  // check to see if this actually works
  req.session.destroy();
  res.redirect('/');
});

// check out passport-facebook documentation for info on how the FB OAuth works
// passport FB OAuth
passport.serializeUser(function(user, done) {
  console.log('serializeUser: ' + user.get('facebookId'));
  done(null, user.get('facebookId'));
});

passport.deserializeUser(function(facebookId, done) {
  console.log('deserialize', facebookId);
  User.where({ facebookId: facebookId }).fetch()
    .then(function(user) {
      done(null, user);
    })
    .catch(function(err) {
      done(err, null);
    });
});

passport.use(new FacebookStrategy({
    // **you will need to create your own fb developer account and input your own clientID and clientSecret
    clientID: '523442607845905',
    clientSecret: '68d549f6999e92b32818e0993b737563',
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    enableProof: true,
    profileFields: ['id', 'displayName', 'gender', 'picture.type(large)', 'emails']
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
      User.where({ facebookId: profile.id }).fetch()
        .then(function(user) {
          // creates user if not found
          console.log(profile);
          if (!user) {
            user = new User({
              name: profile.displayName,
              facebookId: profile.id,
              picture: profile.photos[0].value
            }).save();
          }
          return user;
        })
        .then(function(user) {
          done(null, user);
        })
        .catch(function(err) {
          done(err, null);
        });
    })
  }
));

// ######################## END FACEBOOK OAUTH ###########################
