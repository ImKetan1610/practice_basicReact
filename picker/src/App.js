import React, { useState } from "react";
import DisplayDifficulty from "./Components/DisplayDifficulty/DisplayDifficulty";
import MenuList from "./Components/MenuList/MenuList";
import s from './style.module.css'

function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("")

  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty)
  }

  return (
    <div className="App">
      <h1 style={{'textAlign':"center"}}>Select your React difficulty</h1>
      <div className={s.workspace}>
        <MenuList onItemClick= {onMenuListItemClick} />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}

export default App;
