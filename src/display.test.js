import React from 'react';
import renderer from 'react-test-renderer';
import Display from './components/display';

it('renders correctly', () => {
  const tree = renderer.create(
    <Display next={null} total={null} operation={null} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
