import React from 'react'
import shoe from '../../assets/shoe.jpg'

export const Product1 = () => {
    return (
        <>
            <div>
                <div>
                    <img src={shoe} alt="shoe" />
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
