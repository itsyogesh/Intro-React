import React, { Component } from 'react'
import preload from '../public/data.json'

import ShowCard from './ShowCard'

class Search extends Component {
  render () {
    return (
      <div className='search'>
        {preload.shows.map((show) => {
          return (
            <ShowCard key={show.imdbID} show={show} />
          )
        })}
      </div>
    )
  }
}

export default Search
