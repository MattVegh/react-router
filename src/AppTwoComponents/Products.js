import React from "react"
import productsData from './productsData'

function Products() {

    const products = productsData.map(product => 
        <div key={product.id}>
            <h3>{product.name} - ${product.price}</h3>
            <p>{product.description}</p>
        </div>)

    return (
        <div>
            <h1>Products Page</h1>
            {products}
        </div>
    )
}

export default Products

/**
 * Challenge:
 * 
 * 1. Create a ProductDetail component
 * 2. Link each product name to a detail page of that product 
 *    under the route "/products/{insert product id here}" (e.g.: "/products/2")
 * 3. Clicking the product name should replace the product list page with
 *    the detail page of that component.
 * 
 * Hint: Check out the `useParams` lesson if you need a refresher.
 */