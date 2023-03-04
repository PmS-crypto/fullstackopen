import { useState } from 'react'

var ary = new Uint8Array(8); 

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const handleClick = () => {
    setSelected(getRandomInt(8))
  }

  const handleVote = () => {
    setVote(vote+1)
    ary[selected] += 1
  }

  const MaxVote = () => {
    return (
      <div>
        <br/>
        { anecdotes[ary.indexOf(Math.max(...ary))]} has {Math.max(...ary)} votes
      </div>
    )
  }

  return (
    <div>
      <br/>
      {anecdotes[selected]}
      <br />

      has {ary[selected]} votes.
      <br/>
      <br/>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>Next Anecdote</button>
      <br />
      <MaxVote />
    </div>
  );
}

export default App;
