import React from "react"
import { useParams, useHistory } from 'react-router-dom'
import productsData from './productsData'

function Products() {

    const products = productsData.map(product => 
        <div>
            <h3>{product.name} - {product.price}</h3>
            <p>{product.description}</p>
        </div>)

console.log(products)
    return (
        <div>
            <h1>Products Page</h1>
        </div>
    )
}

export default Products