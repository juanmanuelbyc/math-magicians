import React from 'react';
import Display from './display';
import CalculatorButton from './calculatorButton';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { total: null, next: null, operation: null };
  }

  handleClick(button) {
    const newState = calculate(this.state, button);
    this.setState(newState);
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <div className="calculatorContainer">
        <Display next={next} total={total} operation={operation} />
        <div className="buttonsContainer">
          <CalculatorButton type="characterButton" size="s1" label="AC" handleClick={this.handleClick} />
          <CalculatorButton type="characterButton" size="s1" label="+/-" handleClick={this.handleClick} />
          <CalculatorButton type="characterButton" size="s1" label="%" handleClick={this.handleClick} />
          <CalculatorButton type="operationButton" size="s1" label="÷" handleClick={this.handleClick} />
          <CalculatorButton type="characterButton" size="s1" label="1" handleClick={this.handleClick} />
          <CalculatorButton type="characterButton" size="s1" label="2" handleClick={this.handleClick} />
          <CalculatorButton type="characterButton" size="s1" label="3" handleClick={this.handleClick} />
          <CalculatorButton type="operationButton" size="s1" label="x" handleClick={this.handleClick} />
          <CalculatorButton type="characterButton" size="s1" label="4" handleClick={this.handleClick} />
          <CalculatorButton type="characterButton" size="s1" label="5" handleClick={this.handleClick} />
          <CalculatorButton type="characterButton" size="s1" label="6" handleClick={this.handleClick} />
          <CalculatorButton type="operationButton" size="s1" label="-" handleClick={this.handleClick} />
          <CalculatorButton type="characterButton" size="s1" label="7" handleClick={this.handleClick} />
          <CalculatorButton type="characterButton" size="s1" label="8" handleClick={this.handleClick} />
          <CalculatorButton type="characterButton" size="s1" label="9" handleClick={this.handleClick} />
          <CalculatorButton type="operationButton" size="s1" label="+" handleClick={this.handleClick} />
          <CalculatorButton type="characterButton" size="s2" label="0" handleClick={this.handleClick} />
          <CalculatorButton type="characterButton" size="s1" label="." handleClick={this.handleClick} />
          <CalculatorButton type="operationButton" size="s1" label="=" handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
