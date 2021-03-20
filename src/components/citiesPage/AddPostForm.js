function AddPostForm() {
  return (
    <form>
      <h2 className="form-header">Add a Post</h2>

      <div className="form-group">
        <label
          className="form-label" 
          htmlFor="title"
        >
          Title:
        </label>
        <input 
          className="form-input" 
          type="text" 
          id="title" 
        />
      </div>

      <div className="form-group">
        <label 
          className="form-label" 
          htmlFor="body"
        >
          Body:
        </label>
        <input 
          className="form-input" 
          type="text" 
          id="body" 
        />
      </div>

      <button>Add Post</button>
    </form>
  );
}

export default AddPostForm;