import { useState } from 'react'
import Button from './components/Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function handleClickGood(){
    setGood(good + 1)
  }
  function handleClickNeutral(){
    setNeutral(neutral + 1)
  }
  function handleClickBad(){
    setBad(bad + 1)
  }
  return (
    <>
      <h1>Give Fidebaack</h1>
      <Button onClickButton={handleClickGood} text="good"/>
      <Button onClickButton={handleClickNeutral} text="neutral"/>
      <Button onClickButton={handleClickBad} text="bad"/>
      <h1>Statistics</h1>
      <h3>Good {good} </h3>
      <h3>Neutral {neutral} </h3>
      <h3>Bad {bad} </h3>
    </>
  )
}

export default App