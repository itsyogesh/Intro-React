import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import '../public/normalize.css'
import '../public/style.css'

import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data.json'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match
            pattern='/search'
            component={(props) => <Search shows={preload.shows} {...props} />}
          />
          <Match
            pattern='/details/:id'
            component={(props) => {
              const shows = preload.shows.filter((show) => props.params.id === show.imdbID)
              return <Details show={shows[0]} {...props} /> 
            }} />
        </div>
      </BrowserRouter>

    )
  }
}

render(<App />, document.getElementById('app'))
