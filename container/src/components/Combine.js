// import { mount } from "ReactApp/Mounting";
import ReactCounter from "./ReactApp";
import VueCounter from "./VueApp";
import React from "react";

export default (props) => {

  return (
    <>
      <h1>Both Render</h1>
      <ReactCounter config={props.config} />
      <p>and below</p>
      <VueCounter config={props.config} />
      <style jsx="true">
        {`
          h1 {
            font-family: system-ui;
          }
        `}
      </style>
    </>
  );
};
