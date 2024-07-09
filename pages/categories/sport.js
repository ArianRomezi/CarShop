import React from "react";
import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";

const Sport = () => {
  const sportCars = carsData.filter((car) => car.category === "sport");
  return (
    <div>
      <CarsList data={sportCars} />
    </div>
  );
};

export default Sport;
