import PropTypes from 'prop-types';

const CalculatorButton = (props) => {
  const { size, type, label } = props;
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

const ButtonsContainer = () => (
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

export default ButtonsContainer;
