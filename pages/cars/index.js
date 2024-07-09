import React from "react";
import CarsPage from "../../components/templates/CarsPage";
import carsData from "../../data/carsData";
import Categories from "../../components/module/Categories";
import Searchbar from "../../components/module/Searchbar";

const index = () => {
  return (
    <div>
      <Searchbar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
};

export default index;
