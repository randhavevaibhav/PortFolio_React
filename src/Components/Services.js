import React from 'react';
import { ServicesList } from '../helpers/ServicesList';
import ServiceItem from './ServiceItem';

function Services(props) {
    
    return (
        <div>
            <section className="container section" id="services">
    <h1 className="text-center">Services</h1>
    <div className="row services">
    {ServicesList.slice(0,3).map((service,idx)=>{

        return(<ServiceItem id ={idx} iClass={service.iClassName} title={service.title} para ={service.para}/>)

        })}

   
    </div>
    <div className="row">
    {ServicesList.slice(3,6).map((service,idx)=>{

return(<ServiceItem id ={idx} iClass={service.iClassName} title={service.title} para ={service.para}/>)

})}
    </div>
  </section>
        </div>
    );
}

export default Services;