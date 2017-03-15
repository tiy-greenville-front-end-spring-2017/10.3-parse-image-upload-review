var Backbone = require('backbone');

var ParseModel = require('./parse').ParseModel;

var Puppy = ParseModel.extend({
  urlRoot: 'https://tiny-parse-server.herokuapp.com/classes/Puppy'
});

var PuppyCollection = Backbone.Collection.extend({
  model: Puppy
});

module.exports = {
  Puppy,
  PuppyCollection
};
