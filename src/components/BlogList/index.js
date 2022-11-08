import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({blogsData: [...updatedData], isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <ul className="blog-list-container">
        {isLoading ? (
          <Loader
            testid="loader"
            type="TailSpin"
            color="#00bfff"
            height={50}
            width={50}
          />
        ) : (
          blogsData.map(each => <BlogItem key={each.id} blogItem={each} />)
        )}
      </ul>
    )
  }
}

export default BlogList
