var UserController = require('./controllers/UserController');
var ProfileController = require('./controllers/ProfileController');
var FeedbackController = require('./controllers/FeedbackController')
var MessagesController = require('./controllers/MessagesController');
var SearchController = require('./controllers/SearchController');
var ItemsController = require('./controllers/ItemsController');

module.exports = (app) => {
  app.get('/getuserid', UserController.getUserId);
  app.get('getuserfacebookid', UserController.getUserFacebookId);

  app.get('/getprofile', ProfileController.getProfile);

  app.get('/feedback', FeedbackController.getFeedback);
  app.get('/toleavefeedback', FeedbackController.toLeaveFeedback);
  app.post('/leavefeedback', FeedbackController.leaveFeedback);

  app.post('/getMessages', MessagesController.getMessages);
  app.post('/sendMessage', MessagesController.sendMessage);

  app.post('/search', SearchController.search);

  app.get('/getItemSeller', ItemsController.getItemSeller);
  app.post('/updateBid', ItemsController.updateBid);
  app.get('/watchitem', ItemsController.watchItem);
  app.post('/addvisit', ItemsController.addVisit);
  app.get('/getWatchedItems', ItemsController.getWatchedItems);
  app.get('/getListedItems', ItemsController.getListedItems);
  app.get('/getPopularItems', ItemsController.getPopularItems);
  app.post('/sellItem', ItemsController.sellItem);
}
