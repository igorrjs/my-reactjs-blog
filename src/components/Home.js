import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import logo from '../images/logo.png'


class Home extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render(){
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="card mb-4" key={post.id}>
            <div className="card-body">
              <img src={logo} alt=""></img>
              <Link to={'/' + post.id} className="card-title card-title-react"><h2>{post.title}</h2></Link>
              <p className='text-secondary'>Posted <i className='far fa-clock' style={{fontSize:14}}></i> {moment(post.postedOn).format('LL')} by <i className='far fa-user-circle ef-rem' style={{fontSize:14}}></i> {post.author} in <i className='far fa-folder-open' style={{fontSize:14}}></i> {post.category}</p>
              <p className="card-text">{post.content.slice(0,265) + " ..."}</p>
              <Link to={'/' + post.id}><button type="button" className="btn btn-info">Read More <i className='fas fa-angle-double-right' style={{fontSize:12}}></i></button></Link>
            </div>
          </div>
        )
      })
    ) : (
      <div className="card mb-4">
        <div className="card-body">
          <p className="card-text">No Posts Yet.</p>
        </div>
      </div>
    );
    return (
      <div>
        <div>
          <h2>RECENT POSTS</h2>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)