import React, { useEffect, useState } from "react";
import SingleVehicle from "../SingleVehicle/SingleVehicle";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    const url = `https://www.json-generator.com/api/json/get/caDMRPLgUi?indent=2`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setVehicles(data));
  }, []);
  return (
    <div className="container">
      <div className="row">
        {vehicles.map((vehicle) => (
          <SingleVehicle vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
