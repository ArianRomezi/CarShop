import React from "react";
import carsData from "../../data/carsData";
import { useRouter } from "next/router";
import CarsList from "../../components/templates/CarsList";

const FilteredCars = () => {
  const router = useRouter();

  const [min, max] = router.query.slug || []; //inja ye meghdar defult mide behesh chon momkene data dir biad va baraye jologiri az error ye araye khali midim//

  const filtered = carsData.filter(
    (item) => item.price > min && item.price < max
  );

  if (!filtered.length) return <h3>NOT FOUND</h3>;
  return (
    <div>
      <CarsList data={filtered} />
    </div>
  );
};

export default FilteredCars;
