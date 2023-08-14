import React from 'react'

function ProductItems({ products, loading }) {
    if (loading) {
        return (
            <p>Loading...</p>
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