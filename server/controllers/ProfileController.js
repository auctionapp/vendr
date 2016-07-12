var User = require('../db/models/user');

module.exports = {
  getProfile: (req, res) => {
    User
      .where({ id: req.query.id })
      .fetch()
      .then(user => res.send(user));
  }
};
