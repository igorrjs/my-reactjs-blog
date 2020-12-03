import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import logo from '../images/logo.png'


class SearchPosts extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  clearSearch = () => {
    this.props.history.push('/');
  }
  render(){
    const { filterPosts } = this.props
    const filterList = filterPosts.length ? (
      filterPosts.map(post => {
        return (
          <div className="card mb-4" key={post.id}>
            <div className="card-body">
              <img src={logo} alt=""></img>
              <Link to={'/' + post.id} className="card-title card-title-react"><h2>{post.title}</h2></Link>
              <p className='text-secondary'>Posted <i className='far fa-clock' style={{fontSize:14}}></i> {moment(post.postedOn).format('LL')} by <i className='far fa-user-circle' style={{fontSize:14}}></i> {post.author} in <i className='far fa-folder-open' style={{fontSize:14}}></i> {post.category}</p>
              <p className="card-text">{post.content.slice(0,265) + " ..."}</p>
              <Link to={'/' + post.id}><button type="button" className="btn btn-info">Read More <i className='fas fa-angle-double-right' style={{fontSize:12}}></i></button></Link>
            </div>
          </div>
        )
      })
    ) : (
      <div className="card mb-4">
        <div className="card-body">
          <p className="card-text">No Such Post Found.</p>
        </div>
      </div>
    );
    return (
      <div>
        <div>
          <h2>SEARCH RESULT<button className="btn btn-info float-right" onClick={this.clearSearch}>Clear Search<i className='fas fa-times ml-2' style={{fontSize:16}}></i></button></h2>
          {filterList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filterPosts: state.filterPosts
  }
}

export default connect(mapStateToProps)(SearchPosts)