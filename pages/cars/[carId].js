import { useRouter } from "next/router";
import CarsDetails from "../../components/templates/CarsDetails";
import carsData from "../../data/carsData";

function CarDetail() {
  const router = useRouter();
  const { carId } = router.query;
  const carDetails = carsData[carId - 1];

  return <CarsDetails {...carDetails} />;
}

export default CarDetail;
