var Backbone = require('backbone');

var ParseModel = Backbone.Model.extend({
  idAttribute: 'objectId'
});

var ParseCollection = Backbone.Collection.extend({
  parse: function(data){
    return data.results;
  }
});

var ParseFile = ParseModel.extend({
  urlRoot: function(){
    return 'https://tiny-parse-server.herokuapp.com/files/' + this.get('name');
  }
});

module.exports = {
  ParseModel,
  ParseCollection,
  ParseFile
};
