import React, { Component } from 'react'
import { render } from 'react-dom'
import {BrowserRouter, Match } from 'react-router'
import '../public/normalize.css'
import '../public/style.css'

import Landing from './Landing'
import Search from './Search'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
        </div>
      </BrowserRouter>

    )
  }
}

render(<App />, document.getElementById('app'))
