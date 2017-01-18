import React, { Component, PropTypes } from 'react'
import preload from '../public/data.json'

import ShowCard from './ShowCard'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (e) {
      this.setState({searchTerm: e.target.value})
  }

  render () {
    return (
      <div className='search'>
        <header>
          <h1>NetVideo</h1>
          <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='Search'/>
        </header>
        <div>
          {preload.shows
            .filter((show) => {
              return `${show.title} ${show.description}`
                      .toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            })
            .map((show) => {
            return (
              <ShowCard key={show.imdbID} show={show} />
            )
          })}
        </div>
      </div>
    )
  }
}

ShowCard.propTypes = {
  show: PropTypes.shape({
    poster: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    description: PropTypes.string
  })
}

export default Search
