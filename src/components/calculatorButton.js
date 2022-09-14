import PropTypes from 'prop-types';
import React from 'react';
import '../styles/calculatorButton.css';

class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { handleClick, label } = this.props;
    handleClick(label);
  }

  render() {
    const { size, type, label } = this.props;
    const classes = `${size} ${type} button`;
    return (
      <button type="button" className={classes} onClick={this.handleClick}>{label}</button>
    );
  }
}

CalculatorButton.propTypes = {
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CalculatorButton;
