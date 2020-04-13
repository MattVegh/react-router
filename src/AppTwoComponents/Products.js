import React from "react"
import productsData from './productsData'

function Products() {

    const products = productsData.map(product => 
        <div key={product.id}>
            <h3>{product.name} - ${product.price}</h3>
            <p>{product.description}</p>
        </div>)

console.log(products)
    return (
        <div>
            <h1>Products Page</h1>
            {products}
        </div>
    )
}

export default Products