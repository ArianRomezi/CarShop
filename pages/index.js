import React from "react";
import CarsPage from "../components/templates/CarsPage";
import carsData from "../data/carsData";
import Categories from "../components/module/Categories";
import Searchbar from "../components/module/Searchbar";
import AllButton from "../components/module/AllButton";

function Index() {
  const cars = carsData.slice(0, 3); //az oon araye migim setasho behem bede//
  return (
    <div>
      <Searchbar />
      <Categories />
      <AllButton />
      <CarsPage data={cars} />
    </div>
  );
}
export default Index;
