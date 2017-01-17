import React, {Component} from 'react'
import {Link} from 'react-router'

class Landing extends Component {
  render () {
    return (
      <div className='landing'>
        <h1>NetVideo</h1>
        <input type='text' placeholder='Search' />
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
}

export default Landing
