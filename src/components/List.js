import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
    //     render() {
    //         return (
    //             <ul>
    //                 <ListItem title={"Apples"}/>
    //                 <ListItem title={"Milk"}/>
    //                 <ListItem title={"Cheese"}/>
    //                 <ListItem title={"Bread"}/>
    //             </ul>
    //         )
    //     };
    // };

    constructor(props) {
        super(props);
        this.state = {
            groceryItems: [
                { id: 1, title: "apples" },
                { id: 2, title: "milk" },
                { id: 3, title: "cheese" },
                { id: 4, title: "bread" }
            ]
        };
    }

    onItemClick(item) {
        console.log(`Clicked ${item.id}: ${item.title}`)
    }

    render() {
        return (
            <ul>
                {this.state.groceryItems.map((item) => (
                    <ListItem
                        key={item.id}
                        item={item}
                        clickItem={() => this.onItemClick(item)}
                    />
                ))}
            </ul>
        )
    };
};

export default List;



