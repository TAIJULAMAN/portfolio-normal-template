import { useEffect, useState } from "react";
import SingleService from "./SingleService";

const Services = () => {

      const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 my-8">
      {services.map((service) => (
        <SingleService key={service.name} service={service}></SingleService>
      ))}
    </div>
    );
};

export default Services;