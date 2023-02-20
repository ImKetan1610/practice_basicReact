import React from "react";

const Categories = ({ category, filterCategories }) => {
  return (
    <div className="btn-container">
      {category.map((each, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterCategories(each)}
          >
            {each}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
