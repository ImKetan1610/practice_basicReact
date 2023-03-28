import React from "react";
import s from './style.module.css'

const DisplayDifficulty = (props) => {
  return (
    <div className={s.container}>
      {props.difficulty
        ? `Difficulty Set To ${props.difficulty}`
        : "No Difficulty Set"}
    </div>
  );
};

export default DisplayDifficulty;
