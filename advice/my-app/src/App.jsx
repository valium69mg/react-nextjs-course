import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [advice, setAdvice] = useState('fetch your advice!');
  const [adviceLoading, setAdviceLoading] = useState(false);

  async function fetchAdvice() {
    try {
      const url = 'https://api.adviceslip.com/advice';
      setAdviceLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      const advice = data.slip.advice;
      setAdviceLoading(false);
      setAdvice(advice);
      setCount(count + 1);
    } catch (error){
      console.log(error);
      setAdviceLoading(false);
      setAdvice('coud not fetch advice :(')   
    }
  }

  return ( 
    <>
      <div>
        {adviceLoading ? <h1>Loading...</h1> : <h1>{advice}</h1>}
        <button onClick={fetchAdvice}> Get Advice </button>
        <p> You have fetched {count} advice(s) </p>
      </div>
    </>
  )
}

export default App
