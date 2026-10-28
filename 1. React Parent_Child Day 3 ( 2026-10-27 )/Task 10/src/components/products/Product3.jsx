import React from 'react'
import bag from '../../assets/bag.webp'

export const Product3 = () => {
    return (
        <>
            <div>
                <div>
                    <img src={bag} alt="shoe" />
                </div>
                <div>
                    <h3>Sneakers</h3>
                    <p>Comfortable everyday shoes.</p>
                    <h2>$50</h2>
                    <button>View Product</button>
                </div>
            </div>
        </>
    )
}
