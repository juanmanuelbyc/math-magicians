import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorButton from './components/calculatorButton';

const clickHandler = (button) => {
  const newState = calculate(obj, button);
  setObj(newState);
};

it('renders correctly', () => {
  const tree = renderer.create(
    <CalculatorButton type="characterButton" size="s1" label="AC" handleClick={clickHandler} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
