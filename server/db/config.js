var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.APP_NAME
  }
});
var db = require('bookshelf')(knex);

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('name', 255);
      user.string('email', 255);
      user.string('facebookId', 255);
      user.string('address', 255);
      user.string('bio', 255);
      user.string('picture', 255);
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table users:', table);
    });
  }
});

db.knex.schema.hasTable('items').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('items', function (item) {
      item.increments('id').primary();
      item.string('seller_id', 255);
      item.string('title', 255);
      item.string('description', 2000);
      item.integer('currentBid');
      item.integer('current_bidder');
      item.integer('visits');
      item.string('picture', 255);
      item.integer('duration');
      item.string('end_at', 255);
      item.integer('feedback');
      item.timestamps();
    }).then(function (table) {
      console.log('Created Table items:', table);
    });
  }
});

db.knex.schema.hasTable('bids').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('bids', function (bid) {
      bid.increments('id').primary();
      bid.integer('user_id');
      bid.integer('item_id');
      bid.integer('amount');
      bid.timestamps();
    }).then(function (table) {
      console.log('Created Table bids:', table);
    });
  }
});

db.knex.schema.hasTable('watchLists').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('watchLists', function (watchList) {
      watchList.increments('id').primary();
      watchList.integer('user_id');
      watchList.integer('item_id');
      watchList.timestamps();
    }).then(function (table) {
      console.log('Created Table watchLists:', table);
    });
  }
});

db.knex.schema.hasTable('messages').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('messages', function (message) {
      message.increments('id').primary();
      message.integer('sender');
      message.integer('receiver');
      message.string('message', 255);
      message.timestamps();
    }).then(function (table) {
      console.log('Created Table messages:', table);
    });
  }
});

db.knex.schema.hasTable('feedback').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('feedback', function (feedback) {
      feedback.increments('id').primary();
      feedback.integer('author_id');
      feedback.integer('receiver_id');
      feedback.integer('rating');
      feedback.integer('item_id');
      feedback.string('comment', 255);
      feedback.timestamps();
    }).then(function (table) {
      console.log('Created Table feedbacks:', table);
    });
  }
});

module.exports = db;
