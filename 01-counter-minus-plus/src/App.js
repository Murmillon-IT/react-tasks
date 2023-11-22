import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import CounterButtons from './components/CounterButtons'

function App() {
  const [counter, setCounter] = useState(0)

  const plusCounterHandler = () => {
    setCounter((prevCounter) => prevCounter + 1)
  }

  const minusCounterHandler = () => {
    setCounter((prevCounter) => prevCounter - 1)
  }

  const resetCounterHandler = () => {
    setCounter(0)
  }

  return (
    <div className='App'>
      <h1 className='counterTitle'>Счетчик:</h1>
      <Counter counter={counter} />
      <CounterButtons
        counter={counter}
        minusCounter={minusCounterHandler}
        plusCounter={plusCounterHandler}
        resetCounter={resetCounterHandler}
      />
    </div>
  )
}

export default App
