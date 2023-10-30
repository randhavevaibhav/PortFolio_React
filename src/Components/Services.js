import React from "react";
import { ServicesList } from "../helpers/ServicesList";
import ServiceItem from "./ServiceItem";

function Services(props) {
  const rowIndexList = [0, 3]; //Add 6 for 3rd row
  return (
    <div>
      <section className="container section" id="services">
        <h1 className="text-center">Services</h1>
        {rowIndexList.map((rowNum) => {
          return (
            <div className="row">
              {ServicesList.slice(rowNum, rowNum + 3).map((service, idx) => {
                return (
                  <ServiceItem
                 
                    id={idx}
                    iClass={service.iClassName}
                    title={service.title}
                    para={service.para}
                  />
                );
              })}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Services;
