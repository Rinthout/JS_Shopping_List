import React from "react";

function ListItem({ item, clickItem, showQuantities }) {
    return (
        <li
            key={item.id}
            className="list-item"
            onClick={clickItem}
            value={item.title}
        >
            {item.title}
            {showQuantities && <li>amount: {item.amount}</li>}
        </li>
    )
}

export default ListItem;