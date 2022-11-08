import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, author, title, imageUrl, avatarUrl, topic} = blogItem

  const blogItems = () => (
    <li className="blog-item-con">
      <img src={imageUrl} alt="imageUrl" className="blog-item-image" />
      <div className="blog-item-topic-title-avatar-author-con">
        <p className="blog-item-topic">{topic}</p>
        <h1 className="blog-item-title">{title}</h1>
        <div className="blog-item-avatar-author-url">
          <img src={avatarUrl} className="blog-item-avatar" alt="avatar" />
          <p className="blog-item-author">{author}</p>
        </div>
      </div>
    </li>
  )
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      {blogItems()}
    </Link>
  )
}

export default BlogItem
