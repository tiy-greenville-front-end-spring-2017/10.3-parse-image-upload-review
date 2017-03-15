var Backbone = require('backbone');

var ParseFile = Backbone.Model.extend({
  urlRoot: function(){
    return 'https://tiny-parse-server.herokuapp.com/files/' + this.get('name');
  }
});
