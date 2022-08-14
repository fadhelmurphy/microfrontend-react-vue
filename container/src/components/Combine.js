import { mount } from "ReactApp/root";
import { mount as mount2 } from "VueApp/root";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default (props) => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const history = useHistory();

  // console.log(props.config.counter)

  useEffect(() => {
    // const { onParentNavigate } = mount(ref.current)
    const { onParentNavigate } = mount({
      selector: ref.current,
      config: { ...props.config },
    });
    mount2({ selector: ref2.current, config: { ...props.config } });
    history.listen(onParentNavigate);
  }, []);

  return (
    <>
      <h1>Both Render</h1>
      <div ref={ref} />
      <p>and below</p>
      <div ref={ref2} />
      <style jsx>
        {`
          h1 {
            font-family: system-ui;
          }
        `}
      </style>
    </>
  );
};
