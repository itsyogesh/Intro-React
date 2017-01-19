import React, { Component, PropTypes } from 'react'
import Header from './Header'

class Details extends Component {
  render () {
    const { title, description, year, poster, trailer } = this.props.show
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          <img src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
}

Details.propTypes = {
  show: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    trailer: PropTypes.string,
    description: PropTypes.string
  })
}

export default Details
