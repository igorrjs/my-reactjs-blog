import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Post from './components/Post'
import NewPost from './components/NewPost'
import SearchPosts from './components/SearchPosts'


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <div className="jumbotron text-left large-img">
            <h1 className="text-light font-weight-bold">MY REACT.JS BLOG</h1>
            <span className="bg-dark text-light">&#9734; A small project to showcase some of my React &amp; Redux skills &#9734;</span> 
          </div>
          <Navbar />
          <div className="container" style={{marginTop:30}}>
            <div className="row">
              <div className="col-sm-8">
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/about' component={About} />
                  <Route path='/contact' component={Contact} />
                  <Route path='/newpost' component={NewPost} />
                  <Route path='/search' component={SearchPosts} />
                  <Route path='/:post_id' component={Post} />
                </Switch>
              </div>
              <div className="col-sm-4">
                <Sidebar />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;