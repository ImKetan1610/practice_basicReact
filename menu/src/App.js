import React, { useState } from "react";
import menuItems from "./data.js";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
const allCategories = [
  "all",
  ...new Set(menuItems.map((item) => item.category)),
];

function App() {
  const [items, setItems] = useState(menuItems);
  const [categories, setCategories] = useState(allCategories);

  const filterCategories = (category) => {
    if (category === "all") {
      setItems(menuItems);
      return;
    }
    const newItems = menuItems.filter((item) => item.category === category);
    console.log(newItems.length)
    setItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>
        <Categories category={categories} filterCategories={filterCategories} />
        <Menu menu={items} />
      </section>
    </main>
  );
}

export default App;
