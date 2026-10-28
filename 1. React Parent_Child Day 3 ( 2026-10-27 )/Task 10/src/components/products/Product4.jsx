import React from 'react'
import watch from '../../assets/watch.jfif'

export const Product4 = () => {
    return (
        <>
            <div>
                <div>
                    <img src={watch} alt="shoe" />
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
