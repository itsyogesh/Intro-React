import React, { Component } from 'react'

class ShowCard extends Component {
  render() {
    const { poster, title, year, description } = this.props.show
    return (
      <div className='show-card'>
        <img src={`/public/img/posters/${poster}`} />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default ShowCard
