import React from "react"

import List from "./List"

function ShoppingCart({ items, onItemClick, onEmptyClick }) {
    return (
        <div>
            <h1>Shopping Cart</h1>
            <button 
                onClick={onEmptyClick}>
            Empty the Shopping Cart
            </button>
            <List
                items={items}
                onItemClick={onItemClick} 
                showQuantities={true}           
            />            
        </div>
    )
}

export default ShoppingCart