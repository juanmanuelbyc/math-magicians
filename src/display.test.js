'use strict'

import React from 'react';
import Display from './components/display.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Display next={null} total={null} operation={null} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
