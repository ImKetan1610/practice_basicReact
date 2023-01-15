import React from "react";

const Tour = ({ id, image, name, info, price, removeTours }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <h4>{name}</h4>
        <h4 className="tour-price">{price}</h4>
      </footer>
      <p>
        {info}
        <button>read more...</button>
      </p>
      <button className="delete-button" onClick={() => removeTours(id)}>
        Not Interested
      </button>
    </article>
  );
};

export default Tour;
