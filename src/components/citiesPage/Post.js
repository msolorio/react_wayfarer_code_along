function Post(props) {
  return (
    <li className="post">
      <img className="post-img" src={props.post.postImgUrl} alt=""/>
      <div>
        <h4 className="post-title">{props.post.postTitle}</h4>
        <p className="post-body">{props.post.postBody}</p>
      </div>
    </li>
  );
}

export default Post;