import React from 'react'
import ShowCard from './ShowCard'
import renderer from 'react-test-renderer'
import preload from '../public/data.json'

test('show-card snapshot test', () => {
  const component = renderer.create(<ShowCard show={preload.shows[0]} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
