import React from "react";
import "./style.css";

const CardItem = (props) => {
  const { name, learningClass, slogan } = props;
  return (
    <div className="card-item">
      <p>Tôi tên: {name}</p>
      <p>Học lớp: {learningClass}</p>
      <p>{slogan}</p>
    </div>
  );
};

export default CardItem;
