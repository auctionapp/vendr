var Message = require('../db/models/message');
var User = require('../db/models/user');

module.exports = {
  getMessages: (req, res) => {
    Message
    .query({ where: { sender: req.body.sender, receiver: req.body.receiver },
             orWhere: { sender: req.body.receiver, receiver: req.body.sender }})
    .orderBy('created_at', 'ASC')
    .fetchAll()
    .then(messages => {
      res.status(200).send(messages);
    });
  },

  sendMessage: (req, res) => {
    new Message(req.body).save().then(() => res.status(200));
  }
};
