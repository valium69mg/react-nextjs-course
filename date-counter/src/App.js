import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DateCounter/>
      </div>
    );
  }
}

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function onAddStep() {
    setStep(step + 1);
  }

   function onSubStep() {
    setStep(step - 1);
  }

   function onAddCount() {
    setCount(count + 1);
  }

   function onSubCount() {
    setCount(count - 1);
  }

  return <React.Fragment>
      <Steps step={step} onAdd={onAddStep} onSub={onSubStep}/>
      <Count count={count} onAdd={onAddCount} onSub={onSubCount}/>
      <DateDisplayer step={step} count={count}/>
  </React.Fragment>
}

function Steps({step, onAdd, onSub}) {
  return <div className='steps'> 
        <Button text="-" onClick={onSub}/>
        <p> Step: {step} </p>
        <Button text="+" onClick={onAdd}/>
      </div>
}

function Count({count, onAdd, onSub}) {
  return <div className='steps'> 
        <Button text="-" onClick={onSub}/>
        <p> count: {count} </p>
        <Button text="+" onClick={onAdd}/>
      </div>
}

function DateDisplayer({ step, count }) {
  const baseDate = new Date();
  const targetDate = new Date(baseDate);
  targetDate.setDate(baseDate.getDate() + step * count);

  const readableDate = targetDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return <p>{step * count} days from today is {readableDate}</p>;
}

function Button({text, onClick}) {
    return <button onClick={onClick}>
        {text}
    </button>
}

export default App;
