import React from "react";
import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";

const Hatchback = () => {
  const hatchbackCars = carsData.filter((car) => car.category === "hatchback");
  return (
    <div>
      <CarsList data={hatchbackCars} />
    </div>
  );
};

export default Hatchback;
