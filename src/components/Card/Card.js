import React from "react";
import "./Card.scss";

function Card(props) {
  const { card } = props;

  return (
    <li className="card-item">
      {card.cover && (
        <img className="card-cover" src={card.cover} alt="JavaScript-img"></img>
      )}
      {card.title}
    </li>
  );
}

export default Card;
