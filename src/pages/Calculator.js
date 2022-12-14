import React, { useState } from 'react';
import Display from '../components/display';
import CalculatorButton from '../components/calculatorButton';
import calculate from '../logic/calculate';
import '../styles/calculator.css';

function Calculator() {
  const [obj, setObj] = useState({ total: null, next: null, operation: null });
  const clickHandler = (button) => {
    const newState = calculate(obj, button);
    setObj(newState);
  };

  return (
    <div className="calculatorPageContainer">
      <h2>Lets do some math!</h2>
      <div className="calculatorContainer">
        <Display next={obj.next} total={obj.total} operation={obj.operation} />
        <div className="buttonsContainer">
          <CalculatorButton type="characterButton" size="s1" label="AC" handleClick={clickHandler} />
          <CalculatorButton type="characterButton" size="s1" label="+/-" handleClick={clickHandler} />
          <CalculatorButton type="characterButton" size="s1" label="%" handleClick={clickHandler} />
          <CalculatorButton type="operationButton" size="s1" label="÷" handleClick={clickHandler} />
          <CalculatorButton type="characterButton" size="s1" label="1" handleClick={clickHandler} />
          <CalculatorButton type="characterButton" size="s1" label="2" handleClick={clickHandler} />
          <CalculatorButton type="characterButton" size="s1" label="3" handleClick={clickHandler} />
          <CalculatorButton type="operationButton" size="s1" label="x" handleClick={clickHandler} />
          <CalculatorButton type="characterButton" size="s1" label="4" handleClick={clickHandler} />
          <CalculatorButton type="characterButton" size="s1" label="5" handleClick={clickHandler} />
          <CalculatorButton type="characterButton" size="s1" label="6" handleClick={clickHandler} />
          <CalculatorButton type="operationButton" size="s1" label="-" handleClick={clickHandler} />
          <CalculatorButton type="characterButton" size="s1" label="7" handleClick={clickHandler} />
          <CalculatorButton type="characterButton" size="s1" label="8" handleClick={clickHandler} />
          <CalculatorButton type="characterButton" size="s1" label="9" handleClick={clickHandler} />
          <CalculatorButton type="operationButton" size="s1" label="+" handleClick={clickHandler} />
          <CalculatorButton type="characterButton" size="s2" label="0" handleClick={clickHandler} />
          <CalculatorButton type="characterButton" size="s1" label="." handleClick={clickHandler} />
          <CalculatorButton type="operationButton" size="s1" label="=" handleClick={clickHandler} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
