import React, { useState, useEffect } from "react";
import "./Category.css";
import { menu_list } from "../../assets/assets";

const Category = ({ category, setCategory }) => {
  return (
    <div className="container" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from our wide variety of dishes. Our mission is to provide you with the best delicious meal on time, every time! Taste satisfaction with every bite and experience culinary excellence with every visit.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))} className="explore-menu-list-item" key={index}>
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Category;
