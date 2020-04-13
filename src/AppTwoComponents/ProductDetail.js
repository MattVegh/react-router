import React from "react"
import { useParams, useHistory } from 'react-router-dom'
import productsData from './productsData'

function ProductDetail() {
    const { productId } = useParams()
    const history = useHistory()

    const thisProduct = productsData.find(product => product.id === productId)

    return (
        <div>
            <h2>{thisProduct.name}</h2>
            <h3>${thisProduct.price}</h3>
            <p>{thisProduct.description}</p>
        </div>
    )
}

export default ProductDetail