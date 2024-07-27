import { useState } from 'react';

const App = () => {
  const initialAnecdotes = [
    {
      text: 'If it hurts, do it more often.',
      vote: 0
    },
    {
      text: 'Adding manpower to a late software project makes it later!',
      vote: 0
    },
    {
      text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      vote: 0
    },
    {
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      vote: 0
    },
    {
      text: 'Premature optimization is the root of all evil.',
      vote: 0
    },
    {
      text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      vote: 0
    },
    {
      text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      vote: 0
    },
    {
      text: 'The only way to go fast, is to go well.',
      vote: 0
    }
  ];

  const [selected, setSelected] = useState(0);
  const [anecdotes, setAnecdotes] = useState(initialAnecdotes);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function handleClick() {
    setSelected(getRandomInt(anecdotes.length));
  }

  function handleClickVote() {
    const updatedAnecdotes = anecdotes.map((anecdote, index) =>
      index === selected
        ? { ...anecdote, vote: anecdote.vote + 1 }
        : anecdote
    );
    setAnecdotes(updatedAnecdotes);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {anecdotes[selected].text}
      <p>has {anecdotes[selected].vote} votes</p>
      <div>
        <button onClick={handleClickVote} style={{ margin: '10px' }}>
          vote
        </button>
        <button onClick={handleClick} style={{ width: '100px' }}>
          next anecdote
        </button>
      </div>
    </div>
  );
};

export default App;
