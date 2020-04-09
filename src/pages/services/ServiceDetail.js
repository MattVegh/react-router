import React from "react"
import { useParams, useHistory } from 'react-router-dom'
import servicesData from './ServicesData'


function ServiceDetail(props) {
    const { serviceId } = useParams()
    const history = useHistory()
    console.log(history)
    const thisService = servicesData.find(service => service._id === serviceId)

    function handleClick() {

    }

    return (
        <div>
            <h1>Service Detail Page</h1>
            <h3>{thisService.name} - ${thisService.price}</h3>
            <p>{thisService.description}</p>
            <button onClick={handleClick}>Back to all services</button>
        </div>
    )
}

export default ServiceDetail