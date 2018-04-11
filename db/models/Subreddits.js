const mongoose = require('mongoose');
const db = require('./index');

var subredditSchema = mongoose.Schema({
  name: { type: String, required: true },
  subscriberCount: Number
});

var Subreddit = db.model('Subreddit', subredditSchema);

module.exports = Subreddit;