'use strict'

import React from 'react';
import Calculator from './pages/Calculator.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
   <Calculator />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
