import React, { useState } from "react";
import s from "./style.module.css";

const MenuListItem = (props) => {
  const [isHovered, setIsHover] = useState(false);

  const activate = () => {
    setIsHover(true);
  };

  const deactivate = () => {
    setIsHover(false);
  };

  const getBackGroundColor = () => {
    if (isHovered) {
      return "#a5e9ff";
    } else {
      if (props.isSelected) {
        return "#26baea";
      } else {
        return "#eff0ef";
      }
    }
  };
  const onItemClick = () => {
    console.log(props.difficulty);
    props.onClick(props.difficulty);
  };

  return (
    <div
      onClick={onItemClick}
      className={s.container}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackGroundColor() }}
    >
      Set to : {props.difficulty}
    </div>
  );
};

export default MenuListItem;
