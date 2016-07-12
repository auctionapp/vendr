var User = require('../db/models/user');

module.exports = {
  getUserId: (req, res) => {
    if (req.session.hasOwnProperty('passport')) {
      User
        .where({ facebookId: req.session.passport.user })
        .fetch()
        .then(user => {
          res.status(200).send(user);
        });
      return;
    }
    res.sendStatus(404);
  },

  getUserFacebookId: (req, res) => {
    if (req.session.passport) {
      res.send(req.session.passport.user);
    } else {
      res.send();
    }
  }
};
