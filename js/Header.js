import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

class Header extends Component {
  render() {
    let utilSpace
    if(this.props.showSearch) {
      utilSpace =
      <input
        onChange={this.props.handleSearchTermChange}
        value={this.props.searchTerm}
        type='text'
        placeholder='Search'
        />
    }
    else {
      utilSpace =
      <h2>
        <Link to='/search'>Back</Link>
      </h2>
    }
    return(
      <header>
        <h1>
          <Link to="/">NetVideo</Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

Header.propTypes = {
  handleSearchTermChange: PropTypes.func,
  showSearch: PropTypes.bool,
  searchTerm: PropTypes.string
}

export default Header;
