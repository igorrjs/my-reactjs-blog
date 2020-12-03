import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'
import moment from 'moment'
import logo from '../images/logo.png'


class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render(){
    const post = this.props.post ? (
      <div className="card mb-4">
        <div className="card-body">
          <img src={logo} alt=""></img>
          <h2 className="card-title card-title-react">{this.props.post.title}</h2>
          <p className='text-secondary'>Posted <i className='far fa-clock' style={{fontSize:14}}></i> {moment(this.props.post.postedOn).format('LL')} by <i className='far fa-user-circle' style={{fontSize:14}}></i> {this.props.post.author} in <i className='far fa-folder-open' style={{fontSize:14}}></i> {this.props.post.category}</p>
          <p className="card-text">{this.props.post.content}</p>
          {this.props.login && (
          <button type="button" className="btn btn-danger" onClick={this.handleClick}>Delete Post<i className='fas fa-times ml-2' style={{fontSize:16}}></i></button>
          )}
        </div>
      </div>
    ) : (
      <div>Loading Post...</div>
    );
    return (
      <div>
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id),
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)