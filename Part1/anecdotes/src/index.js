import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Information = ({ title, anecdotes, votes }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{anecdotes}</p>
      <p>has {votes} votes</p>
    </div>
  );
};

const Button = ({ text, action }) => {
  return <button onClick={action}>{text}</button>;
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);

  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const Random = () => {
    let min = 0;
    let max = anecdotes.length;
    let number = Math.floor(Math.random() * (max - min));
    setSelected(number);
  };

  const Vote = () => {
    const data = [...votes];
    data[selected] += 1;
    setVotes(data);
  };

  const Max = () => {
    const arr = [...votes];
    let higher = Math.max(...arr);
    return [arr.indexOf(higher), higher];
  };

  const [max, higher] = Max();

  if (higher === 0) {
    return (
      <div>
        <Information
          title="Anecdotes of the day"
          anecdotes={anecdotes[selected]}
          votes={votes[selected]}
        />
        <Button text="vote" action={Vote} />
        <Button text="next anecdote" action={Random} />
        <h1>Anecdote with most votes</h1>
      </div>
    );
  }
  return (
    <div>
      <Information
        title="Anecdotes of the day"
        anecdotes={anecdotes[selected]}
        votes={votes[selected]}
      />
      <Button text="vote" action={Vote} />
      <Button text="next anecdote" action={Random} />
      <Information
        title="Anecdote with most votes"
        anecdotes={anecdotes[max]}
        votes={votes[max]}
      />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
