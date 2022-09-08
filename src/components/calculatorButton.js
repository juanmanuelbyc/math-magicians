import PropTypes from 'prop-types';
import React from 'react';

class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
}

handleClick(){
  this.props.handleClick(this.props.label);
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
};

export default CalculatorButton;
