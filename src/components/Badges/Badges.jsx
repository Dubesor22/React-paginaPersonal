import React from "react";
import "./Badges.css";

export const Badges = (props) => {
  const badges = props.myBadges.map((element) => {
    return <img src={element.img} className="badges" alt={element.nombre} />;
  });
  return (
    <div>
      <h2 className="tecnologies">Mi Ninjutsu</h2>
      <div className="badges-container">{badges}</div>
    </div>
  );
};
