import React from 'react'
import headset from '../../assets/headset.avif'

export const Product2 = () => {
    return (
        <>
            <div>
                <div>
                    <img src={headset} alt="shoe" />
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
