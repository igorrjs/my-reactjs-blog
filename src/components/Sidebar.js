import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { filterPosts } from '../actions/postActions'


class Sidebar extends Component {
  handleClick = (search) => {
    this.props.filterPosts(search);
    this.props.history.push('/search');
  }
  handleLeave = (e) => {
    e.target.value = '';
  }
  render(){
    const { categs, auths } = this.props;
    const postCategories = 
      categs.map(categ => {
        return (
          <Link className="list-group-item list-group-item-light" to="/" key={categ.index}><i className='far fa-folder-open mr-1' style={{fontSize:14}}></i> {categ}</Link>
        )
      });
    const postAuthors = 
      auths.map(authr => {
        return (
          <Link className="list-group-item list-group-item-light" to="/" key={authr.index}><i className='far fa-user-circle mr-1' style={{fontSize:14}}></i> {authr}</Link>
        )
      });
    return (
      <div>
        <div className="mb-4">
          <h3>Search Posts</h3>
          <input type="search" className="form-control" placeholder="search" onChange={(e) => this.handleClick(e.target.value)} onBlur={this.handleLeave}/>
        </div>
        <div className="mb-3">
          <h3>Categories</h3>
          <div className="list-group">
            {postCategories}
          </div>
        </div>
        <div className="mb-3">
          <h3>Authors</h3>
          <div className="list-group">
            {postAuthors}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categs: state.categs,
    auths: state.auths
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterPosts: (search) => dispatch(filterPosts(search))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar))