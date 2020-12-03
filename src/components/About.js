import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png'
import axios from 'axios'


const About = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0)
    axios.get('https://jsonplaceholder.typicode.com/posts/13')
      .then(res => {
        setAbout({body: res.data.body});
      })
  }, [])
  return (
    <div className="card mb-4">
      <div className="card-body">
      	<img src={logo} alt=""></img>
      	<h2 className="card-title card-title-react">This Page is to Demonstrate axios.get() Requests and Some of the React Hooks</h2>
      	<p className="card-text text-danger">Your browser may be blocking the content of this page.</p>
        <p className="card-text text-danger">Please disable the protection temporarily.</p>
        <p className="card-text">{about.body}</p>
      </div>
    </div>
  )
}

export default About