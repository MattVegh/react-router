import React from "react"
import serviceData from './ServicesData'
import { Link } from 'react-router-dom'

function ServicesList() {
    
    const services = serviceData.map(service => (
        <div key={service._id}>
            <h3 ><Link to={`/services/${service._id}`}>{service.name}</Link> ${service.price}</h3>
            <h3>{service.description}</h3>
        </div>
    ))
    return (
        <div>
            <h1>Services List Page</h1>
            {services}
        </div>
    )
}

export default ServicesList