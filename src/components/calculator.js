import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { value } = props;
  return (
    <div className="display">
      <h1>{value}</h1>
    </div>
  );
};

Display.defaultProps = {
  value: 0,
};
Display.propTypes = {
  value: PropTypes.string,
};

const CalculatorButton = (props) => {
  const { size, type, label, } = props;
  const classes = `${size} ${type} button`;
  return (
    <button type="button" className={classes}>{label}</button>
  );
};

CalculatorButton.propTypes = {
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const ButtonsContainer = () => {
  return (
    <div className="buttonsContainer">
      <CalculatorButton type="characterButton" size="s1" label="AC" />
      <CalculatorButton type="characterButton" size="s1" label="+/-" />
      <CalculatorButton type="characterButton" size="s1" label="%" />
      <CalculatorButton type="operationButton" size="s1" label="÷" />
      <CalculatorButton type="characterButton" size="s1" label="1" />
      <CalculatorButton type="characterButton" size="s1" label="2" />
      <CalculatorButton type="characterButton" size="s1" label="3" />
      <CalculatorButton type="operationButton" size="s1" label="x" />
      <CalculatorButton type="characterButton" size="s1" label="4" />
      <CalculatorButton type="characterButton" size="s1" label="5" />
      <CalculatorButton type="characterButton" size="s1" label="6" />
      <CalculatorButton type="operationButton" size="s1" label="-" />
      <CalculatorButton type="characterButton" size="s1" label="7" />
      <CalculatorButton type="characterButton" size="s1" label="8" />
      <CalculatorButton type="characterButton" size="s1" label="9" />
      <CalculatorButton type="operationButton" size="s1" label="+" />
      <CalculatorButton type="characterButton" size="s2" label="0" />
      <CalculatorButton type="characterButton" size="s1" label="." />
      <CalculatorButton type="operationButton" size="s1" label="=" />
    </div>
  );
};

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculatorContainer">
        <Display />
        <ButtonsContainer />
      </div>
    );
  }
}

export default Calculator;
