import React from 'react'
import Spinner from '../Spinner/Spinner'

function ProductItems({ products, loading }) {
    if (loading) {
        return (
            <Spinner></Spinner>
        )
    }

    return (
        <ul>
        { 
            products.map((product, index) => (
            <li key={index}>
                <h2>{product.name}</h2>
            </li>
            ))
        }
      </ul>
    )
}

export default ProductItems