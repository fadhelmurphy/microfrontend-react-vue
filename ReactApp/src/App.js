import React, { useEffect, useState } from "react";
import { Switch, Route, Router } from "react-router-dom";

const HelloWorld = () => {
  const [_, setVal] = useState(0);

  useEffect(() => {
    window.addEventListener("onIncrement", () => {
      setVal(window.myapp.counter);
    });
    window.addEventListener("onDecrement", () => {
      setVal(window.myapp.counter);
    });
  }, []);
  return (
    <div style={{border: "1px solid #5ed3f3"}}>
      <h2>This is from React!</h2>
      <div className="input-counter">
        <input
          className="minus"
          type="button"
          onClick={() => window.myapp.decrementor()}
          value="-"
        />
        <input
          className="counter"
          type="text"
          disabled
          value={window.myapp.counter}
        />
        <input
          className="plus"
          type="button"
          onClick={() => window.myapp.incrementor()}
          value="+"
        />
      </div>
      <br />
      <style jsx="true">
        {`
        h2{
          color: #5ed3f3;
        }
          .input-counter .counter {
            border: 1px solid #ddd;
            border-radius: 4px;
            width: 44px;
            height: 40px;
            outline: none;
            font-size: 12px;
            text-align: center;
            box-sizing: border-box;
            font-size: 18px;
            line-height: 14px;
            margin: 0 10px;
          }
          .minus,
          .plus {
            margin: 0;
            outline: none;
            border: 1px solid #ddd;
            width: 44px;
            height: 40px;
            cursor: pointer;
            background: #f2f2f2;
            border-radius: 4px;
            font-weight: 400;
            font-size: 22px;
            line-height: 18px;
          }
        `}
      </style>
    </div>
  );
};
// const HelloReact = ({ counter }) => <div>Only React! {counter}</div>;

export default ({ history, ...props }) => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/react" render={() => <HelloWorld {...props} />} />
          <Route path="/" render={() => <HelloWorld {...props} />} />
        </Switch>
        {/* <br /> */}
        {/* <Link to='/react'>Say hello to React!</Link> */}
        {/* <br /> */}
        {/* <Link to='/'>Say hello to the World!</Link> */}
      </Router>
    </>
  );
};
