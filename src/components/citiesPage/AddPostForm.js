import React from 'react';

class AddPostForm extends React.Component {
  state = {
    titleVal: '',
    bodyVal: ''
  }

  handleTitleChange = (event) => {
    this.setState({ titleVal: event.target.value });
  }

  handleBodyChange = (event) => {
    this.setState({ bodyVal: event.target.value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      postTitle: this.state.titleVal,
      postBody: this.state.bodyVal
    }
    
    this.props.addPost(newPost);
    this.props.toggleForm();
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h2 className="form-header">Add a Post</h2>
  
        <div className="form-group">
          <label className="form-label" htmlFor="title">Title:</label>
          <input 
            className="form-input" 
            type="text" 
            id="title"
            value={this.state.titleVal}
            onChange={(event) => this.handleTitleChange(event)}
          />
        </div>
  
        <div className="form-group">
          <label className="form-label" htmlFor="body">Body:</label>
          <textarea
            className="form-input" 
            type="text" 
            id="body"
            value={this.state.bodyVal} 
            onChange={(event) => this.handleBodyChange(event)}
          />
        </div>
  
        <button>Add Post</button>
      </form>
    );
  }
}

export default AddPostForm;