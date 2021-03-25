import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./index.css";

const Statistics = ({ text, value, symbol }) => {
  return (
    <>
      <td>{text}</td>
      <td>
        {value}
        {symbol}
      </td>
    </>
  );
};

const Button = ({ text, action }) => {
  return <button onClick={action}>{text}</button>;
};

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [all, setAll] = useState(0);

  const Good = () => {
    let value = all + 1;
    setGood(good + 1);
    setAll(value);
  };
  const Neutral = () => {
    let value = all + 1;
    setNeutral(neutral + 1);
    setAll(value);
  };
  const Bad = () => {
    let value = all + 1;
    setBad(bad + 1);
    setAll(value);
  };

  const average = () => {
    let dif = good - bad;
    if (all === 0) {
      return 0;
    }
    return dif / all;
  };
  const positive = () => {
    if (all === 0) {
      return 0;
    }
    return (good * 100) / all;
  };

  if (all === 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button text="good" action={Good} />
        <Button text="neutral" action={Neutral} />
        <Button text="bad" action={Bad} />
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>give feedback</h1>
      <Button text="good" action={Good} />
      <Button text="neutral" action={Neutral} />
      <Button text="bad" action={Bad} />
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <Statistics text="good" value={good} />
          </tr>
          <tr>
            <Statistics text="neutral" value={neutral} />
          </tr>
          <tr>
            <Statistics text="bad" value={bad} />
          </tr>
          <tr>
            <Statistics text="all" value={all} />
          </tr>
          <tr>
            <Statistics text="average" value={average()} />
          </tr>
          <tr>
            <Statistics text="positive" value={positive()} symbol="%" />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
