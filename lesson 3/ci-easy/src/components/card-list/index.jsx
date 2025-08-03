import React from "react";
import "./style.css";
import CartItem from "../card-item";

const CardList = () => {
  return (
    <div className="card-list">
      <CartItem name="nguyễn văn a" learningClass="code react" slogan="Web fullstack..." />
      <CartItem name="nguyễn văn b" learningClass="code nodejs" slogan="Web fullstack..." />
      <CartItem name="nguyễn văn c" learningClass="code c#" slogan="Web fullstack..." />
    </div>
  );
};

export default CardList;
