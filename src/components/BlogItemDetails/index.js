import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getApiData()
  }

  getApiData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    console.table(updatedData)
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, blogData} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogData
    return isLoading ? (
      <Loader
        testid="loader"
        type="TailSpin"
        color="#00bfff"
        height={50}
        width={50}
      />
    ) : (
      <div className="blog-details-con">
        <h1 className="bdl-title">{title}</h1>
        <div className="bdl-avatar-author-con">
          <img src={avatarUrl} alt="avatar" className="bdl-avatar" />
          <p className="bdl-author">{author}</p>
        </div>
        <img src={imageUrl} className="bdl-image" alt={title} />
        <p className="bdl-content">{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
