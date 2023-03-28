import React from "react";
import MenuListItem from "../MenuListItem/MenuListItem";
import s from "./style.module.css";

const MenuList = (props) => {
  return (
    <div className={s.container}>
      <MenuListItem
        isSelected={props.difficulty === "Low"}
        onClick={props.onItemClick}
        difficulty="Low"
      />
      <MenuListItem
        isSelected={props.difficulty === "Medium"}
        onClick={props.onItemClick}
        difficulty="Medium"
      />
      <MenuListItem
        isSelected={props.difficulty === "High"}
        onClick={props.onItemClick}
        difficulty="High"
      />
      <MenuListItem
        isSelected={props.difficulty === "Extreme"}
        onClick={props.onItemClick}
        difficulty="Extreme"
      />
    </div>
  );
};

export default MenuList;
