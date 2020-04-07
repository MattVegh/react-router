import React from "react"
import serviceData from './ServicesData'

function ServicesList() {
    
    const services = serviceData.map(service => (
        <ul>
            <li>{service.name}: {service.price}</li>
            <li>{service.description}</li>
        </ul>
    ))
    return (
        <div>
            <h1>Services List Page</h1>
            {services}
        </div>
    )
}

export default ServicesList