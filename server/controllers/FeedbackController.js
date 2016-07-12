var db = require('../db/config');
var User = require('../db/models/user');
var Feedback = require('../db/models/feedback');

module.exports = {
  getFeedback: (req, res) => {
    db.knex('feedback')
      .where({ receiver_id: req.query.receiver })
      .innerJoin('users', 'feedback.author_id', '=', 'users.id')
      .then(feedbackArray => {
        res.status(200).send(feedbackArray);
      });
  },

  toLeaveFeedback: (req, res) => {
    if (req.session.hasOwnProperty('passport')) {
      User
        .where({ facebookId: req.session.passport.user })
        .fetch()
        .then(user => {
          db.knex('items')
            .where({ current_bidder: user.id, feedback: null })
            .andWhere('end_at', '<', new Date())
            // 2016-06-06T23:11:07.828Z
            // 2016-06-12 15:59:22.632
            .then(items => res.status(200).send(items));
        });
    }
    res.status(404);
  },

  leaveFeedback: (req, res) => {
    new Feedback(req.body)
      .save()
      .then(feedback => {
        new Item({ id: req.body.item_id, feedback: feedback.attributes.id });
        res.send();
      });
  }
};
