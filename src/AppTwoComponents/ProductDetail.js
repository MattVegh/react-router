import React from "react"
import { useParams, useHistory } from 'react-router-dom'
import productsData from './productsData'

function ProductsDetail() {
    const { productId } = useParams()
    const history = useHistory()

    const thisProduct = productsData.find(product => product.id === productId)

    console.log(productId, thisProduct)
    return (
        <div>
            <h2>Product Detail Page</h2>
            <h3></h3>
        </div>
    )
}

export default ProductsDetail