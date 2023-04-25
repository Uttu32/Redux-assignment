import React from "react";
import "./Button.css"

const Button = ({ dispatch, increaseBtnCount, name }) => {
  return (
    <div className="btn">
      <button
        onClick={() => {
          dispatch(increaseBtnCount({ name: name }));
        }}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
