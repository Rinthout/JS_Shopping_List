import React from "react"

import List from "./List"
import InputField from "./InputField"

function GroceryList({ items, onItemClick, onItemAdd }) {
    return (
        <div>
            <h1>Shopping List</h1>
            <InputField 
                onSubmit={onItemAdd} 
            />
            <List
                items={items}
                onItemClick={onItemClick}
            />
        </div>
    )
}

export default GroceryList