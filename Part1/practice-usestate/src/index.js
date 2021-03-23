import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Display = ({ text }) => (
  <span>
    <strong>{text}</strong>
  </span>
);

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>The app is used by pressing the buttons</div>;
  }
  return <div>Button press History: {allClicks.join(' ')}</div>;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [clicks, setClick] = useState({ right: 0, left: 0 });
  const [allClicks, setAll] = useState([]);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  const rightClick = () => {
    //  09626
    setAll(allClicks.concat("R"));
    setClick({ ...clicks, right: clicks.right + 1 });
  };

  const leftClick = () => {
    //  09626
    setAll(allClicks.concat("L"));
    setClick({ ...clicks, left: clicks.left + 1 });
  };
  return (
    <div>
      <div>
        <div>
          <Display text={counter} />
        </div>
        <Button text="Minus" handleClick={decreaseByOne} />
        <Button text="Zero" handleClick={setToZero} />
        <Button text="Plus" handleClick={increaseByOne} />
      </div>
      <div>
        <Button text="Left" handleClick={leftClick} />
        <Display text={clicks.left} />
        <Display text={"-"} />
        <Display text={clicks.right} />
        <Button text="Right" handleClick={rightClick} />
        <History allClicks={allClicks}></History>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
