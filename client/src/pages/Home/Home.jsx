import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Category from "../../components/Category/Category";
import Food from "../../components/Food/Food";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Category category={category} setCategory={setCategory} />
      <Food category={category} />
    </div>
  );
};

export default Home;
