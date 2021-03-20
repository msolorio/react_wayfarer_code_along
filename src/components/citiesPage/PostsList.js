import Post from './Post';

function PostsList(props) {
  const posts = props.posts.map((post) => {
    return (
      <Post
        post={post} 
        key={post.id}
      />
    );
  });

  return (
    <ul className="posts-list">
      { posts }
    </ul>
  );
}

export default PostsList;
