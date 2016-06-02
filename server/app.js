var session = require('express-session');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var db = require('./db/config');
var Message = require('./db/models/message.js');
var User = require('./db/models/user');
var Item = require('./db/models/item');

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser());
app.use(session({
  secret: 'auction',
  maxAge: 60000
}));
app.use(passport.initialize());
app.use(passport.session());

// ########################### SOCKET.IO CODE ###########################
// ########### DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING ############
var http = require('http').Server(app);
exports.io = require('socket.io')(http);

app.use(express.static(__dirname + '/../public'));

http.listen(3000, function(){
  console.log('listening on *:3000');
});

require('./socket.js');

// ######################### END SOCKET.IO CODE #########################

app.post('/getMessages', (req, res) => {
  new Message().fetchAll().then(messages => {
    res.status(200).send(messages);
  });
});

app.post('/sendMessage', (req, res) => {
  new Message(req.body).save().then(() => res.status(200));
});


// ########################### FACEBOOK OAUTH ###########################
app.get('/auth/facebook',
  passport.authenticate('facebook'));
 
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));

app.get('/signout' , (req, res) => {
  req.logout();
  res.redirect('/');
});

// item selling form routes
app.post('/sellItem', (req, res) => {
  new Item(req.body).save().then(() => res.status(200));
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
    })
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
          if (!user) {
            user = new User({
              username: profile.username,
              name: profile.displayName,
              facebookId: profile.id,
              email: profile.emails[0].value,
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



//######################### SearchBar Requests ##########################

app.get('/searchItem/*', (req, res) => {
    var term = req.url.split("/")
    console.log(term)
     Item.where({title: term[2] }).fetchAll()
     .then(function(items){

       if(!items){
         Item.fetchAll()
         .then(function(items){
          res.send(items)
         })
       }
       console.log(items);
       res.send(items);
     })
});












// app.post('/sendMessage', (req, res) => {
//   console.log(req.body);
//   new Message(req.body).save().then(() => res.status(200));
// });


// var session = require('express-session');
// var express = require('express');
// var app = express();

// console.log(__dirname);

// require('./socket.js');

// module.exports = app.listen(3000);

// var app = express()
//   , http = require('http')
//   , server = http.createServer(app)
//   , io = require('socket.io').listen(server);
