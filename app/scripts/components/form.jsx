var React = require('react');

var ParseFile = require('../models/parse').ParseFile;
var Puppy = require('../models/puppy').Puppy;

class UploadForm extends React.Component{
  constructor(props){
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePicChange = this.handlePicChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
      pic: null,
      preview: null
    };
  }
  handleNameChange(e){
    this.setState({name: e.target.value});
  }
  handlePicChange(e){
    var file = e.target.files[0];
    this.setState({pic: file});
    console.log(file);
    // User file reader object to display preview
    var reader = new FileReader();
    reader.onloadend = ()=>{
      this.setState({preview: reader.result});
    }
    reader.readAsDataURL(file);
  }
  handleSubmit(e){
    e.preventDefault();
    // 1. we need to upload the image
    var pic = this.state.pic;
    var fileUpload = new ParseFile(pic);
    fileUpload.save({}, {
      data: pic
    }).then((response)=>{
      // 2. we need to get the image url from the server response
      var imageUrl = response.url;
      // 3. we need to save our puppy with the image url
      // {
      //   name: 'Watson',
      //   pic: {name: '', url: ''}
      // }
      var puppy = new Puppy();
      puppy.set({
        name: this.state.name,
        pic: {
          name: this.state.pic.name,
          url: imageUrl
        }
      });

      puppy.save().then(function(){
        console.log(puppy);
        // Backbone.history.navigate('detail/', {trigger: true});
      });
    });

    // var filePromise = fileUpload.save();
    // var puppyPromise = puppy.save();
    // Promise.all([filePromise, puppyPromise]).then(function(){
    //
    // });
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit} encType="multipart/form-data">
        <h1>Hipster Puppy</h1>

        <input onChange={this.handleNameChange} type="text" placeholder="Puppy Name" />

        <input onChange={this.handlePicChange} type="file"/>

        <img src={this.state.preview} />

        <input className="btn btn-primary" type="submit" value="Save"/>
      </form>
    )
  }
}

module.exports = {
  UploadForm
};
