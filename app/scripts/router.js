var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var UploadForm = require('./components/form.jsx').UploadForm;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'uploadForm',
    'detail/:id/': 'showImage'
  },
  initialize: function(){
    $.ajaxSetup({
      beforeSend: function(xhr){
        xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
        xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");
      }
    });
  },
  uploadForm: function(){
    ReactDOM.render(
      React.createElement(UploadForm),
      document.getElementById('app')
    )
  },
  showImage: function(){

  }
});

var appRouter = new AppRouter();

module.exports = appRouter;
