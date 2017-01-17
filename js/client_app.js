/* global React ReactDOM */
import React from 'react'
import ReactDOM from 'react-dom'

import MyTitle from './MyTitle'

var div = React.DOM.div

var myFirstComponent = React.createClass({
  render: function () {
    return (
      div(null, [
        React.createElement(MyTitle, {title: 'Props are the best', color: 'peru'}),
        React.createElement(MyTitle, {title: 'Semicolons are okay', color: 'mediumaquamarine'}),
        React.createElement(MyTitle, {title: 'jk, lol, they arent', color: 'rebeccapurple'}),
        React.createElement(MyTitle, {title: 'State is needed in here', color: 'dodgerblue'})
      ])
    )
  }
})
ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'))
