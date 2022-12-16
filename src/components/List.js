import React from "react"
import ListItem from "./ListItem"

class List extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map((item) => (
                    <ListItem
                        key={item.id}
                        item={item}
                        clickItem={() => this.props.onItemClick(item)}
                        showQuantities={this.props.showQuantities}
                    />
                )
                )}
            </ul>
        )
    }
}

export default List



