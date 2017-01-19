import React, { Component, PropTypes } from 'react'

import ShowCard from './ShowCard'
import Header from './Header'

class Search extends Component {
  constructor (props) {
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
        <Header
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>

          {this.props.shows
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

Search.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string,
      description: PropTypes.string
    }
  ))
}

export default Search
