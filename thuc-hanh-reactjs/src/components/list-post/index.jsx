import React from 'react'
import { getAllPostService } from '../../services/post.service';

const ListPosts = () => {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    getAllPostService().then(res => setPosts(res.data)).catch(err => console.log(err));
  }, [])
  return (
    <div className='d-grid' style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
      {posts && posts.length > 0 && posts.map(post => (
        <div key={post.id}>
          <img src="https://picsum.photos/200" alt="" />
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  )
}

export default ListPosts