import React from 'react';
import Display from './display';
import ButtonsContainer from './buttonsContainer';

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
