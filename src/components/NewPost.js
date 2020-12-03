import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/postActions'
import * as uuid from 'uuid'
import logo from '../images/logo.png'


class NewPost extends Component {
  state = {
    id: uuid.v4(),
    title: '',
    content: '',
    category: '',
    author: '',
    postedOn: ''
  }
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      postedOn: new Date().toUTCString()
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPost(this.state);
    this.props.history.push('/');
  }
  render(){
    const { categs, auths } = this.props;
    const postCategories = 
      categs.map(categ => {
        return (
          <option key={categ.index}>{categ}</option>
        )
      });
    const postAuthors = 
      auths.map(authr => {
        return (
          <option key={authr.index}>{authr}</option>
        )
      });
    return (
      <div className="card mb-4">
        <div className="card-body">
          <img src={logo} alt=""></img>
          <h2 className="card-title-react">Add a New Post</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Post Title:</label>
              <input type="text" className="form-control" id="title" onChange={this.handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="content">Post Content:</label>
              <textarea className="form-control" id="content" onChange={this.handleChange} required ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="author">Post Category:</label>
              <select className="form-control custom-select" id="category" onChange={this.handleChange} required >
                <option></option>
                {postCategories}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="author">Post Author:</label>
              <select className="form-control custom-select" id="author" onChange={this.handleChange} required >
                <option></option>
                {postAuthors}
              </select>
            </div>
            <button type="submit" className="btn btn-info mb-3">Submit</button>
          </form>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title-react">Preview Post</h2>
              <h5>Post Title:</h5>
              <p>{this.state.title}</p>
              <h5>Post Content:</h5>
              <p>{this.state.content}</p>
              <h5>Post Category:</h5>
              <p>{this.state.category}</p>
              <h5>Post Author:</h5>
              <p>{this.state.author}</p>
            </div>
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
    addPost: (newPost) => dispatch(addPost(newPost))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (NewPost)