import React, { useState } from 'react';

const Button = (props) => {
  return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
  )
}

const StatisticLine = (props) => {
  let percentage = ""
  if (props.text === "Positive") {
    percentage = "%"
  }
  return (
    <>
      <td>{props.text} </td>
      <td>{props.value} {percentage}</td>
    </>      
  )
}

const Statistics = (props) => {
  let total = props.good + props.neutral + props.bad
  console.log(total)
  if (!total)
    return ("No feedback received")
  
  return (
    <div>
      <table>
        <tbody>
          <tr>
          <StatisticLine text="Good" value={props.good} />
          </tr>
          <tr>
          <StatisticLine text="Neutral" value={props.neutral} />
          </tr>
          <tr>
          <StatisticLine text="Bad" value={props.bad} />
          </tr>
          <tr>
          <StatisticLine text="All" value={props.good + props.neutral + props.bad} />
          </tr>
          <tr>
          <StatisticLine text="Average" value={(props.good*1+props.neutral*0+props.bad*(-1))/3} />
          </tr>
          <tr>
          <StatisticLine text="Positive" value={(props.good*100)/(props.good+props.neutral+props.bad)} />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  return (
    <div>
      <h3> Give feedback </h3>
      <Button handleClick={() => { setGood(good + 1) }} text='good' />
      <Button handleClick={() => { setNeutral(neutral + 1) }} text='neutral' />
      <Button handleClick={() => { setBad(bad + 1) }} text='bad' />

      <h4> Statistics </h4>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
